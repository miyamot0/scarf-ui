import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { getAllArchivedFiles } from '@/lib/api'
import Link from 'next/link'

export const dynamic = 'force-static'

export default async function Page() {
    const archived_files = (await getAllArchivedFiles()).sort((a, b) => {
        return Date.parse(a.DateSaved).valueOf < Date.parse(b.DateSaved).valueOf
            ? 1
            : -1
    })

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Archived SCARF-UI Records</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Author</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead className="w-[100px]">
                                    Date
                                </TableHead>
                                <TableHead className="text-right"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {archived_files?.map((data_record) => (
                                <TableRow key={data_record.ID}>
                                    <TableCell>{data_record.Author}</TableCell>
                                    <TableCell>{data_record.Title}</TableCell>
                                    <TableCell>
                                        {data_record.DateSaved}
                                    </TableCell>
                                    <TableCell>
                                        <Link
                                            href={`/archive/${data_record.ID}`}
                                        >
                                            View
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}
