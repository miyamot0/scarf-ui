import { dbAtom, database_reducer } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import React from 'react'
import { VisualFunctionalRelations } from './charts/visual_fx_relation'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function applyConditionalJittering(jitter: boolean, value: number) {
    return jitter ? value + randomIntFromInterval(-10, 10) / 100 : value
}

export function VisualsView() {
    const [state] = useReducerAtom(dbAtom, database_reducer)
    const [jitter, setJitter] = React.useState(false)

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

        const functional_rel_outcomes = study.Outcomes.Questions.find(
            (q) => q.QuestionID === 'Outcomes_4'
        )

        const maintained_outcomes = study.Outcomes.Questions.find(
            (q) => q.QuestionID === 'Outcomes_5'
        )

        const generalized_outcomes = study.Outcomes.Questions.find(
            (q) => q.QuestionID === 'Outcomes_6'
        )

        if (
            !functional_rel_outcomes ||
            !maintained_outcomes ||
            !generalized_outcomes
        )
            throw new Error('Missing outcomes data')

        let score_outcomes_value = 0
        let score_maintained_value = 0
        let score_generalized_value = 0

        switch (functional_rel_outcomes.Response) {
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

        switch (maintained_outcomes.Response) {
            case 'Strong':
                score_maintained_value = 4
                break
            case 'Weak':
                score_maintained_value = 3
                break
            case 'Inconsistent':
                score_maintained_value = 2
                break
            case 'Null':
                score_maintained_value = 1
                break
            default:
                score_maintained_value = 0
        }

        switch (generalized_outcomes.Response) {
            case 'Strong':
                score_generalized_value = 4
                break
            case 'Weak':
                score_generalized_value = 3
                break
            case 'Inconsistent':
                score_generalized_value = 2
                break
            case 'Null':
                score_generalized_value = 1
                break
            default:
                score_generalized_value = 0
        }

        return {
            Tag: study.StudyTag,
            ID: study.StudyID,
            IV: applyConditionalJittering(jitter, score_internal_validity),
            EV: applyConditionalJittering(jitter, score_external_validity),
            Reporting: applyConditionalJittering(jitter, score_reporting),
            Outcome: applyConditionalJittering(jitter, score_outcomes_value),
            Maintained: applyConditionalJittering(
                jitter,
                score_maintained_value
            ),
            Generalized: applyConditionalJittering(
                jitter,
                score_generalized_value
            ),
            Type: study.PublicationType,
        }
    })

    const fx_rel_data_published = recordsToVisualize
        .filter((s) => s.Type === 'Journal')
        .map((record) => ({
            x: record.IV,
            y: record.Outcome,
            id: record.ID,
            label: record.Tag,
            z: 20,
        }))

    const maintained_data_published = recordsToVisualize
        .filter((s) => s.Type === 'Journal')
        .map((record) => ({
            x: record.IV,
            y: record.Maintained,
            id: record.ID,
            label: record.Tag,
            z: 20,
        }))

    const generalized_data_published = recordsToVisualize
        .filter((s) => s.Type === 'Journal')
        .map((record) => ({
            x: record.IV,
            y: record.Generalized,
            id: record.ID,
            label: record.Tag,
            z: 20,
        }))

    const fx_rel_data_unpublished = recordsToVisualize
        .filter((s) => s.Type === 'Unpublished')
        .map((record) => ({
            x: record.IV,
            y: record.Outcome,
            id: record.ID,
            label: record.Tag,
            z: 20,
        }))

    const maintained_data_unpublished = recordsToVisualize
        .filter((s) => s.Type === 'Unpublished')
        .map((record) => ({
            x: record.IV,
            y: record.Outcome,
            id: record.ID,
            label: record.Tag,
            z: 20,
        }))

    const generalized_data_unpublished = recordsToVisualize
        .filter((s) => s.Type === 'Unpublished')
        .map((record) => ({
            x: record.IV,
            y: record.Outcome,
            id: record.ID,
            label: record.Tag,
            z: 20,
        }))

    return (
        <>
            <div className="flex flex-row justify-end">
                <div className="flex items-center space-x-2">
                    <Switch
                        id="jitter-mode"
                        checked={jitter}
                        onCheckedChange={() => setJitter(!jitter)}
                    />
                    <Label htmlFor="jitter-mode">Jitter Data</Label>
                </div>
            </div>
            <VisualFunctionalRelations
                data_published={fx_rel_data_published}
                data_unpublished={fx_rel_data_unpublished}
                y_axis_title="Functional Relation"
                jitter={jitter}
            />
            <VisualFunctionalRelations
                data_published={maintained_data_published}
                data_unpublished={maintained_data_unpublished}
                y_axis_title="Maintenance"
                jitter={jitter}
            />
            <VisualFunctionalRelations
                data_published={generalized_data_published}
                data_unpublished={generalized_data_unpublished}
                y_axis_title="Generalization"
                jitter={jitter}
            />
        </>
    )
}
