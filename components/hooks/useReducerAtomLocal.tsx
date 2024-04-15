import { PrimitiveAtom } from 'jotai'
import { useAtom } from 'jotai/react'
import { useCallback } from 'react'

export function useReducerAtomLocal<Value, Action>(
    anAtom: PrimitiveAtom<Value>,
    reducer: (v: Value, a: Action) => Value
): [Value, (action: Action) => void] {
    const [state, setState] = useAtom(anAtom)
    const dispatch = useCallback(
        (action: Action) => setState((prev) => reducer(prev, action)),
        [setState, reducer]
    )
    return [state, dispatch]
}
