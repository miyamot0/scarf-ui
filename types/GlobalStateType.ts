import { DialogState, DisplayState } from './DisplayStateTypes'
import { StudyObject } from './QuestionTypes'

export type GlobalStateType = {
    DisplayState: DisplayState
    DialogState: DialogState
    Studies: StudyObject[]
}
