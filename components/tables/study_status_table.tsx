'use client'

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Button } from '../ui/button'
import React from 'react'
import { Input } from '../ui/input'
import { DataTablePagination } from './study_status_table_pagination'
import { DataTableViewOptions } from './study_status_table_column_toggle'
import {
    DeleteIcon,
    HardDriveDownloadIcon,
    HardDriveUploadIcon,
    SaveIcon,
} from 'lucide-react'
import { useReducerAtom } from 'jotai/utils'
import { dbAtom } from '@/atoms/db_atom'
import { useToast } from '../ui/use-toast'
import { StudyObject } from '@/types/QuestionTypes'
import { database_reducer } from '@/atoms/reducers/reducer'

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: StudyObject[]
}

export function StudyStatusDataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<StudyObject, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const { toast } = useToast()
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({
            StudyID: false,
        })
    const [rowSelection, setRowSelection] = React.useState({})
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)
    const refFileInput = React.useRef<HTMLInputElement>(null)

    function saveTxtToFile(fileName: string, textData: string) {
        const blobData = new Blob([textData], { type: 'text/plain' })
        const urlToBlob = window.URL.createObjectURL(blobData)

        const a = document.createElement('a')
        a.style.setProperty('display', 'none')
        document.body.appendChild(a)
        a.href = urlToBlob
        a.download = fileName
        a.click()
        window.URL.revokeObjectURL(urlToBlob)
        a.remove()
    }

    const table = useReactTable<StudyObject>({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        enableMultiRowSelection: true,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    const selected_rows = table.getSelectedRowModel().rows

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-row items-center justify-between">
                <Input
                    placeholder="Filter by study title"
                    value={
                        (table
                            .getColumn('StudyTitle')
                            ?.getFilterValue() as string) ?? ''
                    }
                    onChange={(event) =>
                        table
                            .getColumn('StudyTitle')
                            ?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <div className="flex flex-row gap-x-2">
                    {selected_rows.length > 0 && (
                        <Button
                            variant="destructive"
                            size="sm"
                            className="ml-auto hidden h-8 lg:flex "
                            onClick={() => {
                                const selected_ids = selected_rows
                                    .map((r) => r.original)
                                    .map((r) => r.StudyID)

                                dispatch({
                                    type: 'remove',
                                    payload: { study_ids: selected_ids },
                                })

                                toast({
                                    title: 'Item(s) Removed.',
                                    description:
                                        'Data has been removed from data set.',
                                    duration: 2000,
                                })
                            }}
                        >
                            <DeleteIcon size={20} className="mr-2" />
                            Delete Selected
                        </Button>
                    )}

                    <Button
                        variant="outline"
                        size="sm"
                        className="ml-auto hidden h-8 lg:flex"
                        onClick={() => {
                            dispatch({ type: 'save_local' })

                            toast({
                                title: 'Saved',
                                description: 'Your data has been saved.',
                                duration: 2000,
                            })
                        }}
                    >
                        <SaveIcon size={20} className="mr-2" />
                        Save
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        className="ml-auto hidden h-8 lg:flex"
                        onClick={() => {
                            if (refFileInput.current) {
                                refFileInput.current.click()
                            }
                        }}
                    >
                        <HardDriveUploadIcon size={20} className="mr-2" />
                        Import
                    </Button>
                    <input
                        type="file"
                        ref={refFileInput}
                        className="hidden"
                        onChange={(e) => {
                            if (!e.target.files) return

                            const file = e.target.files[0]
                            const reader = new FileReader()

                            reader.onload = (e) => {
                                if (!e.target) return

                                const content = e.target.result

                                dispatch({
                                    type: 'load_external',
                                    payload: {
                                        saved_state: JSON.parse(
                                            content as string
                                        ),
                                    },
                                })
                            }
                            reader.readAsText(file)
                        }}
                    />
                    <Button
                        variant="outline"
                        size="sm"
                        className="ml-auto hidden h-8 lg:flex"
                        onClick={() => {
                            const data = JSON.stringify(state)
                            saveTxtToFile('scarf-web-ui.json', data)
                        }}
                    >
                        <HardDriveDownloadIcon size={20} className="mr-2" />
                        Export
                    </Button>

                    <DataTableViewOptions table={table} />
                </div>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && 'selected'
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No Studies Entered.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <DataTablePagination table={table} />
        </div>
    )
}
