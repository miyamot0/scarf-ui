'use client'

import { ReactNode } from 'react'
import { Dialog, DialogTrigger, DialogContent } from '../../ui/dialog'
import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from '../../ui/navigation-menu'
import { cn } from '@/lib/utils'

export const DialogHeaderItem = ({
    LinkText,
    Image,
    children,
}: {
    LinkText: string
    Image?: ReactNode
    children: ReactNode
}) => {
    return (
        <NavigationMenuItem>
            <Dialog>
                <DialogTrigger asChild>
                    <NavigationMenuLink
                        className={cn(
                            navigationMenuTriggerStyle(),
                            'flex flex-row gap-x-2 border shadow'
                        )}
                    >
                        {Image}
                        {LinkText}
                    </NavigationMenuLink>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                    {children}
                </DialogContent>
            </Dialog>
        </NavigationMenuItem>
    )
}
