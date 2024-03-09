import { StudyObject } from './QuestionTypes'

export type DisplayState = 'instructions' | 'studies' | 'visuals' | 'metrics'

export type DialogState = {
    dialog_type: undefined | 'study_details' | 'study_internal_validity'
    study: undefined | StudyObject
}
