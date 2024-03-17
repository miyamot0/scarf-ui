// instructions_view.test.tsx

import { render, screen } from '@testing-library/react'
import { Provider } from 'jotai'
import { TooltipProvider } from '@/components/ui/tooltip'
import { DefaultStartingValue } from '@/atoms/db_atom'
import { StudiesView } from '../studies_view'

jest.doMock('jotai', () => ({
    useAtom: jest.fn().mockReturnValue([DefaultStartingValue]),
}))

describe('StudiesView', () => {
    beforeEach(() => {
        render(
            <TooltipProvider>
                <Provider>
                    <StudiesView />
                </Provider>
            </TooltipProvider>
        )
    })

    it('renders StudiesView component', () => {
        const heading = screen.getByText('Study Coding')
        expect(heading).toBeInTheDocument()
    })

    it('renders the correct heading', () => {
        const heading = screen.getByRole('heading', {
            name: /Study Coding/i,
        })
        expect(heading).toBeInTheDocument()
    })
})
