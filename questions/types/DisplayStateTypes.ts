import { StudyObject } from './QuestionTypes'

export type DisplayStateType =
    | 'instructions'
    | 'studies'
    | 'visuals'
    | 'metrics'
    | 'empirical'

export type DialogStateType = {
    dialog_type:
        | undefined
        | 'review_details'
        | 'study_details'
        | 'study_internal_validity'
        | 'study_external_validity'
        | 'study_reporting'
        | 'study_outcomes'
    study: undefined | StudyObject
}
