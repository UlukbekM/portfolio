"use client"
import Project from "./project"
import { motion} from "framer-motion"
import { projectsList } from "../ProjectContainer/projectsList";

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function Projects () {
    
    return(<div>
            <h1 className="text-4xl">Projects</h1>
            <div className="container  mb-10">
                {/* <div className="flex flex-wrap justify-center"> */}
                <motion.div
                // variants={variants}
                // initial="hidden"
                // animate="show"
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.6}} 
                className="flex flex-wrap justify-center">
                    {projectsList.map((project) => (
                    // <motion.div className="px-2 my-5 lg:px-5 lg:my-7 lg:w-1/2">
                        <Project key={project.title} {...project}/>
                    // </motion.div>
                    ))}
                    
                    {/* </div> */}
                </motion.div>
            </div>
    </div>)
}