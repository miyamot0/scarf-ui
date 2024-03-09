import { StudyObject } from '@/types/QuestionTypes'
import { MoreHorizontal } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuGroup,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuPortal,
    DropdownMenuSubTrigger,
    DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu'
import { dbAtom } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import { database_reducer } from '@/atoms/reducers/reducer'
import { Button } from '@/components/ui/button'

export function ActionCell({ Study }: { Study: StudyObject }) {
    const [, dispatch] = useReducerAtom(dbAtom, database_reducer)

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
                                    study: Study,
                                },
                            },
                        })
                    }}
                >
                    Study Information
                </DropdownMenuItem>

                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <span>Peer Review Status</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuCheckboxItem
                                    checked={
                                        Study.PublicationType === 'Unclassified'
                                    }
                                    onCheckedChange={() => {
                                        dispatch({
                                            type: 'update_study_category',
                                            payload: {
                                                study_id: Study.StudyID,
                                                category: 'Unclassified',
                                            },
                                        })
                                    }}
                                >
                                    Unclassified
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={
                                        Study.PublicationType === 'Journal'
                                    }
                                    onCheckedChange={() => {
                                        dispatch({
                                            type: 'update_study_category',
                                            payload: {
                                                study_id: Study.StudyID,
                                                category: 'Journal',
                                            },
                                        })
                                    }}
                                >
                                    Published Article
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={
                                        Study.PublicationType === 'Unpublished'
                                    }
                                    onCheckedChange={() => {
                                        dispatch({
                                            type: 'update_study_category',
                                            payload: {
                                                study_id: Study.StudyID,
                                                category: 'Unpublished',
                                            },
                                        })
                                    }}
                                >
                                    Unpublished
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>

                <DropdownMenuItem
                    onClick={() => {
                        dispatch({
                            type: 'update_dialog_state',
                            payload: {
                                dialog_state: {
                                    dialog_type: 'study_internal_validity',
                                    study: Study,
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
                                    dialog_type: 'study_external_validity',
                                    study: Study,
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
                                    study: Study,
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
                                    study: Study,
                                },
                            },
                        })
                    }}
                >
                    Outcomes Details
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
