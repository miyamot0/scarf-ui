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
import { MoreHorizontal, PenIcon } from 'lucide-react'
import { useReducerAtom } from 'jotai/utils'
import { dbAtom, database_reducer } from '@/atoms/db_atom'
import { StudyObject } from '@/types/QuestionTypes'
import { cn } from '@/lib/utils'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const color_code = (status: string) => {
    switch (status) {
        case 'NotStarted':
            return 'bg-red-500'
        case 'InProgress':
            return 'bg-yellow-500'
        case 'Completed':
            return 'bg-green-500'
        default:
            return 'bg-gray-500'
    }
}

export function StudiesView() {
    const { toast } = useToast()
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)

    return (
        <div className="flex flex-col gap-y-4">
            <p className="text-red">
                Note: Color code whether or not features are completed.
            </p>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Study Code</TableHead>
                        <TableHead>Study Authors</TableHead>
                        <TableHead>Study Title</TableHead>
                        <TableHead>Study Journal</TableHead>
                        <TableHead>Study Year</TableHead>
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
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="h-8 w-8 p-0"
                                            >
                                                <span className="sr-only">
                                                    Open menu
                                                </span>
                                                <MoreHorizontal className="h-4 w-4" />
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
                                                <div
                                                    className={cn(
                                                        'w-2 h-2 mr-2 rounded-full',
                                                        'bg-green-500'
                                                    )}
                                                ></div>
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
                                                <div
                                                    className={cn(
                                                        'w-2 h-2 mr-2 rounded-full',
                                                        color_code(
                                                            study
                                                                .InternalValidity
                                                                .Status
                                                        )
                                                    )}
                                                ></div>
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
                                                <div
                                                    className={cn(
                                                        'w-2 h-2 mr-2 rounded-full',
                                                        color_code(
                                                            study
                                                                .ExternalValidity
                                                                .Status
                                                        )
                                                    )}
                                                ></div>
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
                                                <div
                                                    className={cn(
                                                        'w-2 h-2 mr-2 rounded-full',
                                                        color_code(
                                                            study.Reporting
                                                                .Status
                                                        )
                                                    )}
                                                ></div>
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
                                                <div
                                                    className={cn(
                                                        'w-2 h-2 mr-2 rounded-full',
                                                        color_code(
                                                            study.Outcomes
                                                                .Status
                                                        )
                                                    )}
                                                ></div>
                                                Outcomes Details
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem
                                                className="text-red-500"
                                                onClick={() => {
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
                Add Study
            </Button>
        </div>
    )
}
