'use client'

import { useEffect, useRef, useState } from 'react'
import { StudyDetailsDialog } from '../../dialogs/study_details_dialog'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs'
import { InstructionsView } from './tabs/instructions/instructions_view'
import { StudiesView } from './tabs/studies/studies_view'
import { dbAtom } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import { StudyInternalValidityDialog } from '../../dialogs/study_internal_validity_dialog'
import { StudyExternalValidityDialog } from '../../dialogs/study_external_validity_dialog'
import { StudyReportingDialog } from '../../dialogs/study_reporting_dialog'
import { StudyOutcomesDialog } from '../../dialogs/study_outcomes_dialog'
import { VisualsView } from './tabs/visuals/visuals_view'
import { database_reducer } from '@/atoms/reducers/reducer'
import { ReviewDetailsDialog } from '../../dialogs/review_details_dialog'
import { cn } from '@/lib/utils'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Hero } from './views/hero'
import { EmpiricalTabView } from './tabs/empirical/empirical_view'
import { ButtonBar } from './views/button_bar'

export function MainPage() {
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)
    const refFileInput = useRef<HTMLInputElement>(null)
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        dispatch({
            type: 'load_local',
        })

        setIsLoading(false)
    }, [dispatch])

    return (
        <>
            <Hero />

            <div className="flex flex-col gap-y-4">
                <Card className="w-full">
                    <CardHeader className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <CardTitle>{`Review: Name: ${
                                state.ReviewName ?? 'UNNAMED'
                            }`}</CardTitle>
                            <CardDescription>{`Reviewer Type: ${
                                state.ReviewType ?? 'Primary'
                            }`}</CardDescription>
                        </div>

                        <ButtonBar
                            state={state}
                            dispatch={dispatch}
                            refFileInput={refFileInput}
                        />
                    </CardHeader>
                    <CardContent>
                        {loading && <LoadingSpinner className="mx-auto" />}

                        <Tabs
                            value={state.DisplayState}
                            className={cn(
                                'w-full flex flex-col gap-y-4',
                                loading ? 'hidden' : ''
                            )}
                        >
                            <TabsList className="w-full flex flex-row">
                                <TabsTrigger
                                    value="instructions"
                                    className="w-full"
                                    onClick={() => {
                                        if (
                                            state.DisplayState ===
                                            'instructions'
                                        )
                                            return

                                        dispatch({
                                            type: 'update_display_state',
                                            payload: {
                                                display_state: 'instructions',
                                            },
                                        })
                                    }}
                                >
                                    Instructions
                                </TabsTrigger>
                                <TabsTrigger
                                    value="studies"
                                    className="w-full"
                                    onClick={() => {
                                        if (state.DisplayState === 'studies')
                                            return

                                        dispatch({
                                            type: 'update_display_state',
                                            payload: {
                                                display_state: 'studies',
                                            },
                                        })
                                    }}
                                >
                                    Code Studies
                                </TabsTrigger>
                                <TabsTrigger
                                    value="empirical"
                                    className="w-full"
                                    onClick={() => {
                                        if (state.DisplayState === 'empirical')
                                            return

                                        dispatch({
                                            type: 'update_display_state',
                                            payload: {
                                                display_state: 'empirical',
                                            },
                                        })
                                    }}
                                >
                                    Inspect Dataset
                                </TabsTrigger>
                                <TabsTrigger
                                    value="visuals"
                                    className="w-full"
                                    onClick={() => {
                                        if (state.DisplayState === 'visuals')
                                            return

                                        dispatch({
                                            type: 'update_display_state',
                                            payload: {
                                                display_state: 'visuals',
                                            },
                                        })
                                    }}
                                >
                                    Visualize Data
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="instructions">
                                <InstructionsView />
                            </TabsContent>
                            <TabsContent value="studies">
                                <StudiesView />
                            </TabsContent>
                            <TabsContent value="empirical">
                                <EmpiricalTabView />
                            </TabsContent>
                            <TabsContent value="visuals">
                                <VisualsView />
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* Dialogs */}
                <ReviewDetailsDialog />
                <StudyDetailsDialog />
                <StudyInternalValidityDialog />
                <StudyExternalValidityDialog />
                <StudyReportingDialog />
                <StudyOutcomesDialog />
            </div>
        </>
    )
}
