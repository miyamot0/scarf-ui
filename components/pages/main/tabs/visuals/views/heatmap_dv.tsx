import { ExternalValidityQuestions } from '@/questions/simplified_questions'
import { GlobalStateType } from '@/questions/types/GlobalStateType'
import {
    StudyCodedBlock,
    StudyItemTooltip,
    StudyTitle,
} from './views/heatmap_subviews'

export function HeatmapDV(state: GlobalStateType) {
    return (
        <div className="flex flex-col gap-y-4 overflow-x-auto">
            <table className="border-separate border-spacing-[1px]">
                <thead>
                    <th className="min-w-[200px]"></th>
                    {state.Studies.map((r) => (
                        <StudyTitle text={r.StudyAuthors} />
                    ))}
                </thead>

                <tbody>
                    {ExternalValidityQuestions.map((q) => {
                        return (
                            <tr>
                                <StudyItemTooltip Question={q} />

                                {state.Studies.map((r) => {
                                    const question =
                                        r.ExternalValidity.Questions.find(
                                            (q2) =>
                                                q2.QuestionID === q.QuestionID
                                        )?.Response

                                    return (
                                        <StudyCodedBlock Response={question} />
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
