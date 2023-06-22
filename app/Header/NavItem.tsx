"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface titleProps {
    title:string
    href:string
}

export default function NavItem ({title,href}:titleProps) {
    let router = usePathname()
    return(
    <Link href={`${href}`} className="m-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 relative group">
        {title}
        <span className={`h-[2px] inline-block bg-[#4e38bb] dark:bg-[#816bee] absolute left-0 -bottom-0.5 rounded-xl
        group-hover:w-full transition-[width] ease duration-300
        ${router === href ? 'w-full' : 'w-0'}
        `}>&nbsp;</span>
    </Link>
    )
}

export function NavMain () {
    let router = usePathname()
    // console.log(router)
    return(<div>
        {/* <Link href="/" className={`md:hidden ${router === "/" && "hidden"}`}>Ulukbek M.</Link> */}
        {/* <Link href="/" className={`hidden ${router !== "/" && "md:block"}`}>Ulukbek Mambetov</Link> */}
        <Link href="/" className={`md:hidden`}>Ulukbek M.</Link>
        <Link href="/" className={`hidden md:block`}>Ulukbek Mambetov</Link>
        {/* <Link href="/" className={`md:hidden`}>Ulukbek M.</Link>
        <Link href="/" className={`hidden ${router !== "/" && "md:block"}`}>Ulukbek Mambetov</Link> */}
    </div>)
}