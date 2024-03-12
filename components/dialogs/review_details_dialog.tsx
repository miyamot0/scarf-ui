import { Dialog, DialogTitle } from '@radix-ui/react-dialog'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogOverlay,
} from '../ui/dialog'
import { dbAtom } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import { database_reducer } from '@/atoms/reducers/reducer'
import { ReviewDetailsForm } from '../forms/review_details/review_details_form'

export function ReviewDetailsDialog() {
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)

    return (
        <Dialog
            open={state.DialogState.dialog_type === 'review_details'}
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
                        <DialogTitle>Review Information Editor</DialogTitle>
                        <DialogDescription>
                            Edit information related to review
                        </DialogDescription>
                    </DialogHeader>

                    <ReviewDetailsForm />
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    )
}
