"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import Link from "next/link"
import { url } from "inspector";
import { projectsList } from "./ProjectContainer/projectsList";
import HomeProject from "./HomeProject";
import Project from "./projects/project";

const typingContainer = {
    hidden: {
        opacity: 0,
    }, 
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.025,
            ease: 'easeInOut'
        }
    }
}

const typingContainer2nd = {
    hidden: {
        opacity: 0
    }, 
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 1.0,
            staggerChildren: 0.025,
            ease: 'easeInOut',
        }
    }
}

const typingText = {
    hidden: {
        opacity: 0,
        y: '-20px',
    }, 
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeInOut'
        }
    }
}

export default function Home() {
    // https://aitdahmane.com/
    // https://hanna.framer.website/
    // https://developertemplate.webflow.io/home
    // https://arcade.la/
    // const {resolvedTheme, setTheme} = useTheme()
    // const [mounted, setMounted] = useState(false)
    // useEffect(()=>setMounted(true), [])
    // console.log(projectsList)
    return (<div>
        {/* <motion.div     
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.5 }}>
            <div className="px-5 py-12">
                <h1 className="font-bold text-4xl md:text-7xl my-3">Hi, I'm Ulukbek!</h1>
                <h1 className="font-bold text-4xl md:text-7xl my-3">A Web Developer.</h1>
                <p className="text-xl md:text-3xl my-3 font-thin">I build things on the web.</p>
            </div>
        </motion.div> */}
        {/* <motion.h1 className="text-2xl" variants={typingContainer} initial="hidden" animate="show">
            {
            Array.from("Ulukbek Mambetov").map((word,i) => (
                <motion.span key={i} variants={typingText}>{word}</motion.span>
            ))}
        </motion.h1> */}
        <div className="py-2 md:py-12 min-h-screen">
            <motion.h1 className="font-bold text-3xl md:text-5xl my-3" variants={typingContainer} initial="hidden" animate="show">
                {
                    Array.from("Hey there, ").map((word,i) => (
                        <motion.span key={i} variants={typingText}>{word}</motion.span>
                ))}
                {
                    Array.from("I'm ").map((word,i) => (
                        <motion.span key={i} variants={typingText}>{word}</motion.span>
                ))}
                {
                    Array.from("Ulukbek Mambetov").map((word,i) => (
                        <motion.span key={i} variants={typingText} className="dark:text-[#816bee] text-[#4e38bb]">{word}</motion.span>
                ))}
                {
                    Array.from("!").map((word,i) => (
                        <motion.span key={i} variants={typingText}>{word}</motion.span>
                ))}
                
            </motion.h1>
            <motion.h1 className="font-bold text-3xl md:text-5xl my-3" variants={typingContainer2nd} initial="hidden" animate="show">
                {
                    Array.from("I'm a web developer based in NYC.").map((word,i) => (
                        <motion.span key={i} variants={typingText}>{word}</motion.span>
                ))}
            </motion.h1>
            {/* <motion.h1 className="text-xl md:text-3xl my-3 font-thin" variants={typingContainer2nd} initial="hidden" animate="show">
                {
                    Array.from("I build things on the web.").map((word,i) => (
                        <motion.span key={i} variants={typingText}>{word}</motion.span>
                ))}
            </motion.h1> */}
            <motion.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.4, delay: 2 }}
            className="my-7 text-xl">
                Hello! 👋 I'm a dedicated web developer specializing in full-stack development. 
                With expertise in React, Next.js, Tailwind, and TypeScript, 
                I strive to deliver impactful and innovative solutions to exciting projects.
            </motion.div>
            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.4, delay: 2 }}
            className="flex justify-center md:justify-end">
                <Link href="/about">
                    <button className="py-3 px-5 text-white bg-[#6246ea] hover:bg-[#583fd3] rounded-lg focus:ring-4 focus:outline-none">About Me <i className="bi bi-arrow-right"></i></button>
                </Link>
            </motion.div>
            
            {/* <motion.div         
            animate={{
            y: ["100%", "-100%"],
            backgroundColor: ["#ff6699", "#6666ff"],
            }}
            transition={bounceTransition}
            // initial={{ opacity: 0}}
            // animate={{ opacity: 1}}
            // transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 5 }}
            >
                <i className="bi bi-arrow-down text-3xl"></i>
            </motion.div> */}


            {/* <motion.div
            animate={{y:[50,100], opacity:[0,1]}}
            transition={{ duration: 2,repeat: Infinity, repeatDelay: 3}}>
                <i className="bi bi-arrow-down text-5xl"></i>
            </motion.div> */}
            {/* <img className="" src="https://cdn.dribbble.com/users/1787323/screenshots/4004155/media/7088d4636d42b502d6e696d16d98258f.png?compress=1&resize=800x600&vertical=center"/> */}
        
        
            <div className="mt-20">
                <motion.h1
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.6,delay: 2.5}}
            className="text-3xl">Some of my work:</motion.h1>
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.6,delay: 2.5}} 
                className="">
                    {/* <HomeProject key="not-twitter-home" {...projectsList[0]}/>
                    <HomeProject key="guessify-home" {...projectsList[2]}/>
                    <HomeProject key="movie-buddy-home" {...projectsList[3]}/> */}
                    <Project key="not-twitter-home" {...projectsList[0]}/>
                    <Project key="guessify-home" {...projectsList[2]}/>
                    <Project key="movie-buddy-home" {...projectsList[3]}/>
                </motion.div>
                <div className="w-full grid place-items-center">
                    <Link href="/projects">
                        <button className="py-3 px-5 text-white bg-[#6246ea] hover:bg-[#583fd3] rounded-lg focus:ring-4 focus:outline-none my-auto">View More <i className="bi bi-arrow-right"></i></button>
                    </Link>
                </div>
            </div>
        </div>

        {/*<div className="-mt-24 h-80 absolute left-0 right-0">
            {mounted && resolvedTheme === "light" ? 
                <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
                    <defs>
                        <pattern id='a' patternUnits='userSpaceOnUse' width='40' height='69.282' patternTransform='scale(2) rotate(5)'>
                            <rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 1)'/>
                            <path d='M13.333-3.849v23.094M6.667-15.396l20 11.547M13.333-19.245l20 11.547M20 0v23.094m20-34.641l-6.667 3.849-6.666 3.849L20 0M0-11.547l6.667 3.849 6.666 3.849L20 0m0-23.094l20 11.547v23.094L20 23.094l-6.667-3.849-6.666-3.849L0 11.547v-23.094l6.667-3.849 6.666-3.849zM40-3.769L20 7.698m20-3.849l-16.253 9.384L20 15.396M6.667-7.698v23.094m6.666 50.037v23.094M6.667 53.886l20 11.547M13.333 50.037l20 11.547M20 69.282v23.094m20-34.641l-6.667 3.849-6.666 3.849L20 69.282M0 57.735l6.667 3.849 6.666 3.849L20 69.282m0-23.094l20 11.547v23.094L20 92.376l-6.667-3.849-6.666-3.849L0 80.829V57.735l6.667-3.849 6.666-3.849zm20 19.325L20 76.98m20-3.849L20 84.678M6.667 61.584v23.094m26.666-53.886v23.094m-6.666-34.641l20 11.547M33.333 15.396l20 11.547M40 34.641v23.094m20-34.641l-6.667 3.849-6.666 3.849L40 34.641M20 23.094l6.667 3.849 6.666 3.849L40 34.641m0-23.094l20 11.547v23.094L40 57.735l-6.667-3.849-6.666-3.849L20 46.188V23.094l6.667-3.849 6.666-3.849zm20 19.325L40 42.339m20-3.849L40 50.037M26.667 26.943v23.094M-6.667 30.792v23.094m-6.666-34.641l20 11.547M-6.667 15.396l20 11.547M0 34.641v23.094m20-34.641l-6.667 3.849-6.666 3.849L0 34.641m-20-11.547l6.667 3.849 6.666 3.849L0 34.641m0-23.094l20 11.547v23.094L0 57.735l-6.667-3.849-6.666-3.849L-20 46.188V23.094l6.667-3.849 6.666-3.849zm20 19.325L0 42.339m20-3.849L0 50.037m-13.333-23.094v23.094'  strokeWidth='3' stroke='hsla(250, 80%, 60%, 1)' fill='none'/>
                        </pattern>
                    </defs>
                    <rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/>
                </svg>
                :
                <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
                    <defs>
                        <pattern id='a' patternUnits='userSpaceOnUse' width='40' height='69.282' patternTransform='scale(2) rotate(5)'>
                            <rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 0%, 1)'/>
                            <path d='M13.333-3.849v23.094M6.667-15.396l20 11.547M13.333-19.245l20 11.547M20 0v23.094m20-34.641l-6.667 3.849-6.666 3.849L20 0M0-11.547l6.667 3.849 6.666 3.849L20 0m0-23.094l20 11.547v23.094L20 23.094l-6.667-3.849-6.666-3.849L0 11.547v-23.094l6.667-3.849 6.666-3.849zM40-3.769L20 7.698m20-3.849l-16.253 9.384L20 15.396M6.667-7.698v23.094m6.666 50.037v23.094M6.667 53.886l20 11.547M13.333 50.037l20 11.547M20 69.282v23.094m20-34.641l-6.667 3.849-6.666 3.849L20 69.282M0 57.735l6.667 3.849 6.666 3.849L20 69.282m0-23.094l20 11.547v23.094L20 92.376l-6.667-3.849-6.666-3.849L0 80.829V57.735l6.667-3.849 6.666-3.849zm20 19.325L20 76.98m20-3.849L20 84.678M6.667 61.584v23.094m26.666-53.886v23.094m-6.666-34.641l20 11.547M33.333 15.396l20 11.547M40 34.641v23.094m20-34.641l-6.667 3.849-6.666 3.849L40 34.641M20 23.094l6.667 3.849 6.666 3.849L40 34.641m0-23.094l20 11.547v23.094L40 57.735l-6.667-3.849-6.666-3.849L20 46.188V23.094l6.667-3.849 6.666-3.849zm20 19.325L40 42.339m20-3.849L40 50.037M26.667 26.943v23.094M-6.667 30.792v23.094m-6.666-34.641l20 11.547M-6.667 15.396l20 11.547M0 34.641v23.094m20-34.641l-6.667 3.849-6.666 3.849L0 34.641m-20-11.547l6.667 3.849 6.666 3.849L0 34.641m0-23.094l20 11.547v23.094L0 57.735l-6.667-3.849-6.666-3.849L-20 46.188V23.094l6.667-3.849 6.666-3.849zm20 19.325L0 42.339m20-3.849L0 50.037m-13.333-23.094v23.094'  strokeWidth='3' stroke='hsla(250, 80%, 60%, 1)' fill='none'/>
                        </pattern>
                    </defs>
                    <rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/>
                </svg>
                } 
        </div>*/}

        {/* <div className="h-80"></div> */}

        
    </div>
    )
}
