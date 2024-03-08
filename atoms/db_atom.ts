import { atom } from 'jotai'
import { StudyObject } from '@/types/QuestionTypes'
import { v4 as uuidv4 } from 'uuid'
import { GlobalStateType } from '@/types/GlobalStateType'
import { DialogState, DisplayState } from '@/types/DisplayStateTypes'

export const dbAtom = atom<GlobalStateType>({
    DialogState: {
        dialog_type: undefined,
        study: undefined,
    },
    DisplayState: 'studies',
    Studies: [],
})

function update_study(
    study_array: StudyObject[],
    id: string,
    updatedData: StudyObject
) {
    return study_array.map((item) =>
        item.StudyID === id ? { ...item, ...updatedData } : item
    )
}

export type DatabaseAction =
    | { type: 'add' }
    | { type: 'update_display_state'; payload: { display_state: DisplayState } }
    | { type: 'update_dialog_state'; payload: { dialog_state: DialogState } }
    | {
          type: 'update_study'
          payload: { study_id: string; updatedData: StudyObject }
      }
    | { type: 'remove'; payload: { study_id: string } }

export const database_reducer = (
    state: GlobalStateType,
    action: DatabaseAction
) => {
    switch (action.type) {
        case 'add':
            const new_study: StudyObject = {
                StudyID: uuidv4(),
                StudyTag: '',
                StudyAuthors: '',
                StudyTitle: '',
                StudyJournal: '',
                StudyYear: -1,
                InternalValidity: {
                    Category: 'InternalValidity',
                    Answers: [],
                    Status: 'NotStarted',
                },
                ExternalValidity: {
                    Category: 'ExternalValidity',
                    Answers: [],
                    Status: 'NotStarted',
                },
                Reporting: {
                    Category: 'Reporting',
                    Answers: [],
                    Status: 'NotStarted',
                },
                Outcomes: {
                    Category: 'Outcomes',
                    Answers: [],
                    Status: 'NotStarted',
                },
            }

            return {
                ...state,
                Studies: [...state.Studies, new_study],
            }
        case 'remove':
            return {
                ...state,
                Studies: state.Studies.filter(
                    (item) => item.StudyID !== action.payload.study_id
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
                Studies: update_study(
                    state.Studies,
                    action.payload.study_id,
                    action.payload.updatedData
                ),
            }
        default:
            return state
    }
}
