import {
    InternalValidityQuestions,
    QuestionObjectHolder,
} from '@/assets/simplified_questions'

export type QuestionCategory =
    | 'DV Measurement'
    | 'Design Appropriateness'
    | 'Fidelity'
    | 'Social Validity'
    | 'Generality & Boundedness'
    | 'Maintenance'
    | 'Reporting'
    | 'Outcomes'

export type QuestionCategoryDVMeasurement =
    | 'DV_Measurement_1'
    | 'DV_Measurement_2'
    | 'DV_Measurement_3'
    | 'DV_Measurement_4'
    | 'DV_Measurement_5'
    | 'DV_Measurement_6'
    | 'DV_Measurement_7'

export type QuestionType =
    | 'YesNo'
    | 'Text'
    | 'YesNoNotPossible'
    | 'YesNoPartial'
    | 'YesNoNotApplicable'
    | 'YesNoNotApplicableForSome'
    | 'CbPcbG'
    | 'YIntOnlyYBothNo'
    | 'GeneralizationOutcomes'
    | 'MaintenancePeriod'
    | 'PrimarySecondaryUnknown'
    | 'ConditionChangeCharacterization'
    | 'ConditionChangeCharacterizationNA'

export type QuestionObject = {
    Category: QuestionCategory
    QuestionID: string
    QuestionStem: string
    QuestionInstruction: string
    QuestionType: QuestionType
}

export type AnswerObject = {
    Category: QuestionCategory
    QuestionID: string
    QuestionType: QuestionType
}

export type ResponseStatus = 'NotStarted' | 'InProgress' | 'Completed'

export type AnswerCategoryObject = {
    Category: 'InternalValidity' | 'ExternalValidity' | 'Reporting' | 'Outcomes'
    Answers: AnswerObject[]
    Status: ResponseStatus
}

export type StudyObject = {
    StudyID: string
    StudyTag: string
    StudyAuthors: string
    StudyTitle: string
    StudyJournal: string
    StudyYear: number
    InternalValidity: InternalValidityObject
    //ExternalValidity: AnswerCategoryObject
    //Reporting: AnswerCategoryObject
    //Outcomes: AnswerCategoryObject
}

export type InternalValidityObject = {
    Status: ResponseStatus
    Questions: QuestionObjectHolder[]
}

export const InternalValidityQuestionDefault: InternalValidityObject = {
    Status: 'NotStarted',
    Questions: InternalValidityQuestions,
}
