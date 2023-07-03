// import Image from "next/image"
"use client"
import { motion } from "framer-motion"

interface projectsInterface {
    title: string,
    github: string,
    link: string,
    description: string,
    icons: string,
    date: string,
    imageURL: string
}

const images = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

export default function Project (item:projectsInterface) {
    let { title, github, description, icons, link, date, imageURL } = item
    // https://www.embla-carousel.com/get-started/react/
    // console.log(item)
    return(
    // <div className="h-auto my-10 flex rounded-lg">
    //     <div className={`basis-3/12 flex justify-center`}>
    //         <img src="https://i.scdn.co/image/ab6775700000ee85b5f7bdca87c058e4fb4415a7" className="rounded-md aspect-video"/>
    //     </div>

    //     <div className="basis-9/12 py-2 px-3 flex flex-col rows-3">
    //         <div className="basis-1/5 flex justify-between">
    //             <h3 className="text-3xl font-bold tracking-wider text-gray-900 dark:text-gray-100 my-auto">{title}</h3>
    //             <h5 className="my-auto text-slate-400">{date}</h5>
    //         </div>

    //         <div className="basis-1/5 flex justify-between">
    //             <div className="my-auto text-[#6246ea]">
    //                 <p className="align-middle hover:align-top">{icons}</p>
    //             </div>

    //             <div className="my-auto">
    //                 <a href={github} target="_blank" rel="noopener noreferrer">
    //                     <i className="bi bi-github text-2xl mr-4 transition ease-in-out duration-75 hover:cursor-pointer hover:text-[#6246ea]"/> 
    //                 </a>
    //                 <a href={link} target="_blank" rel="noopener noreferrer">
    //                     <i className="bi bi-box-arrow-up-right text-2xl transition ease-in-out duration-75 hover:cursor-pointer hover:text-[#6246ea]"/>
    //                 </a>
    //             </div>
    //         </div>

    //         <p className="basis-3/5 text-slate-400">{description}</p>
    //     </div>
    // </div>
    <motion.div
    // variants={variants}
    // initial="hidden"
    // animate="show"
    variants={images}
    // initial={{ opacity: 0, y: 100 }}
    // whileInView={{ opacity: 1, y: 0 }}
    // viewport={{ once: true }}
    className="px-2 my-5 lg:px-5 lg:my-7 lg:w-1/2">
        {/* // <div className="px-2 my-5 lg:px-5 lg:my-7 lg:w-1/2"> */}
            <div>
                <img src={imageURL} className="rounded-md w-full"/>
            </div>

            <div className="flex my-2 justify-between flex-col lg:flex-row md:flex-row">
                <h3 className="text-3xl font-bold lg:tracking-wider md:tracking-wider text-gray-900 dark:text-gray-100 my-auto lg:basis-3/4">{title}</h3>
                <h5 className="my-auto text-slate-500 dark:text-slate-400 lg:basis-1/4 lg:text-right">{date}</h5>
            </div>

            <div className="flex justify-between my-2 flex-col lg:flex-row md:flex-row lg:basis-4/5">
                <div className="my-auto dark:text-[#816bee] text-[#4e38bb]">
                    <p className="align-middle hover:align-top">{icons}</p>
                </div>

                <div className="my-2 lg:my-auto lg:basis-1/5 lg:text-right">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github text-2xl mr-4 transition ease-in-out duration-75 hover:cursor-pointer hover:text-[#4e38bb] hover:dark:text-[#816bee]"/> 
                    </a>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-box-arrow-up-right text-2xl transition ease-in-out duration-75 hover:cursor-pointer hover:text-[#4e38bb] hover:dark:text-[#816bee]"/>
                    </a>
                </div>
            </div>

            <div>
                <p className="basis-3/5 text-slate-500 dark:text-slate-400">{description}</p>
            </div>
        {/* // </div> */}
    </motion.div>
    )
}
