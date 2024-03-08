import { QuestionObject } from '@/types/QuestionTypes'
import * as scarf_qs from './questions.json'

export const ScarfQuestionContent: QuestionObject[] =
    scarf_qs as QuestionObject[]

export const ScarfQuestionsIVDependentMeasures = ScarfQuestionContent.filter(
    (item) => item.Category === 'DV Measurement'
)
