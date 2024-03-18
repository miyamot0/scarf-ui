import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'
import MaxWidthWrapper from '@/components/ui/max_width_wrapper'
import { Footer } from '@/components/navigation/Footer'
import { Header } from '@/components/navigation/Header'
import { TooltipProvider } from '@/components/ui/tooltip'
import './globals.css'
import { getTheme } from '@/components/themes/theming'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Web-based Form of the SCARF Tool',
    description: 'Created by Shawn Gilroy',
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const theme = await getTheme()

    return (
        <html lang="en" className={cn(theme, 'my-4 light:grainy')}>
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={cn(inter.className, 'antialiased')}>
                <TooltipProvider>
                    <MaxWidthWrapper className="flex flex-col gap-y-6">
                        <Header theme={theme} />
                        {children}
                        <Footer />
                        <Toaster />
                    </MaxWidthWrapper>
                </TooltipProvider>
            </body>
        </html>
    )
}
