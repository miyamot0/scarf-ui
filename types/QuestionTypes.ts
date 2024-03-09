import {
    ExternalValidityQuestions,
    InternalValidityQuestions,
    OutcomesQuestions,
    ReportingQuestions,
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

export type QuestionObjectHolder = {
    Category: QuestionCategory
    QuestionID: string
    QuestionStem: string
    QuestionInstruction: string
    QuestionType: QuestionType
    Response?: string
}

export type QuestionObject = {
    Category: QuestionCategory
    QuestionID: string
    QuestionStem: string
    QuestionInstruction: string
    QuestionType: QuestionType
}

export type ResponseStatus = 'NotStarted' | 'InProgress' | 'Completed'

export type StudyObject = {
    StudyID: string
    StudyTag: string
    StudyAuthors: string
    StudyTitle: string
    StudyJournal: string
    StudyYear: number
    InternalValidity: TypeOfValidityObject
    ExternalValidity: TypeOfValidityObject
    Reporting: TypeOfValidityObject
    Outcomes: TypeOfValidityObject
}

export type TypeOfValidityObject = {
    Status: ResponseStatus
    Questions: QuestionObjectHolder[]
}

export const InternalValidityQuestionDefault: TypeOfValidityObject = {
    Status: 'NotStarted',
    Questions: InternalValidityQuestions,
}

export const ExternalValidityQuestionDefault: TypeOfValidityObject = {
    Status: 'NotStarted',
    Questions: ExternalValidityQuestions,
}

export const ReportingQuestionDefault: TypeOfValidityObject = {
    Status: 'NotStarted',
    Questions: ReportingQuestions,
}

export const OutcomesQuestionDefault: TypeOfValidityObject = {
    Status: 'NotStarted',
    Questions: OutcomesQuestions,
}
