import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { FilePlus2Icon } from 'lucide-react'
import { useReducerAtom } from 'jotai/utils'
import { dbAtom, database_reducer } from '@/atoms/db_atom'
import { ResponseStatus } from '@/types/QuestionTypes'
import { cn } from '@/lib/utils'
import { color_code } from '@/lib/color_coding'
import { study_columns } from '@/components/tables/study_status_columns'
import { StudyStatusDataTable } from '@/components/tables/study_status_table'

const StatusCoding = ({ status }: { status?: ResponseStatus }) => {
    return (
        <div
            className={cn(
                'w-2 h-2 mr-2 rounded-full',
                color_code(status ?? '')
            )}
        ></div>
    )
}

export function StudiesView() {
    const { toast } = useToast()
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)

    return (
        <div className="flex flex-col gap-y-4">
            <StudyStatusDataTable
                data={state.Studies}
                columns={study_columns}
            />

            <Button
                size={'lg'}
                className="w-full"
                onClick={() => {
                    dispatch({ type: 'add' })

                    toast({
                        title: 'Study Added to Dataset.',
                        duration: 2000,
                    })
                }}
            >
                <FilePlus2Icon size={20} className="mr-2" />
                Add Study
            </Button>
        </div>
    )
}
