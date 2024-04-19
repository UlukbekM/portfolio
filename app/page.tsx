"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { projectsList } from "./ProjectContainer/projectsList";
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
    return (
        <div className="md:py-12 min-h-screen">
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


            <motion.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.4, delay: 2 }}
            className="my-7 text-xl">
                Hi there! 👋 I'm a web developer who's passionate about building awesome stuff. I'm experienced with React, Next.js, Tailwind CSS, and TypeScript, and I'm always learning new tools to stay ahead of the curve. Let's work together to make something amazing!
            </motion.div>
            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.4, delay: 2 }}
            className="flex justify-center md:justify-end">
                <Link href="/about">
                    <button className="py-3 px-5 text-white bg-[#6246ea] hover:bg-[#583fd3] rounded-lg focus:ring-4 focus:outline-none group">
                        About Me  
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        &nbsp;<i className="bi bi-arrow-right"></i>
                        </span>
                    </button>
                </Link>
            </motion.div>

        
            <div className="mt-10 md:mt-20">
                <motion.h1
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.6,delay: 2.5}}
                className="text-3xl">
                    Some of my work:
                </motion.h1>
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.6,delay: 2.5}} 
                className="">
                    {projectsList.slice(0, 3).map((project) => (
                        <Project key={project.title} {...project} />
                    ))}
                </motion.div>
                
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.6,delay: 2.5}} 
                className="w-full grid place-items-center pb-5">
                    <Link href="/projects">
                        <button className="py-3 px-5 text-white bg-[#6246ea] hover:bg-[#583fd3] rounded-lg focus:ring-4 focus:outline-none my-auto group">
                            View More 
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            &nbsp;<i className="bi bi-arrow-right"></i>
                            </span>
                            </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}