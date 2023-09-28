import Link from "next/link"
import MobileHeader from "./mobileHeader"
import Toggle from "./Toggle"
import NavItem from "./NavItem"
import { NavMain } from "./NavItem"

export default function Header () {
    return(
    // <header className="flex justify-between items-center py-5 sticky top-0 z-50 bg-inherit">
    <header className="flex justify-between items-center p-5 bg-inherit fixed top-0 z-50 left-0 right-0">
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-500 hover:dark:text-gray-300 cursor-pointer md:ml-10 lg:ml-20">
            {/* <Link href="/" className="md:hidden">Ulukbek M.</Link>
            <Link href="/" className="hidden md:block ">Ulukbek Mambetov</Link> */}
            <NavMain/>
        </div>

        <div className="flex items-center leading-5 md:mr-10 lg:mr-20">
            <div className="hidden md:block">
                <NavItem title="About" href="/about"/>
                <NavItem title="Projects" href="/projects"/>
                <NavItem title="Contact" href="/contact"/>
                {/* <Link href="/about" className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">About</Link>
                <Link href="/projects"className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">Projects</Link>
                <Link href="/contact"className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">Contact</Link> */}
            </div>

            <Toggle/>

            <MobileHeader/>

        </div>
    </header>
    )
}