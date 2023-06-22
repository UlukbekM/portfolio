"use client"
import { useEffect, useState } from "react";
import { useTheme } from "next-themes"

export default function Toggle () {
    const {resolvedTheme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(()=>setMounted(true), [])
    // console.log(theme)
    // https://www.npmjs.com/package/next-themes

    return(<div>
        {mounted && 
        <button className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 cursor-pointer" onClick={()=>setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {resolvedTheme === "light" ? <i className="bi bi-moon-stars-fill"/> : <i className="bi bi-sun-fill"></i>}
        </button>}
    </div>
    )
}