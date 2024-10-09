import Link from 'next/link'
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle, } from "@/app/components/ui/navigation-menu"
import { ModeToggle } from "@/app/components/modeToggle";

import { InitialDataInterface } from "@/app/lib/data"

interface HeaderProps {
    data?: InitialDataInterface,
}

export default function Header({ data }: HeaderProps) {
    return (
        <header
            className="max-w-7xl mx-auto p-2 flex justify-between">
            <Link href="/"
            className='p-2 border-2 text-2xl border-neutral-900 dark:border-neutral-100 font-black'>
                { data?.header_section?.logo?.logo_text }
            </Link>
            
            <NavigationMenu className="">
                <NavigationMenuList>
                    <Link href="/#profile" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            { data?.header_section?.nav_menu?.[0]?.label }
                        </NavigationMenuLink>
                    </Link>
                    <Link href="/#projects" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            { data?.header_section?.nav_menu?.[1]?.label }
                        </NavigationMenuLink>
                    </Link>
                    {/* <Link href="/blog/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            { data?.header_section?.nav_menu?.[2]?.label }
                        </NavigationMenuLink>
                    </Link> */}
                    <Link href="/#contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            { data?.header_section?.nav_menu?.[3]?.label }
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuList>
            </NavigationMenu>

            <ModeToggle />
        </header>
    )
}