// color_coding.test.ts
import { color_code, text_color_code } from '../color_coding'

describe('color_coding', () => {
    test('color_code returns correct color for each status', () => {
        expect(color_code('NotStarted')).toEqual('bg-red-500')
        expect(color_code('InProgress')).toEqual('bg-yellow-500')
        expect(color_code('Completed')).toEqual('bg-green-500')
        expect(color_code('Unknown')).toEqual('bg-gray-500')
    })

    test('text_color_code returns correct color for each status', () => {
        expect(text_color_code('NotStarted')).toEqual('text-red-500')
        expect(text_color_code('InProgress')).toEqual('text-yellow-500')
        expect(text_color_code('Completed')).toEqual('text-green-500')
        expect(text_color_code('Unknown')).toEqual('text-gray-500')
    })
})
