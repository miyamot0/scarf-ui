import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Web-based Form of the SCARF Tool',
    description: 'Created by Shawn Gilroy',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="my-4 grainy">
            <body className={cn(inter.className, 'antialiased')}>
                {children}
                <Toaster />
            </body>
        </html>
    )
}
