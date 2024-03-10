'use client'

import { simplified_licenses } from '@/assets/simplified_licenses'
import { DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu'
import { DialogHeaderItem } from './views/dialog_header_item'
import Link from 'next/link'

export const Header = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="gap-x-4">
                <DialogHeaderItem LinkText="Information">
                    <DialogHeader>
                        <DialogTitle>SCARF Information</DialogTitle>
                        <DialogDescription>
                            Information and acknowledgements
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-y-4">
                        <span>
                            Information on the SCARF tool and its original
                            design and purpose is available{' '}
                            <Link
                                className="text-blue-600"
                                href={'https://ebip.vkcsites.org/scarfv2/'}
                            >
                                here
                            </Link>{' '}
                            with support using spreadsheet software.
                        </span>
                    </div>
                </DialogHeaderItem>

                <DialogHeaderItem LinkText="Licenses">
                    <DialogHeader>
                        <DialogTitle>Licenses</DialogTitle>
                        <DialogDescription>
                            This web-app is made possible using various
                            resources
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-y-4">
                        {simplified_licenses
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((license) => {
                                return (
                                    <span key={license.name}>
                                        {`${license.name} (${license.license})`}{' '}
                                        -
                                        <Link
                                            className="text-blue-600"
                                            href={license.link}
                                        >
                                            {' '}
                                            Link
                                        </Link>
                                    </span>
                                )
                            })}
                    </div>
                </DialogHeaderItem>

                <DialogHeaderItem LinkText="Source Code">
                    <DialogHeader>
                        <DialogTitle>Source Code</DialogTitle>
                        <DialogDescription>
                            Link to the source code necessary to build the SCARF
                            tool
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-y-4">TODO</div>
                </DialogHeaderItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
