//const matchers = require('jest-extended')
//expect.extend(matchers)

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
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

window.URL.createObjectURL = function () {}
window.URL.revokeObjectURL = function () {}
