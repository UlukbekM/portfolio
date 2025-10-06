"use client"
import { motion} from "framer-motion"
import { LanguageList, FrameworksLibrariesList, ToolsList } from "./Icons";
import SkillIcon from "./SkillIcon";
import { sendGAEvent } from '@next/third-parties/google'

export default function About () {
    return(
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.4 }}
    className="">
        <h1 className="text-4xl my-5">About Me</h1>

        <div className="my-5 ">
        Hello! My name is Ulukbek Mambetov, and I'm a Master's student in Computer Science with a passion for software development and full-stack web development.
        I am capable of both frontend and backend development, with flexibility to work across the full stack. My current tech stack includes Next.js, TypeScript, and TailwindCSS, along with experience using frameworks, databases, and tools tailored to each individual project's needs.
        </div>

        <div className="my-5 ">
I'm actively seeking a software engineering opportunity where I can apply my skills, collaborate with a team of bright-minded individuals, and contribute to meaningful projects.
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

            {/* <div>
                <h1 className="font-medium text-lg">Tools:</h1>
                <div className="flex flex-wrap">
                    {ToolsList.map((icon) => (
                        <SkillIcon key={icon.name} {...icon}/>
                    ))}
                </div>
            </div> */}
        </div>

        <div className="mb-5"> 
            <div className="flex flex-wrap flex-col md:flex-row justify-between ">
                <div className="py-2 mb-3">
                    <i className="bi bi-geo-alt-fill px-2 text-xl"/>
                    <span className="pr-2">Location: New York, NY</span>
                </div>

                <a className="py-2 relative group mb-3 cursor-pointer hover:text-white" href="/Ulukbek Mambetov Resume.pdf" target='_blank'  onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'Resume Clicked' })}>
                    <i className="bi bi-file-earmark-person-fill px-2 text-xl "/>
                    <span className="pr-2">Resume</span>
                    <span className="absolute left-0 -bottom-0 w-full h-[2px] bg-[#6246ea] -z-10 group-hover:h-full group-hover:transition-all ease-in-out duration-200"></span>
                </a>
            </div>

            <div className="flex flex-wrap justify-between flex-col md:flex-row">
                <a className="py-2 relative group mb-3 cursor-pointer hover:text-white" href="mailto:ulukbekmambetov@gmail.com" onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'Email Clicked' })}>
                    <i className="bi bi-envelope-fill px-2 text-xl"/>
                    <span className="pr-2 ">Email: ulukbekmambetov@gmail.com</span>
                    <span className="absolute left-0 -bottom-0 w-full h-[2px] bg-[#6246ea] -z-10 group-hover:h-full group-hover:transition-all ease-in-out duration-200"></span>
                </a>

                <a target="_blank" rel="noopener noreferrer" className="py-2 relative group mb-3 cursor-pointer hover:text-white" href="https://github.com/UlukbekM" onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'GitHub Clicked' })}>
                    <i className="bi bi-github px-2 text-xl"/>
                    <span className="pr-2">GitHub: UlukbekM</span>
                    <span className="absolute left-0 -bottom-0 w-full h-[2px] bg-[#6246ea] -z-10 group-hover:h-full group-hover:transition-all ease-in-out duration-200"></span>
                </a>
            </div>
        </div>
    </motion.div>)
}