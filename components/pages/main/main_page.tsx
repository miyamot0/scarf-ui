'use client'

import { useEffect, useState } from 'react'
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
import { Button } from '../../ui/button'
import { Settings2Icon } from 'lucide-react'
import { ReviewDetailsDialog } from '../../dialogs/review_details_dialog'
import { cn } from '@/lib/utils'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Hero } from './views/hero'

export function MainPage() {
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)
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
                        <div>
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                onClick={() => {
                                    dispatch({
                                        type: 'update_dialog_state',
                                        payload: {
                                            dialog_state: {
                                                dialog_type: 'review_details',
                                                study: undefined,
                                            },
                                        },
                                    })
                                }}
                            >
                                <Settings2Icon size={18} />
                            </Button>
                        </div>
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
