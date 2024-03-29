import { dbAtom } from '@/atoms/db_atom'
import React from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
    CalculateOutcomeScore,
    GenerateGeneralizationRating,
    GenerateMaintenanceWindow,
    GenerateStrengthRating,
} from './helpers/scarf_scoring'
import { PublicationType } from '@/questions/types/QuestionTypes'
import { VisualFunctionalRelationGivenIV } from './figures/fx_rel_given_iv_strength'
import { MaintenanceGivenWindow } from './figures/maintenance_given_window'
import { GeneralizationGivenWindow } from './figures/generalization_given_window'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { SymbolType } from 'recharts/types/util/types'
import { useAtomValue } from 'jotai'

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function applyConditionalJittering(jitter: boolean, value: number) {
    return jitter ? value + randomIntFromInterval(-10, 10) / 100 : value
}

export type CommonVisualOutput = {
    Tag: string
    ID: string
    IV: number
    EV: number
    Reporting: number
    Outcome: number
    Maintained: number
    MaintenanceWindow: number
    Generalized: number
    GeneralizationRigor: number
    Type: PublicationType
}

const MarkerSizes = [
    {
        value: 100,
        label: 'Small',
    },
    {
        value: 200,
        label: 'Medium',
    },
    {
        value: 400,
        label: 'Large',
    },
    {
        value: 800,
        label: 'Extra Large',
    },
]

const FigureHeights = [
    {
        value: 300,
        label: 'Compact',
    },
    {
        value: 400,
        label: 'Normal',
    },
    {
        value: 500,
        label: 'Tall',
    },
    {
        value: 600,
        label: 'Extra Tall',
    },
]

export type MarkerSizingType = (typeof MarkerSizes)[0]
export type FigureSizingType = (typeof FigureHeights)[0]

export function VisualsView() {
    const state = useAtomValue(dbAtom)
    const [jitter, setJitter] = React.useState(true)
    const [shape, setShape] = React.useState<SymbolType>('circle')
    const [size, setSize] = React.useState<number>(MarkerSizes[0].value)
    const [height, setHeight] = React.useState<number>(FigureHeights[0].value)

    const memoizedData = React.useMemo(() => state.Studies, [state.Studies])

    const recordsToVisualize = memoizedData.map((study) => {
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

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-col md:flex-row items-center md:space-x-2 space-y-2 md:space-y-0 my-auto">
                    <Label className="md:ml-4">Marker Type: </Label>
                    <Select
                        value={shape}
                        onValueChange={(value) => setShape(value as SymbolType)}
                    >
                        <SelectTrigger className="w-[125px]">
                            <SelectValue placeholder="Select marker type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Shapes</SelectLabel>
                                <SelectItem value="circle">Circle</SelectItem>
                                <SelectItem value="triangle">
                                    Triangle
                                </SelectItem>
                                <SelectItem value="cross">Cross</SelectItem>
                                <SelectItem value="diamond">Diamond</SelectItem>
                                <SelectItem value="star">Star</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Label className="md:ml-4">Marker Size: </Label>
                    <Select
                        value={size.toString()}
                        onValueChange={(value) => setSize(parseInt(value))}
                    >
                        <SelectTrigger className="w-[125px]">
                            <SelectValue placeholder="Select marker size" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Sizes</SelectLabel>
                                {MarkerSizes.map((size) => {
                                    return (
                                        <SelectItem
                                            key={size.value.toString()}
                                            value={size.value.toString()}
                                        >
                                            {size.label}
                                        </SelectItem>
                                    )
                                })}
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Label className="md:ml-4">Figure Height: </Label>
                    <Select
                        value={height.toString()}
                        onValueChange={(value) => setHeight(parseInt(value))}
                    >
                        <SelectTrigger className="w-[125px]">
                            <SelectValue placeholder="Select height size" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Heights</SelectLabel>
                                {FigureHeights.map((size) => {
                                    return (
                                        <SelectItem
                                            key={size.value.toString()}
                                            value={size.value.toString()}
                                        >
                                            {size.label}
                                        </SelectItem>
                                    )
                                })}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex md:items-center space-x-2">
                    <Label htmlFor="jitter-mode">Jitter Data</Label>
                    <Switch
                        id="jitter-mode"
                        checked={jitter}
                        onCheckedChange={() => setJitter(!jitter)}
                    />
                </div>
            </div>

            <VisualFunctionalRelationGivenIV
                Data={recordsToVisualize}
                shape={shape}
                size={size}
                height={height}
            />

            <MaintenanceGivenWindow
                Data={recordsToVisualize}
                shape={shape}
                size={size}
                height={height}
            />

            <GeneralizationGivenWindow
                Data={recordsToVisualize}
                shape={shape}
                size={size}
                height={height}
            />
        </div>
    )
}
