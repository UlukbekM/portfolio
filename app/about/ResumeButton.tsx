"use client"

export default function ResumeButton () {

    const openResume = () => {
        window.open("/Ulukbek Mambetov Resume.pdf", '_blank');
    }

    return(
        <button onClick={openResume} className=" hover:text-[#6246ea] dark:hover:text-[#6246ea] hover:border-[#6246ea] dark:hover:border-[#6246ea] transition ease-in-out duration-75 border-2 px-3 py-1 rounded-lg border-gray-600 dark:border-gray-300 text-gray-600 dark:text-gray-300">
            <i className="bi bi-filetype-pdf text-2xl"/> View Resume
        </button>
    )
}