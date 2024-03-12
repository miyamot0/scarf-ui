import {
    InternalValidityQuestions,
    ExternalValidityQuestions,
    ReportingQuestions,
    OutcomesQuestions,
} from '@/questions/simplified_questions'
import { TypeOfValidityObject } from './types/QuestionTypes'

export const InternalValidityQuestionDefault: TypeOfValidityObject = {
    Status: 'NotStarted',
    Questions: InternalValidityQuestions.map((question) => {
        return {
            ...question,
            QuestionInstruction: undefined,
            QuestionStem: undefined,
            QuestionType: undefined,
            Category: undefined,
        }
    }),
}

export const ExternalValidityQuestionDefault: TypeOfValidityObject = {
    Status: 'NotStarted',
    Questions: ExternalValidityQuestions.map((question) => {
        return {
            ...question,
            QuestionInstruction: undefined,
            QuestionStem: undefined,
            QuestionType: undefined,
            Category: undefined,
        }
    }),
}

export const ReportingQuestionDefault: TypeOfValidityObject = {
    Status: 'NotStarted',
    Questions: ReportingQuestions.map((question) => {
        return {
            ...question,
            QuestionInstruction: undefined,
            QuestionStem: undefined,
            QuestionType: undefined,
            Category: undefined,
        }
    }),
}

export const OutcomesQuestionDefault: TypeOfValidityObject = {
    Status: 'NotStarted',
    Questions: OutcomesQuestions.map((question) => {
        return {
            ...question,
            QuestionInstruction: undefined,
            QuestionStem: undefined,
            QuestionType: undefined,
            Category: undefined,
        }
    }),
}
