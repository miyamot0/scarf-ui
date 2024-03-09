import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { useToast } from '@/components/ui/use-toast'
import {
    DeleteIcon,
    EditIcon,
    FilePlus2Icon,
    MoreHorizontal,
    PenIcon,
} from 'lucide-react'
import { useReducerAtom } from 'jotai/utils'
import { dbAtom, database_reducer } from '@/atoms/db_atom'
import { ResponseStatus, StudyObject } from '@/types/QuestionTypes'
import { cn } from '@/lib/utils'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { color_code, text_color_code } from '@/lib/color_coding'

const StatusCoding = ({ status }: { status?: ResponseStatus }) => {
    return (
        <div
            className={cn(
                'w-2 h-2 mr-2 rounded-full',
                color_code(status ?? '')
            )}
        ></div>
    )
}

export function StudiesView() {
    const { toast } = useToast()
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)

    return (
        <div className="flex flex-col gap-y-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Study Code</TableHead>
                        <TableHead>Study Authors</TableHead>
                        <TableHead>Study Title</TableHead>
                        <TableHead>Study Journal</TableHead>
                        <TableHead>Study Year</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {state.Studies.map((study: StudyObject) => {
                        return (
                            <TableRow key={`study_display_${study.StudyID}`}>
                                <TableCell>{study.StudyTag}</TableCell>
                                <TableCell>{study.StudyAuthors}</TableCell>
                                <TableCell>{study.StudyTitle}</TableCell>
                                <TableCell>{study.StudyJournal}</TableCell>
                                <TableCell>
                                    {study.StudyYear !== -1
                                        ? study.StudyYear
                                        : ''}
                                </TableCell>

                                <TableCell>
                                    <div className="h-100 flex flex-row ">
                                        <StatusCoding
                                            status={
                                                study.InternalValidity.Status
                                            }
                                        />
                                        <StatusCoding
                                            status={
                                                study.ExternalValidity.Status
                                            }
                                        />
                                        <StatusCoding
                                            status={study.Reporting.Status}
                                        />
                                        <StatusCoding
                                            status={study.Outcomes.Status}
                                        />
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="h-8 w-8 p-0"
                                            >
                                                <span className="sr-only">
                                                    Open menu
                                                </span>
                                                <MoreHorizontal />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>
                                                Edit Current Record
                                            </DropdownMenuLabel>
                                            <DropdownMenuItem
                                                onClick={() => {
                                                    dispatch({
                                                        type: 'update_dialog_state',
                                                        payload: {
                                                            dialog_state: {
                                                                dialog_type:
                                                                    'study_details',
                                                                study: study,
                                                            },
                                                        },
                                                    })
                                                }}
                                            >
                                                <EditIcon
                                                    size={20}
                                                    className={cn('mr-2')}
                                                />
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
                                                <EditIcon
                                                    size={20}
                                                    className={cn(
                                                        'mr-2',
                                                        text_color_code(
                                                            study
                                                                .InternalValidity
                                                                .Status
                                                        )
                                                    )}
                                                />
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
                                                <EditIcon
                                                    size={20}
                                                    className={cn(
                                                        'mr-2',
                                                        text_color_code(
                                                            study
                                                                .ExternalValidity
                                                                .Status
                                                        )
                                                    )}
                                                />
                                                External Validity Details
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() => {
                                                    dispatch({
                                                        type: 'update_dialog_state',
                                                        payload: {
                                                            dialog_state: {
                                                                dialog_type:
                                                                    'study_reporting',
                                                                study: study,
                                                            },
                                                        },
                                                    })
                                                }}
                                            >
                                                <EditIcon
                                                    size={20}
                                                    className={cn(
                                                        'mr-2',
                                                        text_color_code(
                                                            study.Reporting
                                                                .Status
                                                        )
                                                    )}
                                                />
                                                Reporting Details
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() => {
                                                    dispatch({
                                                        type: 'update_dialog_state',
                                                        payload: {
                                                            dialog_state: {
                                                                dialog_type:
                                                                    'study_outcomes',
                                                                study: study,
                                                            },
                                                        },
                                                    })
                                                }}
                                            >
                                                <EditIcon
                                                    size={20}
                                                    className={cn(
                                                        'mr-2',
                                                        text_color_code(
                                                            study.Outcomes
                                                                .Status
                                                        )
                                                    )}
                                                />
                                                Outcomes Details
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem
                                                className="hover:bg-red-500 hover:text-white"
                                                onClick={() => {
                                                    const confirm =
                                                        window.confirm(
                                                            'Are you sure you want to delete this record?'
                                                        )

                                                    if (!confirm) {
                                                        return
                                                    }

                                                    dispatch({
                                                        type: 'remove',
                                                        payload: {
                                                            study_id:
                                                                study.StudyID,
                                                        },
                                                    })

                                                    toast({
                                                        title: 'Study Removed.',
                                                        duration: 2000,
                                                    })
                                                }}
                                            >
                                                <DeleteIcon
                                                    size={20}
                                                    className="mr-2"
                                                />
                                                Delete Record
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <Button
                size={'lg'}
                className="w-full"
                onClick={() => {
                    dispatch({ type: 'add' })

                    toast({
                        title: 'Study Added to Dataset.',
                        duration: 2000,
                    })
                }}
            >
                <FilePlus2Icon size={20} className="mr-2" />
                Add Study
            </Button>
        </div>
    )
}
