// import ResumeButton from "./ResumeButton"
"use client"
import { motion} from "framer-motion"

export default function About () {

    const openResume = () => {
        window.open("/Ulukbek Mambetov Resume.pdf", '_blank');
    }
    const sendMessage = () => {
        window.open(`mailto:ulukbekmambetov@gmail.com`);
    }

    return(
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.4 }}
    className="">
        <h1 className="text-4xl my-5">About Me</h1>

        <div className="my-5 ">
        Hello there! My name is Ulukbek Mambetov, and I'm a passionate web developer with a focus on full-stack development. 
        I began my journey as a frontend developer specializing in React, but eventually expanded my skill set to become a full-stack web developer. 
        My current tech stack revolves around Next.js, React, Tailwind, and TypeScript, with additional tools tailored to the needs of each project.
        </div>

        <div className="my-5 ">
        When I'm not busy coding, you can find me at the gym, staying active and fueling my creativity. I also love working on side projects, where I can experiment, learn, and improve my kit. 
        And of course, I enjoy playing video games with friends. Using my skills and experience, I am actively seeking a web development position to contribute to exciting and meaningful projects. 
        Interested parties can reach out to me via email to discuss potential opportunities.
        </div>

        <div className="flex flex-wrap flex-col md:flex-row justify-between ">
            <div className="py-2 mb-3">
                <i className="bi bi-geo-alt-fill px-2 text-xl"/>
                <span className="pr-2">Location: New York, NY</span>
            </div>

            <div className="py-2 relative group mb-3 cursor-pointer hover:text-white" onClick={openResume}>
                <i className="bi bi-file-earmark-person-fill px-2 text-xl "/>
                <span className="pr-2">Resume</span>
                <span className="absolute left-0 -bottom-0 w-full h-[2px] bg-[#6246ea] -z-10 group-hover:h-full group-hover:transition-all ease-in-out duration-200"></span>
            </div>
        </div>

        <div className="flex flex-wrap justify-between flex-col md:flex-row">
            <div className="py-2 relative group mb-3 cursor-pointer hover:text-white" onClick={sendMessage}>
                <i className="bi bi-envelope-fill px-2 text-xl"/>
                <span className="pr-2 ">Email: ulukbekmambetov@gmail.com</span>
                <span className="absolute left-0 -bottom-0 w-full h-[2px] bg-[#6246ea] -z-10 group-hover:h-full group-hover:transition-all ease-in-out duration-200"></span>
            </div>

            <a target="_blank" rel="noopener noreferrer" className="transition ease-in-out duration-75 hover:cursor-pointer " href="https://github.com/UlukbekM">
                <div className="py-2 relative group mb-3 cursor-pointer hover:text-white">
                    <i className="bi bi-github px-2 text-xl"/>
                    <span className="pr-2">GitHub: UlukbekM</span>
                    <span className="absolute left-0 -bottom-0 w-full h-[2px] bg-[#6246ea] -z-10 group-hover:h-full group-hover:transition-all ease-in-out duration-200"></span>
                </div>
            </a>
        </div>
    </motion.div>)
}