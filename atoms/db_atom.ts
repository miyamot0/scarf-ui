import { atom } from 'jotai'
import { StudyObject } from '@/types/QuestionTypes'
import { v4 as uuidv4 } from 'uuid'

export const dbAtom = atom<StudyObject[]>([])

export type DatabaseAction =
    | { type: 'add' }
    | { type: 'remove'; payload: { study_id: string } }

export const database_reducer = (
    state: StudyObject[],
    action: DatabaseAction
) => {
    switch (action.type) {
        case 'add':
            const new_study: StudyObject = {
                StudyID: uuidv4(),
                StudyAuthors: [],
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

            return [...state, new_study]
        case 'remove':
            return state.filter(
                (item) => item.StudyID !== action.payload.study_id
            )
        default:
            return state
    }
}
