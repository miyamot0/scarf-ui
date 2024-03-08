'use client'

import { z } from 'zod'

export const StudyDetailsSchema = z.object({
    code: z.string().min(1),
    authors: z.string().min(1),
    title: z.string().min(1),
    journal: z.string().min(1),
    year: z.number().int().min(1),
})
