import { dbAtom } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import React from 'react'
import { VisualFunctionalRelations } from './charts/visual_fx_relation'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
    CalculateOutcomeScore,
    GenerateGeneralizationRating,
    GenerateMaintenanceWindow,
    GenerateStrengthRating,
} from './helpers/scarf_scoring'
import { database_reducer } from '@/atoms/reducers/reducer'

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
        const score_internal_validity = CalculateOutcomeScore(
            'Internal Validity',
            study
        )

        const score_external_validity = CalculateOutcomeScore(
            'External Validity',
            study
        )

        const score_reporting = CalculateOutcomeScore('Reporting', study)

        const score_outcomes_value = GenerateStrengthRating(
            'Functional Relations',
            study
        )
        const score_maintained_value = GenerateStrengthRating(
            'Maintenance',
            study
        )
        const score_generalized_value = GenerateStrengthRating(
            'Generalization',
            study
        )

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
            MaintenanceWindow: applyConditionalJittering(
                jitter,
                GenerateMaintenanceWindow(study)
            ),
            Generalized: applyConditionalJittering(
                jitter,
                score_generalized_value
            ),
            GeneralizationRigor: applyConditionalJittering(
                jitter,
                GenerateGeneralizationRating(study)
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
            x: record.MaintenanceWindow,
            y: record.Maintained,
            id: record.ID,
            label: record.Tag,
            z: 20,
        }))

    const generalized_data_published = recordsToVisualize
        .filter((s) => s.Type === 'Journal')
        .map((record) => ({
            x: record.GeneralizationRigor,
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
            x: record.MaintenanceWindow,
            y: record.Outcome,
            id: record.ID,
            label: record.Tag,
            z: 20,
        }))

    const generalized_data_unpublished = recordsToVisualize
        .filter((s) => s.Type === 'Unpublished')
        .map((record) => ({
            x: record.GeneralizationRigor,
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
