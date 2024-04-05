// Footer.test.tsx
import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

describe('Footer', () => {
    it('renders correctly', () => {
        render(<Footer />)

        expect(
            screen.getByText(/Dr. Shawn P. Gilroy, Ph.D. NCSP BCBA-D/i)
        ).toBeInTheDocument()
        expect(
            screen.getByText(/Louisiana State University/i)
        ).toBeInTheDocument()
        expect(
            screen.getByText(/Dr. Jennifer Ledford, Ph.D. BCBA-D/i)
        ).toBeInTheDocument()
        expect(screen.getByText(/Vanderbilt University/i)).toBeInTheDocument()
    })
})
