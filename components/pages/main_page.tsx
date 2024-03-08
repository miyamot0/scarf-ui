'use client'

import { StudyDetailsDialog } from '../dialogs/study_details_dialog'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import MaxWidthWrapper from '../ui/max_width_wrapper'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { InstructionsView } from './instructions/instructions_view'
import { StudiesView } from './studies/studies_view'
import { database_reducer, dbAtom } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'

export function MainPage() {
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)

    return (
        <MaxWidthWrapper className="flex flex-col gap-y-4">
            <div className="flex flex-row justify-between">
                <Button>Save</Button>
                <div className=" flex flex-row w-fit gap-x-2">
                    <Button>Import</Button>
                    <Button>Export</Button>
                </div>
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
                            <TabsTrigger value="visuals" className="w-full">
                                Visuals
                            </TabsTrigger>
                            <TabsTrigger value="metrics" className="w-full">
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
                            Change your password here.
                        </TabsContent>
                        <TabsContent value="metrics">
                            Change your password here.
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
            <StudyDetailsDialog />
        </MaxWidthWrapper>
    )
}
