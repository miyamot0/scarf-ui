import { DatabaseAction } from '@/atoms/reducers/reducer_types'
import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { GlobalStateType } from '@/questions/types/GlobalStateType'
import {
    HardDriveDownloadIcon,
    HardDriveUploadIcon,
    SaveIcon,
    Settings2Icon,
} from 'lucide-react'
import { RefObject } from 'react'
import { toast } from 'sonner'

export function ButtonBar({
    state,
    dispatch,
    refFileInput,
}: {
    state: GlobalStateType
    dispatch: (action: DatabaseAction) => void
    refFileInput: RefObject<HTMLInputElement>
}) {
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
        <div className="flex flex-row gap-x-2">
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
                                saved_state: JSON.parse(content as string),
                            },
                        })
                    }
                    reader.readAsText(file)
                }}
            />
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size={'sm'}
                        variant={'outline'}
                        className=""
                        onClick={() => {
                            dispatch({ type: 'save_local' })

                            toast('Saved', {
                                description: 'Your data has been saved.',
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
                            saveTxtToFile('scarf-web-ui.json', data)
                        }}
                    >
                        <HardDriveDownloadIcon size={18} />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Backup the current data to an external file.</p>
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
                                        dialog_type: 'review_details',
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
    )
}
