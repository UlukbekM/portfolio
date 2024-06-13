import './globals.css'
import { Inter } from 'next/font/google'
import { Prompt } from 'next/font/google'
import Header from './Header/header'
import { Providers } from './Providers'
import { Analytics } from '@vercel/analytics/react';
import Footer from './footer'
import { GoogleAnalytics } from '@next/third-parties/google'
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
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
            </head>
            <GoogleAnalytics gaId="G-BCCGF6X130" />

            <body className={`${prompt.className} overflow-y-scroll` }>
                <Providers>
                    <Header/>
                    <div className="mt-28 mx-auto px-5 sm:px-6 xl:px-0 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-gradient-to-tl">
                        {children}
                    </div>
                    {/* <Footer/> */}
                </Providers>
                <Analytics />
            </body>
        </html>
    )
}
