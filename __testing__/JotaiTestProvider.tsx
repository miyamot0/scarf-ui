import { Provider } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'

const HydrateAtoms = ({ initialValues, children }: any) => {
    useHydrateAtoms(initialValues)
    return children
}

export const JotaiTestProvider = ({ initialValues, children }: any) => (
    <Provider>
        <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
    </Provider>
)
