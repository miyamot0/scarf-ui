import { Footer } from '@/components/navigation/Footer'
import { Header } from '@/components/navigation/Header'
import { MainPage } from '@/components/pages/main_page'
import MaxWidthWrapper from '@/components/ui/max_width_wrapper'

export default function Home() {
    return (
        <MaxWidthWrapper className="flex flex-col gap-y-6">
            <Header />
            <div className="flex flex-col gap-y-4">
                <h1 className="text-4xl font-semibold text-center">SCARF-UI</h1>
                <p className="text-center">
                    Web-based resource for appraising SCED research.
                </p>
            </div>
            <MainPage />
            <Footer />
        </MaxWidthWrapper>
    )
}
