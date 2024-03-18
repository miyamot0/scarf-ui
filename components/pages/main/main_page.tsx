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

const InstructionsView = dynamic(
    () =>
        import('./tabs/instructions/instructions_view').then(
            (mod) => mod.InstructionsView
        ),
    {
        loading: () => <p>Loading...</p>,
    }
)

const StudiesView = dynamic(
    () => import('./tabs/studies/studies_view').then((mod) => mod.StudiesView),
    {
        loading: () => <p>Loading...</p>,
    }
)

const VisualsView = dynamic(
    () => import('./tabs/visuals/visuals_view').then((mod) => mod.VisualsView),
    {
        loading: () => <p>Loading...</p>,
    }
)

const EmpiricalTabView = dynamic(
    () =>
        import('./tabs/empirical/empirical_view').then(
            (mod) => mod.EmpiricalTabView
        ),
    {
        loading: () => <p>Loading...</p>,
    }
)

import { DefaultStartingValue, dbAtom } from '@/atoms/db_atom'
import { useHydrateAtoms, useReducerAtom } from 'jotai/utils'
import { StudyInternalValidityDialog } from '../../dialogs/study_internal_validity_dialog'
import { StudyExternalValidityDialog } from '../../dialogs/study_external_validity_dialog'
import { StudyReportingDialog } from '../../dialogs/study_reporting_dialog'
import { StudyOutcomesDialog } from '../../dialogs/study_outcomes_dialog'
import { database_reducer } from '@/atoms/reducers/reducer'
import { ReviewDetailsDialog } from '../../dialogs/review_details_dialog'
import { cn } from '@/lib/utils'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Hero } from './views/hero'
import { ButtonBar } from './views/button_bar'
import { StudyImportDialog } from '@/components/dialogs/study_import_dialog'
import dynamic from 'next/dynamic'
import { Provider } from 'jotai'
import { GlobalStateType } from '@/questions/types/GlobalStateType'
import { useExistingData } from '@/components/hooks/useExistingData'

export function MainPage() {
    const { data, error, isLoading } = useExistingData()
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)
    const refFileInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isLoading) return

        dispatch({
            type: 'load_external',
            payload: {
                saved_state: data,
            },
        })
    }, [dispatch, data, isLoading])

    return (
        <>
            <Hero />
            <div className="flex flex-col gap-y-4">
                <Card className="w-full">
                    <CardHeader className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <CardTitle>{`Review: Name: ${
                                isLoading ? '' : state.ReviewName ?? 'UNNAMED'
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
                        {isLoading ?? <LoadingSpinner className="mx-auto" />}

                        <Tabs
                            value={state.DisplayState}
                            className={cn(
                                'w-full flex flex-col gap-y-4'
                                //isLoading ? 'hidden' : ''
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
                                    Coding Instructions
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
                                    Study Coding
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
                                    Data Inspection
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
                                    Visualize Coding
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
                <StudyImportDialog />
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
