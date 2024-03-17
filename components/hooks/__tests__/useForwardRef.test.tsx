// useForwardRef.test.tsx
import { renderHook, act } from '@testing-library/react-hooks'
import { useForwardRef } from '../useForwardRef'

describe('useForwardRef', () => {
    it('forwards the ref correctly', () => {
        const ref = { current: null }
        const { result } = renderHook(() => useForwardRef(ref, 'initialValue'))

        expect(ref.current).toBe('initialValue')
        expect(result.current.current).toBe('initialValue')
    })

    it('Ref should not pick up if undefined', () => {
        const ref = { current: null }
        const {} = renderHook(() =>
            useForwardRef(
                undefined as unknown as { current: null },
                'initialValue'
            )
        )

        expect(ref.current).toBe(null)
    })

    it('Ref should handle functions if needed', () => {
        const ref = () => {}
        const { result } = renderHook(() => useForwardRef(ref, 'initialValue'))

        expect(result.current.current).toBe('initialValue')
    })
})
