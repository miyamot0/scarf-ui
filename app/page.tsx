import { MainPage } from '@/components/pages/main_page'
import MaxWidthWrapper from '@/components/ui/max_width_wrapper'

export default function Home() {
    return (
        <MaxWidthWrapper className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-bold text-center my-4">
                Single Case Analysis and Review Framework
            </h1>
            <MainPage />
            <span className="text-center">Designed by Shawn Gilroy</span>
        </MaxWidthWrapper>
    )
}
