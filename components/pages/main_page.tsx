'use client'

import { useEffect, useRef } from 'react'
import { StudyDetailsDialog } from '../dialogs/study_details_dialog'
import { Card, CardContent } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { InstructionsView } from './instructions/instructions_view'
import { StudiesView } from './studies/studies_view'
import { dbAtom } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import { StudyInternalValidityDialog } from '../dialogs/study_internal_validity_dialog'
import { StudyExternalValidityDialog } from '../dialogs/study_external_validity_dialog'
import { StudyReportingDialog } from '../dialogs/study_reporting_dialog'
import { StudyOutcomesDialog } from '../dialogs/study_outcomes_dialog'
import { VisualsView } from './visuals/visuals_view'
import { database_reducer } from '@/atoms/reducers/reducer'

export function MainPage() {
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)
    const figureRef1 = useRef<SVGSVGElement>(null)
    const figureRef2 = useRef<SVGSVGElement>(null)
    const figureRef3 = useRef<SVGSVGElement>(null)

    useEffect(() => {
        dispatch({
            type: 'load_local',
        })
    }, [dispatch])

    return (
        <div className="flex flex-col gap-y-4">
            <Card className="w-full">
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
                    </Tabs>
                </CardContent>
            </Card>

            {/* Dialogs */}
            <StudyDetailsDialog />
            <StudyInternalValidityDialog />
            <StudyExternalValidityDialog />
            <StudyReportingDialog />
            <StudyOutcomesDialog />
        </div>
    )
}
