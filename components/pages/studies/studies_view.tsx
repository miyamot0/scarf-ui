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
import { PenIcon } from 'lucide-react'
import { useReducerAtom } from 'jotai/utils'
import { dbAtom, database_reducer } from '@/atoms/db_atom'
import { StudyObject } from '@/types/QuestionTypes'
import { cn } from '@/lib/utils'

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
                        <TableHead>Internal Validity</TableHead>
                        <TableHead>External Validity</TableHead>
                        <TableHead>Reporting</TableHead>
                        <TableHead>Action</TableHead>
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
                                <TableCell className={''}>
                                    <Button
                                        size={'sm'}
                                        className={cn(
                                            color_code(
                                                study.InternalValidity.Status
                                            )
                                        )}
                                        onClick={() => {
                                            toast({
                                                title: 'TODO: Edit Study Internal Validity',
                                                description: 'TODO',
                                                duration: 2000,
                                            })
                                        }}
                                    >
                                        <PenIcon size={16} color="white" />
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        size={'sm'}
                                        className={cn(
                                            color_code(
                                                study.ExternalValidity.Status
                                            )
                                        )}
                                        onClick={() => {
                                            toast({
                                                title: 'TODO: Edit Study External Validity',
                                                description: 'TODO',
                                                duration: 2000,
                                            })
                                        }}
                                    >
                                        <PenIcon size={16} color="white" />
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        size={'sm'}
                                        className={cn(
                                            color_code(study.Reporting.Status)
                                        )}
                                        onClick={() => {
                                            toast({
                                                title: 'TODO: Edit Study Reporting',
                                                description: 'TODO',
                                                duration: 2000,
                                            })
                                        }}
                                    >
                                        <PenIcon size={16} color="white" />
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        size={'sm'}
                                        className={cn(
                                            color_code(study.Outcomes.Status)
                                        )}
                                        onClick={() => {
                                            toast({
                                                title: 'TODO: Edit Study Outcomes',
                                                description: 'TODO',
                                                duration: 2000,
                                            })
                                        }}
                                    >
                                        <PenIcon size={16} color="white" />
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        size={'sm'}
                                        className={cn('w-full')}
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
                                        <PenIcon size={16} color="white" />
                                    </Button>
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
