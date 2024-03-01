"use client"

interface projectsInterface {
    title: string,
    github: string,
    link: string,
    description: string,
    icons: string,
    date: string,
    imageURL: string
}

import { motion } from "framer-motion"
import Image from "next/image"

const cardVariants= {
    offscreen: {
        y: 300,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.8
        }
    }
};

export default function HomeProject (item:projectsInterface) {
    return(
    <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1, delay: 2,}}
    className="my-8 ">
        <motion.div 
            variants={cardVariants}
            className="flex flex-col">
            <div>
                <Image className="w-full rounded-lg" src={item.imageURL} height={1000} width={1000} alt={item.title}/>
            </div>
        <div className="flex flex-col">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold my-2 dark:text-[#816bee] text-[#4e38bb]">{item.title}</h1>
                <div className="my-2">
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github text-2xl mr-4 transition ease-in-out duration-75 hover:cursor-pointer hover:text-[#4e38bb] hover:dark:text-[#816bee]"/> 
                    </a>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-box-arrow-up-right text-2xl transition ease-in-out duration-75 hover:cursor-pointer hover:text-[#4e38bb] hover:dark:text-[#816bee]"/>
                    </a>
                </div>
            </div>
            <div className="mb-5">
                {item.description}
            </div>
        </div>
        </motion.div>
    </motion.div>
    )
}