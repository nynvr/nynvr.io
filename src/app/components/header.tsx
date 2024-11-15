import Link from 'next/link'
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle, } from "@/app/components/ui/navigation-menu"
import { ModeToggle } from "@/app/components/modeToggle";

export default function Header() {
    return (
        <header
            className="max-w-7xl mx-auto p-2 flex justify-between">
            <Link href="/"
            className='p-2 border-2 text-2xl border-neutral-900 dark:border-neutral-100 font-black'>
                NYNVR
            </Link>
            
            <NavigationMenu className="">
                <NavigationMenuList>
                    <Link href="/#profile" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Profile
                        </NavigationMenuLink>
                    </Link>
                    <Link href="/#projects" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Projects
                        </NavigationMenuLink>
                    </Link>
                    {/* <Link href="/blog/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Blog
                        </NavigationMenuLink>
                    </Link> */}
                    <Link href="/#contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuList>
            </NavigationMenu>

            <ModeToggle />
        </header>
    )
}