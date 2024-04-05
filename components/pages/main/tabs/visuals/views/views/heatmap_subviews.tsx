import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { QuestionObjectHolder } from '@/questions/types/QuestionTypes'

export function StudyTitle({ text }: { text: string }) {
    return (
        <th className="[writing-mode:vertical-lr] rotate-180 text-start pt-2">
            {text}
        </th>
    )
}

export function StudyItemTooltip({
    Question,
}: {
    Question?: QuestionObjectHolder
}) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div className="pr-2">
                    {Question?.QuestionID.replaceAll('_', ' ')}
                </div>
            </TooltipTrigger>
            <TooltipContent side="right" align="center">
                <p className="max-w-[300px]">{Question?.QuestionStem}</p>
            </TooltipContent>
        </Tooltip>
    )
}

export function StudyCodedBlock({ Response }: { Response?: string }) {
    let coding = 'gray'

    switch (Response) {
        case 'Yes':
            coding = 'green'
            break
        case 'No':
            coding = 'red'
            break
        case 'Partial':
            coding = 'yellow'
            break
    }

    return (
        <td
            className="data-[coding=green]:bg-green-500 data-[coding=red]:bg-red-300 data-[coding=yellow]:bg-amber-400 bg-gray-200 rounded border-transparent"
            data-coding={coding}
        ></td>
    )
}
