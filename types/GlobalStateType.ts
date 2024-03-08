import { DisplayState } from './DisplayStateTypes'
import { StudyObject } from './QuestionTypes'

export type GlobalStateType = {
    DisplayState: DisplayState
    Studies: StudyObject[]
}
