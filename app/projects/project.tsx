// import Image from "next/image"
"use client"
import { useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'
// import BubbleSort from "../ProjectContainer/bubble-sort.gif"

interface projectsInterface {
    title: string,
    github: string,
    link: string,
    description: string,
    icons: string,
    date: string,
    imageURL: string,
    images: string[],
    // gifs: boolean
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
    let { title, github, description, icons, link, date, imageURL, images } = item
    // https://www.embla-carousel.com/get-started/react/
    // if(gifs)console.log(gifs)

    // if(images.length === 0) {
    //     console.log('no images for ' + title)
    // }

    // console.log(title + images)

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return(
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 2,}}
        className="">

        <motion.div
        // variants={variants}
        // initial="hidden"
        // animate="show"
        variants={cardVariants}
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // lg:w-1/2
        className="px-2 lg:px-5 lg:my-7 my-5">
            {/* // <div className="px-2 my-5 lg:px-5 lg:my-7 lg:w-1/2"> */}
                <div className="embla overflow-hidden rounded-lg cursor-grab">
                    <div className="embla__viewport relative" ref={emblaRef}>
                        <div className="embla__container flex">
                            {images.map((img,index) => (
                                <img src={img} className="w-max embla__slide" alt={title} key={index}/>
                            ))}
                        </div>

                        {/* {gifs ?
                            <div className="embla__container flex">
                                <img src="https://i.imgur.com/VegvgPO.png" className="w-max embla__slide" alt={title}/>
                                <img src={"/insertion-sort.gif"} className="w-max embla__slide" alt={"insertion sort"}/>
                                <img src={"/bubble-sort.gif"} className="w-max embla__slide" alt={"bubble sort"}/>
                                <img src={"/selection-sort.gif"} className="w-max embla__slide" alt={"selection sort"}/>
                                <img src={"/shell-sort.gif"} className="w-max embla__slide" alt={"shell sort"}/>
                                <img src={"/merge-sort.gif"} className="w-max embla__slide" alt={"merge sort"}/>
                                <img src={"/heap-sort.gif"} className="w-max embla__slide" alt={"heap sort"}/>
                                <img src={"/quick-sort.gif"} className="w-max embla__slide" alt={"quick sort"}/>
                            </div>
                            :
                            <div className="embla__container flex">
                                {images.map((img) => (
                                    <img src={img} className="w-max embla__slide" alt={title}/>
                                ))}
                            </div>
                        } */}
                        
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

                <div className="flex my-2 justify-between flex-col lg:flex-row md:flex-row">
                    <h3 className="text-3xl font-bold lg:tracking-wider md:tracking-wider text-gray-900 dark:text-gray-100 my-auto lg:basis-3/4">{title}</h3>
                    <h5 className="my-auto text-[#1A1A1A] dark:text-[#EBEBEB] lg:basis-1/4 lg:text-right">{date}</h5>
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
{/* text-slate-500 dark:text-slate-400  */}
                <div>
                    <p className="basis-3/5 text-[#1A1A1A] dark:text-[#EBEBEB]">{description}</p>
                </div>
        </motion.div>
    </motion.div>
    )
}
