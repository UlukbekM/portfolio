import './globals.css'
import { Inter } from 'next/font/google'
import { Prompt } from 'next/font/google'
import Header from './Header/header'
import { Providers } from './Providers'
import { Analytics } from '@vercel/analytics/react';

// https://tailwind-nextjs-starter-blog.vercel.app/blog

const inter = Inter({ subsets: ['latin'] })
const prompt = Prompt ({
    weight: ['400', '700'],
    subsets: ["latin"],
    variable: "--font-prompt"
})

export const metadata = {
    title: 'Ulukbek Mambetov',
    description: "Ulukbek Mambetov's Portfolio",
}

export default function RootLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <html lang="en">
            <head>
                {/* <link rel="icon" href="/UM.png" /> */}
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
            </head>
            <body className={`${prompt.className} mx-auto px-5 sm:px-6 xl:px-0 overflow-y-scroll max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-gradient-to-tl` }>
                <Providers>
                    <Header/>
                    <div className="mt-28">
                        {children}
                    </div>
                </Providers>
                <Analytics />
            </body>
        </html>
    )
}
