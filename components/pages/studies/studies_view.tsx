import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { FilePlus2Icon } from 'lucide-react'
import { useReducerAtom } from 'jotai/utils'
import { dbAtom } from '@/atoms/db_atom'
import { study_columns } from '@/components/tables/study_status_columns'
import { StudyStatusDataTable } from '@/components/tables/study_status_table'
import { database_reducer } from '@/atoms/reducers/reducer'

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
