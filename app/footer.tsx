import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-6 mt-12 text-neutral-500 font-semibold sm:px-6 xl:px-0 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
            <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm">&copy; {new Date().getFullYear()} Ulukbek Mambetov</p>

                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="mailto:ulukbekmambetov@gmail.com" className="hover:text-[#4e38bb] hover:dark:text-[#816bee] transition-colors my-auto" >
                        <i className="bi bi-envelope-fill px-1 text-md"/> Email
                    </Link>
                    <Link href="https://github.com/UlukbekM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#4e38bb] hover:dark:text-[#816bee] transition-colors my-auto" >
                        <i className="bi bi-github px-1 text-md"/>GitHub
                    </Link>
                    <Link href="https://linkedin.com/in/ulukbekm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#4e38bb] hover:dark:text-[#816bee] transition-colors" >
                        <i className="bi bi-linkedin px-1 text-md"/>LinkedIn
                    </Link>
                </div>
            </div>
                
            <div className="mt-4 text-center text-sm ">
                Built with <Link className="underline hover:text-[#4e38bb] hover:dark:text-[#816bee] transition-colors" href={"https://nextjs.org/"}>Next.js</Link>, 
                <Link className="underline hover:text-[#4e38bb] hover:dark:text-[#816bee] pl-1 transition-colors" href={"https://www.typescriptlang.org/"}>TypeScript</Link>, and 
                <Link className="underline hover:text-[#4e38bb] hover:dark:text-[#816bee] pl-1 transition-colors" href={"https://tailwindcss.com/"}>TailwindCSS</Link>
            </div>
        </footer>
    );
}
