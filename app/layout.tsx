import './globals.css'
import { Inter, Prompt } from 'next/font/google'
import Header from './Header/header'
import { Providers } from './Providers'
import { Analytics } from '@vercel/analytics/react';
import Footer from './footer'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })
const prompt = Prompt({
    weight: ['400', '700'],
    subsets: ["latin"],
    variable: "--font-prompt"
})

export const metadata = {
    title: 'Ulukbek Mambetov',
    description: "Ulukbek Mambetov's Portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
            </head>
            <GoogleAnalytics gaId="G-4H10EQ1GVE" />

            <body className={`${prompt.className} flex flex-col min-h-screen items-center`}>
                <Providers>
                    <Header />
                    <main className="flex-grow mt-28 mx-auto px-5 sm:px-6 xl:px-0 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
                        {children}
                    </main>
                    <Footer />
                </Providers>
                <Analytics />
            </body>
        </html>
    )
}
