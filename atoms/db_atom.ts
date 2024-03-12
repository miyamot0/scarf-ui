import { atom } from 'jotai'
import { GlobalStateType } from '@/questions/types/GlobalStateType'

export const dbAtom = atom<GlobalStateType>({
    DialogState: {
        dialog_type: undefined,
        study: undefined,
    },
    DisplayState: 'studies',
    FigureRef1: undefined,
    FigureRef2: undefined,
    FigureRef3: undefined,
    Studies: [],
})
