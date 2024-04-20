import { DefaultStartingValue } from '@/atoms/db_atom'
import { PlanningQuestions } from '@/questions/simplified_questions'
import { GlobalStateType } from '@/questions/types/GlobalStateType'
import { parse } from 'path'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

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

            if (!parsedValue) {
                toast.warning(
                    'Error: Attempts to read data from local storage failed. Please reload review state or clear your local cache.',
                    {
                        duration: 2000,
                    }
                )
            } else {
                setData({
                    data: {
                        ...parsedValue,
                        DisplayState: 'instructions',
                        AutoSave: parsedValue.AutoSave ?? false,
                        ReviewPlans: parsedValue.ReviewPlans ?? {
                            Status: 'NotStarted',
                            Questions: PlanningQuestions,
                        },
                    },
                    error: null,
                    isLoading: false,
                })
            }
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
