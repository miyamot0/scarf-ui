import { atom } from 'jotai'
import { GlobalStateType } from '@/questions/types/GlobalStateType'

export const DefaultStartingValue: GlobalStateType = {
    DialogState: {
        dialog_type: undefined,
        study: undefined,
    },
    DisplayState: 'studies',
    FigureRef1: undefined,
    FigureRef2: undefined,
    FigureRef3: undefined,
    Studies: [],
}

export const dbAtom = atom<GlobalStateType>(DefaultStartingValue)
