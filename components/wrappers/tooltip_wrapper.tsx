'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

export const TooltipWrapper = ({
    children,
    text,
}: {
    children: React.ReactNode
    text: string
}) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
            <TooltipContent>
                <p>{text}</p>
            </TooltipContent>
        </Tooltip>
    )
}
