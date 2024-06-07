"use client"
import { useCallback, useState } from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'

interface projectsInterface {
    title: string,
    github: string,
    link: string,
    description: string,
    icons: string,
    date: string,
    // imageURL: string,
    images: string[],
    youtube: string
}

const imageAnimation = {
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


export default function Project (item:projectsInterface) {
    let { title, github, description, icons, link, date, images, youtube } = item

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [toggle, setToggle] = useState<boolean>(false)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const handleClick = () => {
        setToggle(toggle => !toggle);
    };

    return(
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 2,}}
        className="">
        <motion.div
        variants={cardVariants}
        className="px-2 lg:px-5 lg:my-7 my-5">
            {toggle ? 
                <div>
                    {title === "Virtual Stock Market" ? 
                        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/6G4JvInHZJo?si=D510ZagGfHanOOJv" 
                        title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
                    :
                        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/nBAyO8lnm04?si=gQ2l67q8Qjli5GXS" 
                        title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    }
                </div>
                :
                <div className="embla overflow-hidden rounded-lg cursor-grab">
                    <div className="embla__viewport relative" ref={emblaRef}>
                        <div className="embla__container flex w-full">
                            {images.map((img,index) => (
                                <img src={img} className="w-max embla__slide" alt={title} key={index}/>
                            ))}
                        </div>

                        <div className=" absolute top-0 left-0 right-0 bottom-0 align-middle">
                            <div className="flex justify-between h-full">
                                <div className="bg-gray-500 dark:bg-gray-500 h-1/3 my-auto bg-opacity-20 dark:bg-opacity-20 dark:hover:bg-opacity-60 hover:bg-opacity-60 rounded-tr-lg rounded-br-lg">
                                    <button className="embla__prev h-full text-white" onClick={scrollPrev}>
                                        <i className="bi bi-chevron-left text-3xl "></i>
                                    </button>
                                </div>
                                <div className="bg-gray-500 dark:bg-gray-500 h-1/3 my-auto bg-opacity-20 dark:bg-opacity-20 dark:hover:bg-opacity-60 hover:bg-opacity-60 rounded-tl-lg rounded-bl-lg">
                                    <button className="embla__prev h-full text-white" onClick={scrollNext}>
                                        <i className="bi bi-chevron-right text-3xl "></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }


                <div className="flex my-2 justify-between flex-col lg:flex-row md:flex-row">
                    <h3 className="text-3xl font-bold lg:tracking-wider md:tracking-wider text-gray-900 dark:text-gray-100 my-auto lg:basis-3/4">{title}</h3>
                    <h5 className="my-auto font-semibold text-[#1A1A1A] dark:text-[#EBEBEB] lg:basis-1/4 lg:text-right">{date}</h5>
                </div>

                <div className="flex justify-between my-2 flex-col lg:flex-row md:flex-row lg:basis-4/5">
                    <div className="my-auto dark:text-[#816bee] text-[#4e38bb] font-semibold">
                        <p className="align-middle hover:align-top">{icons}</p>
                    </div>

                    <div className="my-2 lg:my-auto lg:basis-1/5 lg:text-right">
                        {youtube &&
                            <i onClick={handleClick} className={`bi bi-images ${toggle ? "bi-images" : "bi-play-btn-fill"} text-2xl mr-4 transition ease-in-out duration-75 hover:cursor-pointer hover:text-[#4e38bb] hover:dark:text-[#816bee]`}/> 
                        }
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github text-2xl mr-4 transition ease-in-out duration-75 hover:cursor-pointer hover:text-[#4e38bb] hover:dark:text-[#816bee]"/> 
                        </a>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-box-arrow-up-right text-2xl transition ease-in-out duration-75 hover:cursor-pointer hover:text-[#4e38bb] hover:dark:text-[#816bee]"/>
                        </a>
                    </div>
                </div>
                <div>
                    <p className="basis-3/5 text-[#1A1A1A] dark:text-[#EBEBEB]">{description}</p>
                </div>
        </motion.div>
    </motion.div>
    )
}
