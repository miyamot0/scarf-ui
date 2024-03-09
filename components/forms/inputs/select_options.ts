import { QuestionType } from '@/types/QuestionTypes'

export const OptionsYesNo = ['Yes', 'No'] as const

export const OptionsYesNoNA = ['', 'Yes', 'No', 'N/A'] as const

export const PrimarySecondaryUnknown = [
    '',
    'Primary',
    'Secondary',
    'Unknown',
] as const

export const StrongWeakCounterTherapeutic = [
    '',
    'Strong',
    'Weak',
    'Inconsistent',
    'Null',
    'Countertherapeutic',
] as const

export const StrongWeakCounterTherapeuticNA = [
    '',
    'Strong',
    'Weak',
    'Inconsistent',
    'Null',
    'Countertherapeutic',
    'N/A',
] as const

export function GetSelectOptionsFromTag(type: QuestionType) {
    switch (type) {
        case 'YesNo':
            return OptionsYesNo
        //case 'YesNoNotApplicable':
        //    return OptionsYesNoNA
        //case 'PrimarySecondaryUnknown':
        //    return PrimarySecondaryUnknown
        //case 'CbPcbG':
        //    return StrongWeakCounterTherapeutic
        //case 'CbPcbGNA':
        //    return StrongWeakCounterTherapeuticNA
        default:
            throw new Error('Invalid Question Type')
    }
}
