import { DisplayStateType } from './DisplayStateTypes'
import { StudyObject } from './QuestionTypes'
import { ReviewTypes } from '../../types/ReviewTypes'
import { DialogStateType } from './DialogStateTypes'
import { Descendant } from 'slate'

export type GlobalStateType = {
    DialogState: DialogStateType
    DisplayState: DisplayStateType
    Studies: StudyObject[]
    ReviewName?: string
    ReviewType?: ReviewTypes
    Loaded?: boolean
    AutoSave?: boolean
    Notes?: Descendant[]
}
