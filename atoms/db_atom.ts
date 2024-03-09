import { atom } from 'jotai'
import { GlobalStateType } from '@/types/GlobalStateType'

export const dbAtom = atom<GlobalStateType>({
    DialogState: {
        dialog_type: undefined,
        study: undefined,
    },
    DisplayState: 'studies',
    Studies: [],
})
