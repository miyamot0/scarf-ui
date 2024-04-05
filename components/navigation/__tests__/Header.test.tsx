// Header.test.tsx
import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

describe('Header', () => {
    it('renders correctly', () => {
        render(<Header />)

        expect(screen.getByText(/Data Entry/i)).toBeInTheDocument()
        expect(screen.getByText(/Instructions/i)).toBeInTheDocument()
    })

    it('navigates to the correct page when a link is clicked', () => {
        const { getByText } = render(<Header />)
    })
})
