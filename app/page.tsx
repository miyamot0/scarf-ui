import { Footer } from '@/components/navigation/Footer'
import { Header } from '@/components/navigation/Header'
import { MainPage } from '@/components/pages/main_page'
import MaxWidthWrapper from '@/components/ui/max_width_wrapper'

export default function Home() {
    return (
        <MaxWidthWrapper className="flex flex-col gap-y-6">
            <Header />
            <h1 className="text-3xl font-bold text-center my-4">
                Single Case Analysis and Review Framework
            </h1>
            <MainPage />
            <Footer />
        </MaxWidthWrapper>
    )
}
