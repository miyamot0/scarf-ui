// main_page.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'jotai'
import { MainPage } from '../main_page'
import { TooltipProvider } from '@/components/ui/tooltip'
import '@testing-library/jest-dom/extend-expect'

describe('MainPage', () => {
    beforeEach(() => {
        render(
            <TooltipProvider>
                <Provider>
                    <MainPage />
                </Provider>
            </TooltipProvider>
        )
    })

    it('renders MainPage component', () => {
        const element = screen.getByText(/SCARF-UI/i)
        expect(element).toBeInTheDocument()
    })
})
