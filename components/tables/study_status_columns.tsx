import { StudyObject } from '@/types/QuestionTypes'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '../ui/button'
import { ArrowUpDown } from 'lucide-react'
import { Checkbox } from '../ui/checkbox'
import { DataTableColumnHeader } from './study_status_column_header'

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
    },
    {
        accessorKey: 'StudyStatus',
        header: 'Status',
        enableHiding: false,
        enableSorting: false,
    },
]
