// reliability_page.test.tsx

import { render } from '@testing-library/react'
import { Provider } from 'jotai'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ReliabilityPage } from '../reliability_page'
import { DefaultStartingValue } from '@/atoms/db_atom'

jest.mock('jotai/utils', () => ({
    useReducerAtom: jest
        .fn()
        .mockReturnValue([DefaultStartingValue, jest.fn()]),
}))

describe('MainPage', () => {
    it('renders MainPage component', () => {
        render(
            <TooltipProvider>
                <Provider>
                    <ReliabilityPage />
                </Provider>
            </TooltipProvider>
        )
    })
})
