import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { useToast } from '@/components/ui/use-toast'
import { PenIcon } from 'lucide-react'

export function StudiesView() {
    const { toast } = useToast()

    return (
        <div className="flex flex-col gap-y-4">
            <p className="text-red">
                Note: Color code whether or not features are completed.
            </p>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Study ID</TableHead>
                        <TableHead>Study Authors</TableHead>
                        <TableHead>Study Title</TableHead>
                        <TableHead>Study Journal</TableHead>
                        <TableHead>Study Year</TableHead>
                        <TableHead>Internal Validity</TableHead>
                        <TableHead>External Validity</TableHead>
                        <TableHead>Reporting</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>...</TableCell>
                        <TableCell>...</TableCell>
                        <TableCell>...</TableCell>
                        <TableCell>...</TableCell>
                        <TableCell>...</TableCell>
                        <TableCell>
                            <Button
                                size={'sm'}
                                className="w-full"
                                onClick={() => {
                                    toast({
                                        title: 'TODO: Edit Study Internal Validity',
                                        description: 'TODO',
                                        duration: 2000,
                                    })
                                }}
                            >
                                Temp
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button
                                size={'sm'}
                                className="w-full"
                                onClick={() => {
                                    toast({
                                        title: 'TODO: Edit Study External Validity',
                                        description: 'TODO',
                                        duration: 2000,
                                    })
                                }}
                            >
                                Temp
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button
                                size={'sm'}
                                className="w-full"
                                onClick={() => {
                                    toast({
                                        title: 'TODO: Edit Study Reporting',
                                        description: 'TODO',
                                        duration: 2000,
                                    })
                                }}
                            >
                                Temp
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button
                                size={'sm'}
                                className="w-full"
                                onClick={() => {
                                    toast({
                                        title: 'TODO: Edit Study Details Dialog',
                                        description: 'TODO',
                                        duration: 2000,
                                    })
                                }}
                            >
                                <PenIcon size={16} color="white" />
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button
                size={'lg'}
                className="w-full"
                onClick={() => {
                    toast({
                        title: 'TODO: Append to studies',
                        description: 'TODO',
                        duration: 2000,
                    })
                }}
            >
                Add Study
            </Button>
        </div>
    )
}
