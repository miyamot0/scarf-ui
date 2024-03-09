import { StudyObject } from '@/types/QuestionTypes'
import { Badge } from '@/components/ui/badge'

export function StatusCell({ Study }: { Study: StudyObject }) {
    const values = [
        Study.Reporting.Status,
        Study.InternalValidity.Status,
        Study.ExternalValidity.Status,
        Study.Outcomes.Status,
    ]

    if (
        values.every((v) => v === 'Completed') &&
        Study.PublicationType !== 'Unclassified'
    ) {
        return <Badge className="bg-green-500">Completed</Badge>
    }

    if (values.includes('Completed')) {
        return <Badge className="bg-orange-500">In Progress</Badge>
    }

    return <Badge className="bg-red-500">Not Started</Badge>
}
