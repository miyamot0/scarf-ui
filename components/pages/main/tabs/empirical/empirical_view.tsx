import { dbAtom } from '@/atoms/db_atom'
import { database_reducer } from '@/atoms/reducers/reducer'
import { StudyEmpiricalDataTable } from '@/components/tables/empirical/study_empirical_table'
import { useReducerAtom } from 'jotai/utils'
import { study_columns } from '@/components/tables/empirical/study_empirical_columns'

export function EmpiricalTabView() {
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)

    return (
        <StudyEmpiricalDataTable data={state.Studies} columns={study_columns} />
    )
}
