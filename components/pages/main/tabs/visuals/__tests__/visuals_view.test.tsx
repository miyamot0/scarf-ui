// instructions_view.test.tsx

import { render, screen } from '@testing-library/react'
import { Provider } from 'jotai'
import { TooltipProvider } from '@/components/ui/tooltip'
import { DefaultStartingValue } from '@/atoms/db_atom'
import { VisualsView } from '../visuals_view'

jest.doMock('jotai', () => ({
    useAtom: jest.fn().mockReturnValue([DefaultStartingValue]),
}))

describe('VisualsView', () => {
    beforeEach(() => {
        render(
            <TooltipProvider>
                <Provider>
                    <VisualsView />
                </Provider>
            </TooltipProvider>
        )
    })

    it('renders VisualsView component', () => {
        const heading = screen.getByText('Marker Type:')
        expect(heading).toBeInTheDocument()
    })
})
