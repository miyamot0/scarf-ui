'use server'

import { THEME_KEY } from '@/types/ThemeTypes'
import { cookies } from 'next/headers'

export type ThemeTypes = 'light' | 'dark'

export async function getTheme() {
    const value = cookies().get(THEME_KEY)?.value ?? 'light'

    if (value === 'light') {
        return 'light'
    } else return 'dark'
}
