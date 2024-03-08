import { Dialog, DialogTitle } from '@radix-ui/react-dialog'
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
} from '../ui/dialog'
import { Button } from '../ui/button'
import { dbAtom, database_reducer } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import { StudyDetailsForm } from '../forms/study_details/study_details_form'
import { ScrollArea } from '../ui/scroll-area'

export function StudyDetailsDialog() {
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)

    return (
        <Dialog
            open={state.DialogState.dialog_type === 'study_details'}
            onOpenChange={() => {
                dispatch({
                    type: 'update_dialog_state',
                    payload: {
                        dialog_state: {
                            dialog_type: undefined,
                            study: undefined,
                        },
                    },
                })
            }}
            modal={true}
        >
            <DialogOverlay>
                <DialogContent className="max-h-[80%] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Study Information Editor</DialogTitle>
                        <DialogDescription>{`Editing study with tag: ${state.DialogState.study?.StudyTag}`}</DialogDescription>
                    </DialogHeader>

                    <StudyDetailsForm study={state.DialogState.study} />
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    )
}
