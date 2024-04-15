import { Dialog, DialogTitle } from '@radix-ui/react-dialog'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogOverlay,
} from '../ui/dialog'
import { dbAtom } from '@/atoms/db_atom'
import { useReducerAtomLocal as useReducerAtom } from '@/components/hooks/useReducerAtomLocal'
import { StudyDetailsForm } from '../forms/study_details/study_details_form'
import { database_reducer } from '@/atoms/reducers/reducer'

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
