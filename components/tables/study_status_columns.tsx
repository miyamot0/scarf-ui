import { ResponseStatus, StudyObject } from '@/types/QuestionTypes'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '../ui/button'
import { MoreHorizontal } from 'lucide-react'
import { Checkbox } from '../ui/checkbox'
import { DataTableColumnHeader } from './study_status_column_header'
import { color_code } from '@/lib/color_coding'
import { cn } from '@/lib/utils'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { toast } from '../ui/use-toast'
import { dbAtom, database_reducer } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import { Badge } from '../ui/badge'

export const study_columns: ColumnDef<StudyObject>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: 'StudyID',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ID" />
        ),
    },
    {
        accessorKey: 'StudyTag',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Tag" />
        ),
    },
    {
        accessorKey: 'StudyAuthors',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Authors" />
        ),
    },
    {
        accessorKey: 'StudyTitle',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Title" />
        ),
    },
    {
        accessorKey: 'StudyJournal',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Journal" />
        ),
    },
    {
        accessorKey: 'StudyYear',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Year" />
        ),
        cell: ({ row }) => {
            const study = row.original
            return <span>{study.StudyYear < 0 ? '' : study.StudyYear}</span>
        },
    },
    {
        accessorKey: 'StudyStatus',
        header: 'Status',
        enableHiding: false,
        enableSorting: false,
        cell: ({ row }) => {
            const study = row.original

            const values = [
                study.Reporting.Status,
                study.InternalValidity.Status,
                study.ExternalValidity.Status,
                study.Outcomes.Status,
            ]

            if (values.every((v) => v === 'Completed')) {
                return <Badge className="bg-green-500">Completed</Badge>
            }

            if (values.includes('Completed')) {
                return <Badge className="bg-orange-500">In Progress</Badge>
            }

            return <Badge className="bg-red-500">Not Started</Badge>
        },
    },
    {
        id: 'actions',
        header: 'Actions',
        enableHiding: false,
        enableSorting: false,
        cell: ({ row }) => {
            const [, dispatch] = useReducerAtom(dbAtom, database_reducer)
            const study = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Edit Record</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => {
                                dispatch({
                                    type: 'update_dialog_state',
                                    payload: {
                                        dialog_state: {
                                            dialog_type: 'study_details',
                                            study: study,
                                        },
                                    },
                                })
                            }}
                        >
                            Study Information
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                dispatch({
                                    type: 'update_dialog_state',
                                    payload: {
                                        dialog_state: {
                                            dialog_type:
                                                'study_internal_validity',
                                            study: study,
                                        },
                                    },
                                })
                            }}
                        >
                            Internal Validity Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                dispatch({
                                    type: 'update_dialog_state',
                                    payload: {
                                        dialog_state: {
                                            dialog_type:
                                                'study_external_validity',
                                            study: study,
                                        },
                                    },
                                })
                            }}
                        >
                            External Validity Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                dispatch({
                                    type: 'update_dialog_state',
                                    payload: {
                                        dialog_state: {
                                            dialog_type: 'study_reporting',
                                            study: study,
                                        },
                                    },
                                })
                            }}
                        >
                            Reporting Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                dispatch({
                                    type: 'update_dialog_state',
                                    payload: {
                                        dialog_state: {
                                            dialog_type: 'study_outcomes',
                                            study: study,
                                        },
                                    },
                                })
                            }}
                        >
                            Outcomes Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="text-red-500 hidden"
                            onClick={() => {
                                const confirm = window.confirm(
                                    'Are you sure you want to delete this record?'
                                )

                                if (!confirm) {
                                    return
                                }

                                dispatch({
                                    type: 'remove',
                                    payload: {
                                        study_id: study.StudyID,
                                    },
                                })

                                toast({
                                    title: 'Study Removed.',
                                    duration: 2000,
                                })
                            }}
                        >
                            Delete Record
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
