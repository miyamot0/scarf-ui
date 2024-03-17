// tutorial_page.test.tsx

import { render } from '@testing-library/react'
import { Provider } from 'jotai'
import { TooltipProvider } from '@/components/ui/tooltip'
import { TutorialPage } from '../tutorial_page'

describe('MainPage', () => {
    it('renders MainPage component', () => {
        render(
            <TooltipProvider>
                <Provider>
                    <TutorialPage />
                </Provider>
            </TooltipProvider>
        )
    })
})
