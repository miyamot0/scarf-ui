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
import { Button } from '../../ui/button'
import {
    HardDriveDownloadIcon,
    HardDriveUploadIcon,
    SaveIcon,
    Settings2Icon,
} from 'lucide-react'
import { ReviewDetailsDialog } from '../../dialogs/review_details_dialog'
import { cn } from '@/lib/utils'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Hero } from './views/hero'
import { EmpiricalTabView } from './tabs/empirical/empirical_view'
import { toast } from 'sonner'
import { TooltipWrapper } from '@/components/wrappers/tooltip_wrapper'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'

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

    function saveTxtToFile(fileName: string, textData: string) {
        const blobData = new Blob([textData], { type: 'text/plain' })
        const urlToBlob = window.URL.createObjectURL(blobData)

        const a = document.createElement('a')
        a.style.setProperty('display', 'none')
        document.body.appendChild(a)
        a.href = urlToBlob
        a.download = fileName
        a.click()
        window.URL.revokeObjectURL(urlToBlob)
        a.remove()
    }

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
                        <input
                            type="file"
                            ref={refFileInput}
                            className="hidden"
                            onChange={(e) => {
                                if (!e.target.files) return

                                const file = e.target.files[0]
                                const reader = new FileReader()

                                reader.onload = (e) => {
                                    if (!e.target) return

                                    const content = e.target.result

                                    dispatch({
                                        type: 'load_external',
                                        payload: {
                                            saved_state: JSON.parse(
                                                content as string
                                            ),
                                        },
                                    })
                                }
                                reader.readAsText(file)
                            }}
                        />
                        <div className="flex flex-row gap-x-2">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        size={'sm'}
                                        variant={'outline'}
                                        className=""
                                        onClick={() => {
                                            dispatch({ type: 'save_local' })

                                            toast('Saved', {
                                                description:
                                                    'Your data has been saved.',
                                                duration: 2000,
                                                dismissible: true,
                                            })
                                        }}
                                    >
                                        <SaveIcon size={18} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Save current data to browser storage.</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            if (refFileInput.current) {
                                                refFileInput.current.click()
                                            }
                                        }}
                                    >
                                        <HardDriveUploadIcon size={18} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Load/Import an external project file.</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            const data = JSON.stringify(state)
                                            saveTxtToFile(
                                                'scarf-web-ui.json',
                                                data
                                            )
                                        }}
                                    >
                                        <HardDriveDownloadIcon size={18} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>
                                        Backup the current data to an external
                                        file.
                                    </p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        size={'sm'}
                                        variant={'outline'}
                                        onClick={() => {
                                            dispatch({
                                                type: 'update_dialog_state',
                                                payload: {
                                                    dialog_state: {
                                                        dialog_type:
                                                            'review_details',
                                                        study: undefined,
                                                    },
                                                },
                                            })
                                        }}
                                    >
                                        <Settings2Icon size={18} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Edit project name and/or coder role.</p>
                                </TooltipContent>
                            </Tooltip>
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
