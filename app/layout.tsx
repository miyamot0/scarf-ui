import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/themes/theme_provider'
import MaxWidthWrapper from '@/components/ui/max_width_wrapper'
import { Footer } from '@/components/navigation/Footer'
import { Header } from '@/components/navigation/Header'

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
        <html lang="en" className="my-4 light:grainy">
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
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <MaxWidthWrapper className="flex flex-col gap-y-6">
                        <Header />
                        {children}
                        <Footer />
                        <Toaster />
                    </MaxWidthWrapper>
                </ThemeProvider>
            </body>
        </html>
    )
}
