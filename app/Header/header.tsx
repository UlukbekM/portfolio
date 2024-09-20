import Link from "next/link"
import MobileHeader from "./mobileHeader"
import Toggle from "./Toggle"
import NavItem from "./NavItem"
import { NavMain } from "./NavItem"

export default function Header () {
    return(
    <header className="flex justify-between items-center p-5 bg-inherit fixed top-0 z-50 left-0 right-0">
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-500 hover:dark:text-gray-300 cursor-pointer md:ml-10 lg:ml-20">
            <NavMain/>
        </div>

        <div className="flex items-center leading-5 md:mr-10 lg:mr-20">
            <div className="hidden md:block">
                <NavItem title="About" href="/about"/>
                <NavItem title="Projects" href="/projects"/>
                <NavItem title="Contact" href="/contact"/>
            </div>

            {/* <Toggle/> */}

            <MobileHeader/>

        </div>
    </header>
    )
}