import type { DisplayState, DialogState } from '@/types/DisplayStateTypes'
import type { GlobalStateType } from '@/types/GlobalStateType'
import type { StudyObject, PublicationType } from '@/types/QuestionTypes'

export type DatabaseAction =
    | { type: 'load_local' }
    | { type: 'load_external'; payload: { saved_state: GlobalStateType } }
    | { type: 'save_local' }
    | { type: 'add' }
    | { type: 'update_display_state'; payload: { display_state: DisplayState } }
    | { type: 'update_dialog_state'; payload: { dialog_state: DialogState } }
    | {
          type: 'update_study'
          payload: { study_id: string; updatedData: StudyObject }
      }
    | {
          type: 'update_study_internal_validity'
          payload: { study_id: string; updatedData: StudyObject }
      }
    | { type: 'remove'; payload: { study_ids: string[] } }
    | {
          type: 'update_study_category'
          payload: { study_id: string; category: PublicationType }
      }
