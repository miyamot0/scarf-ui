//const matchers = require('jest-extended')
//expect.extend(matchers)

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { DefaultStartingValue } from '@/atoms/db_atom'
import { TextEncoder, TextDecoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
    }))

/**
jest.mock('jotai/utils', () => ({
    useReducerAtom: jest
        .fn()
        .mockReturnValue([DefaultStartingValue, jest.fn()]),
}))
 */
