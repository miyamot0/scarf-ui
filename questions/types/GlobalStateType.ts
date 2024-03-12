import { RefObject } from 'react'
import { DialogStateType, DisplayStateType } from './DisplayStateTypes'
import { StudyObject } from './QuestionTypes'
import { ReviewTypes } from '../../types/ReviewTypes'

export type GlobalStateType = {
    DialogState: DialogStateType
    DisplayState: DisplayStateType
    Studies: StudyObject[]
    FigureRef1?: RefObject<SVGSVGElement>
    FigureRef2?: RefObject<SVGSVGElement>
    FigureRef3?: RefObject<SVGSVGElement>
    ReviewName?: string
    ReviewType?: ReviewTypes
}
