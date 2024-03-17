'use client'

import { simplified_licenses } from '@/assets/simplified_licenses'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '../ui/navigation-menu'
import Link from 'next/link'
import {
    Code2Icon,
    GithubIcon,
    InfoIcon,
    ListChecksIcon,
    SheetIcon,
    UserSearchIcon,
} from 'lucide-react'
import { ThemeToggle } from '../themes/theme_toggle'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

export const Header = () => {
    return (
        <NavigationMenu className="w-full justify-between max-w-full">
            <NavigationMenuList className="gap-x-4 ">
                <NavigationMenuLink
                    href="/"
                    className={cn(
                        navigationMenuTriggerStyle(),
                        'flex flex-row gap-x-2 border shadow'
                    )}
                >
                    <SheetIcon size={20} />
                    Data Entry
                </NavigationMenuLink>

                <NavigationMenuLink
                    href="/instructions"
                    className={cn(
                        navigationMenuTriggerStyle(),
                        'flex flex-row gap-x-2 border shadow'
                    )}
                >
                    <ListChecksIcon size={20} />
                    Instructions
                </NavigationMenuLink>

                <NavigationMenuLink
                    href="/reliability"
                    className={cn(
                        navigationMenuTriggerStyle(),
                        'flex flex-row gap-x-2 border shadow'
                    )}
                >
                    <UserSearchIcon size={20} />
                    Reliability
                </NavigationMenuLink>
            </NavigationMenuList>

            <div className="flex flex-row gap-2">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="icon">
                            <InfoIcon size={20} />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle>
                                SCARF-UI Web-app Information
                            </DialogTitle>
                            <DialogDescription>
                                Information regarding the SCARF and SCARF-UI
                                tools
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col gap-y-4">
                            <span>
                                The SCARF-UI web-app is an extension of the
                                original SCARF tool used to appraise single-case
                                experimental designs (SCEDs) for published and
                                published works.
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
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Code2Icon size={20} />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
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
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="icon">
                            <GithubIcon size={20} />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle>Source Code</DialogTitle>
                            <DialogDescription>
                                Access the source code for the SCARF-UI tool
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col gap-y-4">
                            <span>
                                The source code necessary to inspect, build, or
                                otherwise extend the SCARF-UI web app is
                                provided publicly at{' '}
                                <Link
                                    className="text-blue-600"
                                    href={
                                        'https://github.com/miyamot0/scarf-ui'
                                    }
                                >
                                    https://github.com/miyamot0/scarf-ui
                                </Link>{' '}
                                under the permissive MIT license.
                            </span>
                        </div>
                    </DialogContent>
                </Dialog>

                <ThemeToggle />
            </div>
        </NavigationMenu>
    )
}
