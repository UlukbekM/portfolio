"use client"
import { motion} from "framer-motion"
import { LanguageList, FrameworksLibrariesList, ToolsList } from "./Icons";
import SkillIcon from "./SkillIcon";

export default function About () {
    return(
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.4 }}
    className="">
        <h1 className="text-4xl my-5">About Me</h1>

        <div className="my-5 ">
        Hello there! My name is Ulukbek Mambetov, and I'm a passionate software engineer with a focus on web development. 
        I began my journey as a frontend developer using React, but eventually expanded my skill set to become be capable of frontend and backend development. 
        My current tech stack revolves around Next.js, TypeScript, and TailwindCSS, with additional tools tailored to the needs of each project. 
        But I am always learning new technologies in order to be able to create great products.
        </div>

        <div className="my-5 ">
        I am always working on side projects where I learn new technologies and improve on my work. 
        When I'm not busy coding you can find me at the gym staying physically active. 
        In my free time, I enjoy playing video games with friends. 
        Using my skills and experience, I am actively seeking a software engineering position to 
        join a team of bright minded individuals in order to contribute to exciting and meaningful projects. 
        Feel free to reach out to me via email!
        </div>

        <div className="my-5">
            <div>
                <h1 className="font-medium text-lg">Languages:</h1>
                <div className="flex flex-wrap">
                    {LanguageList.map((icon) => (
                        <SkillIcon key={icon.name} {...icon}/>
                    ))}
                </div>
            </div>

            <div>
                <h1 className="font-medium text-lg">Frameworks & Libraries:</h1>
                <div className="flex flex-wrap">
                    {FrameworksLibrariesList.map((icon) => (
                        <SkillIcon key={icon.name} {...icon}/>
                    ))}
                </div>
            </div>

            <div>
                <h1 className="font-medium text-lg">Tools:</h1>
                <div className="flex flex-wrap">
                    {ToolsList.map((icon) => (
                        <SkillIcon key={icon.name} {...icon}/>
                    ))}
                </div>
            </div>
        </div>

        <div className="mb-5"> 
            <div className="flex flex-wrap flex-col md:flex-row justify-between ">
                <div className="py-2 mb-3">
                    <i className="bi bi-geo-alt-fill px-2 text-xl"/>
                    <span className="pr-2">Location: New York, NY</span>
                </div>

                <a className="py-2 relative group mb-3 cursor-pointer hover:text-white" href="/Ulukbek Mambetov Resume.pdf" target='_blank'>
                    <i className="bi bi-file-earmark-person-fill px-2 text-xl "/>
                    <span className="pr-2">Resume</span>
                    <span className="absolute left-0 -bottom-0 w-full h-[2px] bg-[#6246ea] -z-10 group-hover:h-full group-hover:transition-all ease-in-out duration-200"></span>
                </a>
            </div>

            <div className="flex flex-wrap justify-between flex-col md:flex-row">
                <a className="py-2 relative group mb-3 cursor-pointer hover:text-white" href="mailto:ulukbekmambetov@gmail.com">
                    <i className="bi bi-envelope-fill px-2 text-xl"/>
                    <span className="pr-2 ">Email: ulukbekmambetov@gmail.com</span>
                    <span className="absolute left-0 -bottom-0 w-full h-[2px] bg-[#6246ea] -z-10 group-hover:h-full group-hover:transition-all ease-in-out duration-200"></span>
                </a>

                <a target="_blank" rel="noopener noreferrer" className="py-2 relative group mb-3 cursor-pointer hover:text-white" href="https://github.com/UlukbekM">
                    <i className="bi bi-github px-2 text-xl"/>
                    <span className="pr-2">GitHub: UlukbekM</span>
                    <span className="absolute left-0 -bottom-0 w-full h-[2px] bg-[#6246ea] -z-10 group-hover:h-full group-hover:transition-all ease-in-out duration-200"></span>
                </a>
            </div>
        </div>
    </motion.div>)
}