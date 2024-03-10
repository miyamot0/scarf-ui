'use client'

import { ReactNode } from 'react'
import { Dialog, DialogTrigger, DialogContent } from '../../ui/dialog'
import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from '../../ui/navigation-menu'

export const DialogHeaderItem = ({
    LinkText,
    children,
}: {
    LinkText: string
    children: ReactNode
}) => {
    return (
        <NavigationMenuItem>
            <Dialog>
                <DialogTrigger asChild>
                    <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                    >
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
