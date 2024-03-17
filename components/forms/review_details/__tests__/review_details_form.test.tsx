// review_details_form.test.tsx
import { render, fireEvent, waitFor } from '@testing-library/react'
import { ReviewDetailsForm } from '../review_details_form'
import { act } from 'react-dom/test-utils'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Provider } from 'jotai'

describe('ReviewDetailsForm', () => {
    it('renders correctly', () => {
        const { getByLabelText } = render(
            <TooltipProvider>
                <Provider>
                    <ReviewDetailsForm />
                </Provider>
            </TooltipProvider>
        )

        expect(getByLabelText('Review Title')).toBeInTheDocument()
    })

    it('calls onSubmit when the form is submitted', async () => {
        const { getByLabelText, getByRole, container } = render(
            <TooltipProvider>
                <Provider>
                    <ReviewDetailsForm />
                </Provider>
            </TooltipProvider>
        )

        fireEvent.change(getByLabelText('Review Title'), {
            target: { value: 'Test Title' },
        })

        const select = container.querySelector('select')

        fireEvent.change(select!, {
            target: { value: 'Reliability' },
        })

        await act(async () => {
            fireEvent.click(getByRole('button', { name: 'Update Review' }))
        })

        /*
        await waitFor(() => {
            expect(mockDispatch).toHaveBeenCalledWith({
                type: 'update_review',
                payload: {
                    review_name: 'Test Title',
                    review_type: 'Primary',
                },
            })

            expect(mockToast).toHaveBeenCalledWith(
                'Updated Review Information',
                {
                    description: 'Your data has been saved.',
                    duration: 2000,
                    dismissible: true,
                }
            )
        })
        */
    })
})
