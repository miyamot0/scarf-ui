import { DefaultStartingValue } from '@/atoms/db_atom'
import { GlobalStateType } from '@/questions/types/GlobalStateType'
import { useEffect, useState } from 'react'

const KEY_LOCAL_STORAGE = 'scarf-web-ui'

type UseExistingDataReturnType = {
    data: GlobalStateType
    error: any
    isLoading: boolean
}

export function useExistingData() {
    const [data, setData] = useState<UseExistingDataReturnType>({
        data: DefaultStartingValue,
        error: undefined,
        isLoading: true,
    })

    useEffect(() => {
        const value = localStorage.getItem(KEY_LOCAL_STORAGE)

        if (value) {
            const parsedValue = JSON.parse(value) as GlobalStateType

            setData({
                data: {
                    ...parsedValue,
                    DisplayState: 'instructions',
                    AutoSave: parsedValue.AutoSave ?? false,
                },
                error: null,
                isLoading: false,
            })
        } else
            setData({
                ...data,
                error: 'No data found',
                isLoading: false,
            })
    }, [])

    return {
        ...data,
    }
}
