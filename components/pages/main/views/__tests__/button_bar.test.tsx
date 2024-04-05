// button_bar.test.tsx
import { render, fireEvent } from '@testing-library/react'
import { ButtonBar } from '../button_bar'
import {
    DefaultStartingValue,
    DefaultStartingValueExpanded,
    dbAtom,
} from '@/atoms/db_atom'
import { TooltipProvider } from '@/components/ui/tooltip'
import { JotaiTestProvider } from '@/__testing__/JotaiTestProvider'
import { GlobalStateType } from '@/questions/types/GlobalStateType'

describe('ButtonBar', () => {
    it('renders correctly', () => {
        const mockDispatch = jest.fn()
        const mockRef = {
            current: { click: jest.fn() },
        } as unknown as React.RefObject<HTMLInputElement>
        const mockState = DefaultStartingValue

        const mockProps = {
            state: mockState,
            dispatch: mockDispatch,
            refFileInput: mockRef,
        }

        const {} = render(
            <TooltipProvider>
                <JotaiTestProvider
                    initialValues={[[dbAtom, DefaultStartingValueExpanded]]}
                >
                    <ButtonBar {...mockProps} />
                </JotaiTestProvider>
            </TooltipProvider>
        )

        // Add similar lines for the other buttons
    })

    it('handles button clicks', () => {
        const mockDispatch = jest.fn()
        const mockRef = {
            current: { click: jest.fn() },
        } as unknown as React.RefObject<HTMLInputElement>
        const mockState =
            DefaultStartingValueExpanded as unknown as GlobalStateType

        const mockProps = {
            state: mockState,
            dispatch: mockDispatch,
            refFileInput: mockRef,
        }

        const { getByText, getAllByRole } = render(
            <TooltipProvider>
                <JotaiTestProvider
                    initialValues={[[dbAtom, DefaultStartingValueExpanded]]}
                >
                    <ButtonBar {...mockProps} />
                </JotaiTestProvider>
            </TooltipProvider>
        )

        const buttons = getAllByRole('button')
        fireEvent.click(buttons[0])
        fireEvent.click(buttons[1])
        fireEvent.click(buttons[2])
        fireEvent.click(buttons[3])
        fireEvent.click(buttons[4])
        fireEvent.click(buttons[5])

        // Add similar blocks for the other buttons
    })

    // Add more tests to cover the other functionalities in your component
})
