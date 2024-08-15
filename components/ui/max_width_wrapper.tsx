import { cn } from '@/lib/utils'
import { ReactNode, RefObject } from 'react'

const MaxWidthWrapper = ({
    className,
    children,
    ref,
}: {
    className?: string
    children: ReactNode
    ref?: RefObject<HTMLDivElement>
}) => {
    return (
        <div
            ref={ref}
            className={cn(
                'mx-auto w-full max-w-screen-2xl px-2.5 md:px-10',
                className
            )}
        >
            {children}
        </div>
    )
}

export default MaxWidthWrapper
