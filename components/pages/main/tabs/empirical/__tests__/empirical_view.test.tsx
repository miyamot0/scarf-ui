// empirical_view.test.tsx

import { render, screen } from '@testing-library/react'
import { Provider } from 'jotai'
import { EmpiricalTabView } from '../empirical_view'
import { TooltipProvider } from '@/components/ui/tooltip'
import { DefaultStartingValue } from '@/atoms/db_atom'

jest.doMock('jotai', () => ({
    useAtom: jest.fn().mockReturnValue([DefaultStartingValue]),
}))

describe('EmpiricalTabView', () => {
    beforeEach(() => {
        render(
            <TooltipProvider>
                <Provider>
                    <EmpiricalTabView />
                </Provider>
            </TooltipProvider>
        )
    })

    it('renders EmpiricalTabView component', () => {
        const heading = screen.getByText('Data Inspection and Review')
        expect(heading).toBeInTheDocument()
    })

    it('renders the correct heading', () => {
        const heading = screen.getByRole('heading', {
            name: /Data Inspection and Review/i,
        })
        expect(heading).toBeInTheDocument()
    })
})
