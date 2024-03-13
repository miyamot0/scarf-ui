'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Hero } from './views/hero'
import { Label } from '@/components/ui/label'
import { ReactNode, useRef, useState } from 'react'
import { GlobalStateType } from '@/questions/types/GlobalStateType'
import { toast } from 'sonner'
import { ReviewTypes } from '@/types/ReviewTypes'
import { Button } from '@/components/ui/button'
import {
    QuestionObjectHolder,
    StudyObject,
} from '@/questions/types/QuestionTypes'

type ReliabilityState = {
    primary?: GlobalStateType
    reliability?: GlobalStateType
}

const PanelStatus = ({
    state,
    type,
}: {
    state?: GlobalStateType
    type: ReviewTypes
}) => {
    const loaded = state?.ReviewType === type

    if (!loaded) {
        return <Label>{`Status: Not Loaded`}</Label>
    }

    return (
        <>
            <Label>{`Rater: ${state.ReviewName}`}</Label>
            <Label>{`Type: ${state.ReviewType}`}</Label>
            <Label>{`Study Count: ${state.Studies.length}`}</Label>
            <Label>{`Status: Loaded`}</Label>
        </>
    )
}

const CompareResponsesInAreas = (
    primary: QuestionObjectHolder[],
    reli: QuestionObjectHolder[]
) => {
    let count = 0
    let total = 0

    primary.forEach((question, i) => {
        const primary_question = question
        const reliability_question = reli.find(
            (q) => q.QuestionID === primary_question.QuestionID
        )

        if (reliability_question) {
            const primary_response = primary_question.Response
            const reliability_response = reliability_question.Response

            if (primary_response === reliability_response) {
                count++
            }

            total++
        }
    })

    return {
        count,
        total,
        percent: Math.round((count / total) * 100),
    }
}

const CalculateAgreement = (primary: StudyObject[], reli: StudyObject[]) => {
    let iv_count = 0
    let iv_total = 0
    let ev_count = 0
    let ev_total = 0
    let reporting_count = 0
    let reporting_total = 0
    let outcomes_count = 0
    let outcomes_total = 0

    primary.forEach((study) => {
        const primary_study = study
        const reliability_study = reli.find(
            (s) => s.StudyID === primary_study.StudyID
        )

        if (reliability_study) {
            const primary_internal = primary_study.InternalValidity.Questions
            const reliability_internal =
                reliability_study.InternalValidity.Questions

            const iv_number = CompareResponsesInAreas(
                primary_internal,
                reliability_internal
            )

            const primary_external = primary_study.ExternalValidity.Questions
            const reliability_external =
                reliability_study.ExternalValidity.Questions

            const ev_number = CompareResponsesInAreas(
                primary_external,
                reliability_external
            )

            const primary_reporting = primary_study.Reporting.Questions
            const reliability_reporting = reliability_study.Reporting.Questions

            const reporting_number = CompareResponsesInAreas(
                primary_reporting,
                reliability_reporting
            )

            const primary_outcomes = primary_study.Outcomes.Questions
            const reliability_outcomes = reliability_study.Outcomes.Questions

            const outcomes_number = CompareResponsesInAreas(
                primary_outcomes,
                reliability_outcomes
            )

            iv_count += iv_number.count
            iv_total += iv_number.total

            ev_count += ev_number.count
            ev_total += ev_number.total

            reporting_count += reporting_number.count
            reporting_total += reporting_number.total

            outcomes_count += outcomes_number.count
            outcomes_total += outcomes_number.total
        }
    })

    const count = iv_count + ev_count + reporting_count + outcomes_count
    const total = iv_total + ev_total + reporting_total + outcomes_total

    return {
        TotalCount: count,
        TotalTotal: total,
        TotalPercent: Math.round((count / total) * 100),
        IV: {
            Count: iv_count,
            Total: iv_total,
            Percent: Math.round((iv_count / iv_total) * 100),
        },
        EV: {
            Count: ev_count,
            Total: ev_total,
            Percent: Math.round((ev_count / ev_total) * 100),
        },
        Reporting: {
            Count: reporting_count,
            Total: reporting_total,
            Percent: Math.round((reporting_count / reporting_total) * 100),
        },
        Outcomes: {
            Count: outcomes_count,
            Total: outcomes_total,
            Percent: Math.round((outcomes_count / outcomes_total) * 100),
        },
    }
}

const AgreementStatus = (state: ReliabilityState) => {
    if (state.primary && state.reliability) {
        const agreement = CalculateAgreement(
            state.primary.Studies,
            state.reliability.Studies
        )

        return (
            <div className="flex flex-col gap-y-4">
                <h1>Agreement Status:</h1>
                <Label>{`Total Percent: ${agreement.TotalPercent}`}</Label>
                <Label>{`Internal Validity: ${agreement.IV.Percent}`}</Label>
                <Label>{`External Validity: ${agreement.EV.Percent}`}</Label>
                <Label>{`Reporting: ${agreement.Reporting.Percent}`}</Label>
                <Label>{`Outcomes: ${agreement.Outcomes.Percent}`}</Label>
            </div>
        )
    } else {
        return null
    }
}

export function ReliabilityPage() {
    const refPrimaryFileInput = useRef<HTMLInputElement>(null)
    const refReliabilityFileInput = useRef<HTMLInputElement>(null)

    const [reliState, setReliState] = useState<ReliabilityState>({})
    const [results, setResults] = useState<ReactNode>()

    const is_disabled = !(
        reliState.primary?.ReviewType === 'Primary' &&
        reliState.reliability?.ReviewType === 'Reliability'
    )

    return (
        <div>
            <Hero />

            <Card>
                <CardHeader>
                    <CardTitle>Reliability Check</CardTitle>
                    <CardDescription>
                        Compute user agreement and view correspondence
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-4">
                    <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4">
                        <div className="flex flex-col border py-2 px-2 rounded-md gap-y-2 w-full">
                            <Label>Primary Coder</Label>
                            <input
                                ref={refPrimaryFileInput}
                                type="file"
                                onChange={(event) => {
                                    const file = event.target.files?.[0]
                                    if (file) {
                                        const reader = new FileReader()
                                        reader.onload = (e) => {
                                            const text = e.target
                                                ?.result as string
                                            const state = JSON.parse(text)
                                            setReliState((prev) => ({
                                                ...prev,
                                                primary: state,
                                            }))

                                            setResults(null)

                                            if (
                                                state.ReviewType !== 'Primary'
                                            ) {
                                                toast.error(
                                                    'Error: Mismatched file type',
                                                    {
                                                        description:
                                                            'A reliability coder file was loaded as a primary coder file',
                                                        duration: 2000,
                                                    }
                                                )

                                                refPrimaryFileInput.current?.setAttribute(
                                                    'value',
                                                    ''
                                                )
                                                refPrimaryFileInput.current?.setAttribute(
                                                    'type',
                                                    'text'
                                                )
                                                refPrimaryFileInput.current?.setAttribute(
                                                    'type',
                                                    'file'
                                                )
                                            }
                                        }
                                        reader.readAsText(file)
                                    }
                                }}
                            />

                            <PanelStatus
                                state={reliState.primary}
                                type="Primary"
                            />
                        </div>

                        <div className="flex flex-col border py-2 px-2 rounded-md gap-y-2 w-full">
                            <Label>Reliability Coder</Label>
                            <input
                                ref={refReliabilityFileInput}
                                type="file"
                                onChange={(event) => {
                                    const file = event.target.files?.[0]
                                    if (file) {
                                        const reader = new FileReader()
                                        reader.onload = (e) => {
                                            const text = e.target
                                                ?.result as string
                                            const state = JSON.parse(text)
                                            setReliState((prev) => ({
                                                ...prev,
                                                reliability: state,
                                            }))

                                            setResults(null)

                                            if (
                                                state.ReviewType !==
                                                'Reliability'
                                            ) {
                                                toast.error(
                                                    'Error: Mismatched file type',
                                                    {
                                                        description:
                                                            'A primary coder file was loaded as a reliability coder file',
                                                        duration: 2000,
                                                    }
                                                )

                                                refReliabilityFileInput.current?.setAttribute(
                                                    'value',
                                                    ''
                                                )
                                                refReliabilityFileInput.current?.setAttribute(
                                                    'type',
                                                    'text'
                                                )
                                                refReliabilityFileInput.current?.setAttribute(
                                                    'type',
                                                    'file'
                                                )
                                            }
                                        }
                                        reader.readAsText(file)
                                    }
                                }}
                            />

                            <PanelStatus
                                state={reliState.reliability}
                                type="Reliability"
                            />
                        </div>
                    </div>

                    <Button
                        size={'lg'}
                        disabled={is_disabled}
                        onClick={() => {
                            setResults(AgreementStatus(reliState))
                        }}
                    >
                        Calculate Reliability
                    </Button>

                    {results}
                </CardContent>
            </Card>
        </div>
    )
}
