'use client'

import { useEffect, useRef } from 'react'
import { StudyDetailsDialog } from '../dialogs/study_details_dialog'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import MaxWidthWrapper from '../ui/max_width_wrapper'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { InstructionsView } from './instructions/instructions_view'
import { StudiesView } from './studies/studies_view'
import { database_reducer, dbAtom } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import { useToast } from '../ui/use-toast'

export function MainPage() {
    const { toast } = useToast()
    const refFileInput = useRef<HTMLInputElement>(null)
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)

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

    useEffect(() => {
        dispatch({ type: 'load_local' })
    }, [dispatch])

    return (
        <MaxWidthWrapper className="flex flex-col gap-y-4">
            <div className="flex flex-row justify-between">
                <Button
                    onClick={() => {
                        dispatch({ type: 'save_local' })

                        toast({
                            title: 'Saved',
                            description: 'Your data has been saved.',
                            duration: 2000,
                        })
                    }}
                >
                    Save
                </Button>
                <div className=" flex flex-row w-fit gap-x-2">
                    <Button
                        onClick={() => {
                            if (refFileInput.current) {
                                refFileInput.current.click()
                            }
                        }}
                    >
                        Import
                    </Button>
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
                    <Button
                        onClick={() => {
                            const data = JSON.stringify(state)
                            saveTxtToFile('scarf-web-ui.json', data)
                        }}
                    >
                        Export
                    </Button>
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
