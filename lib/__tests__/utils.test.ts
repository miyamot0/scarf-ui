// utils.test.ts
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { cn } from '../utils'

jest.mock('clsx')
jest.mock('tailwind-merge')

describe('cn', () => {
    it('should call clsx and twMerge with the correct arguments', () => {
        const mockClsx = clsx as jest.MockedFunction<typeof clsx>
        const mockTwMerge = twMerge as jest.MockedFunction<typeof twMerge>

        mockClsx.mockReturnValue('clsx-result')
        mockTwMerge.mockReturnValue('twMerge-result')

        const result = cn('class1', 'class2')

        expect(mockClsx).toHaveBeenCalledWith(['class1', 'class2'])
        expect(mockTwMerge).toHaveBeenCalledWith('clsx-result')
        expect(result).toBe('twMerge-result')
    })
})
