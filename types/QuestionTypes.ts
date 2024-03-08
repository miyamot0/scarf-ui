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
