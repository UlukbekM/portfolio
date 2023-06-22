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
    // let array = [
    //     {
    //         title: "Not-Twitter",
    //         github: "https://github.com/UlukbekM/not-twitter",
    //         link: "https://not-twitter-ulu.vercel.app/",
    //         description: "Developed a full stack web application inspired by the popular social media platform Twitter, which includes user registration, authentication, and authorization features utilizing Node.js, Express.js, and JWT tokens.",
    //         icons: "MongoDB, Express.js, React, Node.js, AWS S3, Bootstrap",
    //         date: "May 2023",
    //         imageURL: "https://i.imgur.com/u1htKSF.png"
    //     },
    //     {
    //         title: "To Do List App",
    //         github: "https://github.com/UlukbekM/mern",
    //         link: "https://mernfront.vercel.app/",
    //         description: "Implemented a full stack application utilizing the MERN (MongoDB, Express.js, React, Node.js) stack, enabling users to create, edit, and manage their personal tasks, complete with due dates and status tracking.",
    //         icons: "MongoDB, Express.js, React, Node.js",
    //         date: "Nov. 2022",
    //         imageURL: "https://i.imgur.com/Clr3szE.png"
    //     },
    //     {
    //         title: "Guessify",
    //         github: "https://github.com/UlukbekM/guessify",
    //         link: "https://guessify-ulukbek.vercel.app/",
    //         description: "Created a Spotify web application using the Spotify Web API that features a 'Guess That Song' game where users can choose a playlist from the Spotify API and attempt to guess the title of each song by listening to a short audio preview, with a leaderboard tracking the highest-scoring users using AWS DynamoDB as the database",
    //         icons: "React, AWS DynamoDB, Spotify Web API",
    //         date: "Oct. 2022",
    //         imageURL: "https://i.imgur.com/WEgqhzh.png"
    //     },
    //     {
    //         title: "Movie Buddy",
    //         github: "https://github.com/emai2443/movie_buddy",
    //         link: "https://movie-buddy-zeta.vercel.app/",
    //         description: "Directed a team of four students throughout a semester-long project, establishing a clear roadmap with specific deadlines. Implemented the core features of the project's frontend, enabling users to browse popular movies, filter movies based on various criteria, and receive random movie suggestions. Utilized AWS Amplify and GraphQL, to allow users to favorite movies and store that data on the DynamoDB database, providing them with a personalized experience where they can easily favorite movies of their choice.",
    //         icons: "React, AWS Cognito, AWS Amplify, GraphQL, Material UI",
    //         date: "May 2022",
    //         imageURL: "https://i.imgur.com/Duk5tSa.png"
    //     },
    //     {
    //         title: "MTA Subway Stations and Entrances",
    //         github: "https://github.com/UlukbekM/mtaproject",
    //         link: "https://ulukbekm.github.io/mtaproject/",
    //         description: "Developed a comprehensive data visualization project, which involves showcasing over 450 NYC MTA Subway stations in NYC, along with nearly 2,000 Subway entrances. To accomplish this, I efficiently extracted and manipulated the required data from NYC Open Data's provided CSV files using SQL searches, ensuring it aligned with the project's specific requirements, creating a visually informative representation of the subway network.",
    //         icons: "Python, SQL",
    //         date: "Dec. 2021",
    //         imageURL: "https://i.imgur.com/f7pfYIu.png"
    //     }
    // ]

    return(<div>
            <h1 className="text-4xl">Projects</h1>
            <div className="container">
                {/* <div className="flex flex-wrap justify-center"> */}
                <motion.div
                variants={variants}
                initial="hidden"
                animate="show"
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