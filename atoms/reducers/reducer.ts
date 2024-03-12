import type { GlobalStateType } from '@/questions/types/GlobalStateType'
import {
    InternalValidityQuestionDefault,
    ExternalValidityQuestionDefault,
    ReportingQuestionDefault,
    OutcomesQuestionDefault,
} from '@/questions/questions_defaults'
import type { DatabaseAction } from './reducer_types'
import { v4 as uuidv4 } from 'uuid'
import { StudyObject } from '@/questions/types/QuestionTypes'

const KEY_LOCAL_STORAGE = 'scarf-web-ui'

export const database_reducer = (
    state: GlobalStateType,
    action: DatabaseAction
) => {
    switch (action.type) {
        case 'load_local':
            const value = localStorage.getItem(KEY_LOCAL_STORAGE)

            if (value)
                return {
                    ...(JSON.parse(value) as GlobalStateType),
                }

            return state

        case 'load_external':
            return action.payload.saved_state

        case 'save_local':
            localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(state))

            return state

        case 'add':
            const new_study: StudyObject = {
                StudyID: uuidv4(),
                StudyTag: '',
                StudyAuthors: '',
                StudyTitle: '',
                StudyJournal: '',
                StudyYear: -1,
                InternalValidity: InternalValidityQuestionDefault,
                ExternalValidity: ExternalValidityQuestionDefault,
                Reporting: ReportingQuestionDefault,
                Outcomes: OutcomesQuestionDefault,
                PublicationType: 'Unclassified',
            }

            return {
                ...state,
                Studies: [...state.Studies, new_study],
            }
        case 'remove':
            return {
                ...state,
                Studies: state.Studies.filter(
                    (item) => !action.payload.study_ids.includes(item.StudyID)
                ),
            }
        case 'update_display_state':
            return {
                ...state,
                DisplayState: action.payload.display_state,
            }
        case 'update_dialog_state':
            return {
                ...state,
                DialogState: action.payload.dialog_state,
            }
        case 'update_study':
            return {
                ...state,
                DialogState: {
                    dialog_type: undefined,
                    study: undefined,
                },
                Studies: state.Studies.map((item) =>
                    item.StudyID === action.payload.study_id
                        ? { ...item, ...action.payload.updatedData }
                        : item
                ),
            }
        case 'update_study_category':
            return {
                ...state,
                Studies: state.Studies.map((item) =>
                    item.StudyID === action.payload.study_id
                        ? { ...item, PublicationType: action.payload.category }
                        : item
                ),
            }
        case 'update_review':
            return {
                ...state,
                DialogState: {
                    dialog_type: undefined,
                    study: undefined,
                },
                ReviewName: action.payload.review_name,
                ReviewType: action.payload.review_type,
            }
        case 'load_ref':
            switch (action.payload.number) {
                case 1:
                    return {
                        ...state,
                        FigureRef1: action.payload.ref,
                    }
                case 2:
                    return {
                        ...state,
                        FigureRef2: action.payload.ref,
                    }
                case 3:
                    return {
                        ...state,
                        FigureRef3: action.payload.ref,
                    }
                default:
                    return state
            }
        default:
            return state
    }
}
