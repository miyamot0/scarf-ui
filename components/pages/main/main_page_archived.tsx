'use client'

import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs'

const PlanningView = dynamic(
    () =>
        import('./tabs/planning/planning_view').then((mod) => mod.PlanningView),
    {
        loading: () => <LoadingSpinner className="mx-auto" />,
    }
)

const StudiesView = dynamic(
    () => import('./tabs/studies/studies_view').then((mod) => mod.StudiesView),
    {
        loading: () => <LoadingSpinner className="mx-auto" />,
    }
)

const VisualsView = dynamic(
    () => import('./tabs/visuals/visuals_view').then((mod) => mod.VisualsView),
    {
        loading: () => <LoadingSpinner className="mx-auto" />,
    }
)

const EmpiricalTabView = dynamic(
    () =>
        import('./tabs/empirical/empirical_view').then(
            (mod) => mod.EmpiricalTabView
        ),
    {
        loading: () => <LoadingSpinner className="mx-auto" />,
    }
)

const NotesTabView = dynamic(
    () => import('./tabs/notes/notes_view').then((mod) => mod.NotesTabView),
    {
        loading: () => <LoadingSpinner className="mx-auto" />,
    }
)

import { dbAtom } from '@/atoms/db_atom'
import { useReducerAtomLocal as useReducerAtom } from '@/components/hooks/useReducerAtomLocal'
import { database_reducer } from '@/atoms/reducers/reducer'
import { cn } from '@/lib/utils'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Hero } from './views/hero'
import dynamic from 'next/dynamic'
import { Provider } from 'jotai'
import { toast } from 'sonner'
import { DisplayStateType } from '@/questions/types/DisplayStateTypes'
import { GlobalStateType } from '@/questions/types/GlobalStateType'

export function MainPageShim({ data }: { data: GlobalStateType }) {
    return (
        <Provider>
            <MainPageArchived data={{ ...data, DisplayState: 'planning' }} />
        </Provider>
    )
}

export function MainPageArchived({ data }: { data: GlobalStateType }) {
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)

    useEffect(() => {
        dispatch({
            type: 'load_external',
            payload: {
                saved_state: data,
            },
        })
    }, [dispatch, data])

    const catch_navigation = (
        local_state: GlobalStateType,
        display: DisplayStateType
    ) => {
        if (local_state.DisplayState === display) return

        if (local_state.ReviewPlans.Status === 'NotStarted') {
            toast('Please complete the planning tab before proceeding.', {
                duration: 2000,
            })

            return
        }

        dispatch({
            type: 'update_display_state',
            payload: {
                display_state: display,
            },
        })
    }

    return (
        <>
            <Hero />
            <div className="flex flex-col gap-y-4">
                <Card className="w-full">
                    <CardHeader className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <CardTitle>{`Archived Review: ${
                                state.ReviewName ?? 'Loading...'
                            }`}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Tabs
                            value={state.DisplayState}
                            className={cn('w-full flex flex-col gap-y-4')}
                        >
                            <TabsList className="w-full flex flex-row border">
                                <TabsTrigger
                                    value="planning"
                                    className="w-full"
                                    onClick={() => {
                                        if (state.DisplayState === 'planning')
                                            return

                                        dispatch({
                                            type: 'update_display_state',
                                            payload: {
                                                display_state: 'planning',
                                            },
                                        })
                                    }}
                                >
                                    Planning
                                </TabsTrigger>
                                <TabsTrigger
                                    value="studies"
                                    className={cn(
                                        'w-full',
                                        state.ReviewPlans.Status ===
                                            'NotStarted'
                                            ? 'opacity-50'
                                            : ''
                                    )}
                                    onClick={() =>
                                        catch_navigation(state, 'studies')
                                    }
                                >
                                    Coding
                                </TabsTrigger>
                                <TabsTrigger
                                    value="empirical"
                                    className={cn(
                                        'w-full',
                                        state.ReviewPlans.Status ===
                                            'NotStarted'
                                            ? 'opacity-50'
                                            : ''
                                    )}
                                    onClick={() =>
                                        catch_navigation(state, 'empirical')
                                    }
                                >
                                    Data Inspection
                                </TabsTrigger>
                                <TabsTrigger
                                    value="visuals"
                                    className={cn(
                                        'w-full',
                                        state.ReviewPlans.Status ===
                                            'NotStarted'
                                            ? 'opacity-50'
                                            : ''
                                    )}
                                    onClick={() =>
                                        catch_navigation(state, 'visuals')
                                    }
                                >
                                    Data Visualization
                                </TabsTrigger>
                                <TabsTrigger
                                    value="notes"
                                    className={cn(
                                        'w-full',
                                        state.ReviewPlans.Status ===
                                            'NotStarted'
                                            ? 'opacity-50'
                                            : ''
                                    )}
                                    onClick={() =>
                                        catch_navigation(state, 'notes')
                                    }
                                >
                                    Review Notes
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="planning">
                                <PlanningView readonly={true} />
                            </TabsContent>
                            <TabsContent value="studies">
                                <StudiesView readonly={true} />
                            </TabsContent>
                            <TabsContent value="empirical">
                                <EmpiricalTabView readonly={true} />
                            </TabsContent>
                            <TabsContent value="visuals">
                                <VisualsView />
                            </TabsContent>
                            <TabsContent value="notes">
                                <NotesTabView readonly={true} />
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
