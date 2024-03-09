import { Dialog, DialogTitle } from '@radix-ui/react-dialog'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogOverlay,
} from '../ui/dialog'
import { dbAtom, database_reducer } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import { StudyReportingForm } from '../forms/study_reporting_form/study_reporting_form'

export function StudyReportingDialog() {
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)

    return (
        <Dialog
            open={state.DialogState.dialog_type === 'study_reporting'}
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
                        <DialogDescription>{`Editing reporting metrics`}</DialogDescription>
                    </DialogHeader>

                    <StudyReportingForm study={state.DialogState.study} />
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    )
}
