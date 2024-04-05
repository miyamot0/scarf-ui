'use server'

import { THEME_KEY } from '@/types/ThemeTypes'
import { cookies } from 'next/headers'

export async function toggleTheme() {
    let theme = cookies().get(THEME_KEY)?.value ?? 'light'

    if (theme === 'light') {
        theme = 'dark'
    } else {
        theme = 'light'
    }

    cookies().set(THEME_KEY, theme)
}
