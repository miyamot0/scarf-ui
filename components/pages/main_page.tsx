'use client'

import { useEffect } from 'react'
import { StudyDetailsDialog } from '../dialogs/study_details_dialog'
import { Card, CardContent } from '../ui/card'
import MaxWidthWrapper from '../ui/max_width_wrapper'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { InstructionsView } from './instructions/instructions_view'
import { StudiesView } from './studies/studies_view'
import { database_reducer, dbAtom } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import { StudyInternalValidityDialog } from '../dialogs/study_internal_validity_dialog'
import { StudyExternalValidityDialog } from '../dialogs/study_external_validity_dialog'
import { StudyReportingDialog } from '../dialogs/study_reporting_dialog'
import { StudyOutcomesDialog } from '../dialogs/study_outcomes_dialog'
import { VisualsView } from './visuals/visuals_view'

export function MainPage() {
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)

    useEffect(() => {
        dispatch({ type: 'load_local' })
    }, [dispatch])

    return (
        <MaxWidthWrapper className="flex flex-col gap-y-4">
            <div className="flex flex-row justify-between">
                <div className=" flex flex-row w-fit gap-x-2"></div>
            </div>
            <Card>
                <CardContent className="pt-6">
                    <Tabs
                        value={state.DisplayState}
                        className="w-full flex flex-col gap-y-4"
                    >
                        <TabsList className="w-full flex flex-row">
                            <TabsTrigger
                                value="instructions"
                                className="w-full"
                                onClick={() =>
                                    dispatch({
                                        type: 'update_display_state',
                                        payload: {
                                            display_state: 'instructions',
                                        },
                                    })
                                }
                            >
                                Instructions
                            </TabsTrigger>
                            <TabsTrigger
                                value="studies"
                                className="w-full"
                                onClick={() =>
                                    dispatch({
                                        type: 'update_display_state',
                                        payload: {
                                            display_state: 'studies',
                                        },
                                    })
                                }
                            >
                                Studies
                            </TabsTrigger>
                            <TabsTrigger
                                value="visuals"
                                className="w-full"
                                onClick={() =>
                                    dispatch({
                                        type: 'update_display_state',
                                        payload: {
                                            display_state: 'visuals',
                                        },
                                    })
                                }
                            >
                                Visuals
                            </TabsTrigger>
                            <TabsTrigger
                                value="metrics"
                                className="w-full hidden"
                                onClick={() =>
                                    dispatch({
                                        type: 'update_display_state',
                                        payload: {
                                            display_state: 'metrics',
                                        },
                                    })
                                }
                            >
                                Metrics
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="instructions">
                            <InstructionsView />
                        </TabsContent>
                        <TabsContent value="studies">
                            <StudiesView />
                        </TabsContent>
                        <TabsContent value="visuals">
                            <VisualsView />
                        </TabsContent>
                        <TabsContent value="metrics">
                            TODO: Metrics Here.
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
            {/* Dialogs */}
            <StudyDetailsDialog />
            <StudyInternalValidityDialog />
            <StudyExternalValidityDialog />
            <StudyReportingDialog />
            <StudyOutcomesDialog />
        </MaxWidthWrapper>
    )
}
