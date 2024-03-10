'use client'

import { simplified_licenses } from '@/assets/simplified_licenses'
import { DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu'
import { DialogHeaderItem } from './views/dialog_header_item'
import Link from 'next/link'
import { Code2Icon, GithubIcon, InfoIcon } from 'lucide-react'

export const Header = () => {
    return (
        <NavigationMenu className="w-full justify-end max-w-full">
            <NavigationMenuList className="gap-x-4 ">
                <DialogHeaderItem
                    LinkText="Information"
                    Image={<InfoIcon size={20} />}
                >
                    <DialogHeader>
                        <DialogTitle>SCARF-UI Web-app Information</DialogTitle>
                        <DialogDescription>
                            Information regarding the SCARF and SCARF-UI tools
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-y-4">
                        <span>
                            The SCARF-UI web-app is an extension of the original
                            SCARF tool used to appraise single-case experimental
                            designs (SCEDs) for published and published works.
                        </span>
                        <span>
                            Information on the original SCARF tool and its
                            design and purpose is available at{' '}
                            <Link
                                className="text-blue-600"
                                href={'https://ebip.vkcsites.org/scarfv2/'}
                            >
                                https://ebip.vkcsites.org/scarfv2/
                            </Link>
                            , the personal website of Dr. Jennifer Ledford.
                        </span>
                    </div>
                </DialogHeaderItem>

                <DialogHeaderItem
                    LinkText="Licenses"
                    Image={<Code2Icon size={20} />}
                >
                    <DialogHeader>
                        <DialogTitle>Open Source Licenses</DialogTitle>
                        <DialogDescription>
                            The SCARF-UI web-app incorporates the following
                            tools
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

                <DialogHeaderItem
                    LinkText="Source Code"
                    Image={<GithubIcon size={20} />}
                >
                    <DialogHeader>
                        <DialogTitle>Source Code</DialogTitle>
                        <DialogDescription>
                            Access the source code for the SCARF-UI tool
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-y-4">
                        <span>
                            The source code necessary to inspect, build, or
                            otherwise extend the SCARF-UI web app is provided
                            publicly at{' '}
                            <Link
                                className="text-blue-600"
                                href={'https://github.com/miyamot0/scarf-ui'}
                            >
                                https://github.com/miyamot0/scarf-ui
                            </Link>{' '}
                            under the permissive MIT license.
                        </span>
                    </div>
                </DialogHeaderItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
