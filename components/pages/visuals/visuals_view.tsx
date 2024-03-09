import { dbAtom, database_reducer } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'

export function VisualsView() {
    const [state] = useReducerAtom(dbAtom, database_reducer)

    const { Studies } = state

    const recordsToVisualize = Studies.map((study) => {
        const score_internal_validity = study.InternalValidity.Questions.reduce(
            (acc, question) => {
                const derived_score = question.Response?.includes('Yes') ? 1 : 0

                return acc + derived_score
            },
            0
        )

        const score_external_validity = study.ExternalValidity.Questions.reduce(
            (acc, question) => {
                const derived_score = question.Response?.includes('Yes') ? 1 : 0

                return acc + derived_score
            },
            0
        )

        const score_reporting = study.Reporting.Questions.reduce(
            (acc, question) => {
                const derived_score = question.Response?.includes('Yes') ? 1 : 0

                return acc + derived_score
            },
            0
        )

        const score_outcomes = study.Outcomes.Questions.find(
            (q) => q.QuestionID === 'Outcomes_4'
        )

        if (!score_outcomes) throw new Error('Outcomes_4 not found')

        let score_outcomes_value = 0

        switch (score_outcomes.Response) {
            case 'Strong':
                score_outcomes_value = 4
                break
            case 'Weak':
                score_outcomes_value = 3
                break
            case 'Inconsistent':
                score_outcomes_value = 2
                break
            case 'Null':
                score_outcomes_value = 1
                break
            default:
                score_outcomes_value = 0
        }

        return {
            ID: study.StudyID,
            IV: score_internal_validity,
            EV: score_external_validity,
            Reporting: score_reporting,
            Outcome: score_outcomes_value,
        }
    })

    console.log(recordsToVisualize)

    return <div>...</div>
}

/*
Participant demographics			
Participant characteristics			
Inclusion criteria			
Recruitment			
DV definitions			
Measurement system			
Data collectors			
Condition descriptions			
Dosage			
Setting			
Implementer demographics			
Implementer qualifications			
Fidelity descriptions			

*/
