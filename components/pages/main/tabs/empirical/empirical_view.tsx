import { dbAtom } from '@/atoms/db_atom'
import { StudyEmpiricalDataTable } from '@/components/tables/empirical/study_empirical_table'
import { study_columns } from '@/components/tables/empirical/study_empirical_columns'
import { HeadingComponent } from '../instructions/views/heading_component'
import { useMemo } from 'react'
import { useAtomValue } from 'jotai'

export function EmpiricalTabView() {
    const state = useAtomValue(dbAtom)

    const memoizedData = useMemo(() => state.Studies, [state.Studies])

    return (
        <div className="flex flex-col gap-y-4">
            <HeadingComponent Text="Data Inspection and Review" />
            <p>
                The data inspection tab here provides a high-level interface for
                viewing the specific data available for specific records. There
                is no ability to modify the data from this view; however, this
                view allows users to sort and query from the entire dataset as
                well as provide spot-checks for correctly save/entered study
                data.
            </p>

            <hr />

            <StudyEmpiricalDataTable
                data={state.Studies}
                columns={study_columns}
            />
        </div>
    )
}
