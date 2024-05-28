import { MainPageShim } from '@/components/pages/main/main_page_archived'
import { getAllArchivedFiles, getFileByID } from '@/lib/api'
import { GlobalStateType } from '@/questions/types/GlobalStateType'

export default async function Page({
    params: { id },
}: {
    params: { id: string }
}) {
    const saved_data = await getFileByID(id)

    if (!saved_data) {
        return <div>No records found.</div>
    }

    return <MainPageShim data={saved_data as GlobalStateType} />
}

export async function generateStaticParams() {
    const archived_files = await getAllArchivedFiles()

    return archived_files.map((saved_file) => ({
        id: saved_file.ID,
    }))
}
