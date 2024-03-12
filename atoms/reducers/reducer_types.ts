import type {
    DisplayStateType,
    DialogStateType,
} from '@/questions/types/DisplayStateTypes'
import type { GlobalStateType } from '@/questions/types/GlobalStateType'
import type {
    StudyObject,
    PublicationType,
} from '@/questions/types/QuestionTypes'
import { RefObject } from 'react'

export type DatabaseAction =
    | {
          type: 'load_local'
      }
    | { type: 'load_external'; payload: { saved_state: GlobalStateType } }
    | { type: 'save_local' }
    | { type: 'add' }
    | {
          type: 'update_display_state'
          payload: { display_state: DisplayStateType }
      }
    | {
          type: 'update_dialog_state'
          payload: { dialog_state: DialogStateType }
      }
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
    | {
          type: 'load_ref'
          payload: { number: 1 | 2 | 3; ref: RefObject<SVGSVGElement> }
      }
