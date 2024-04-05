'use client'

import { ThemeTypes } from '../theming'

export function getThemeClientSide(): ThemeTypes {
    if (typeof window === 'undefined') return 'light'

    return window.parent.document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light'
}
