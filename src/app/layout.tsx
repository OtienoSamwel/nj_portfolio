import './globals.css'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer"
import Script from 'next/script'
import { tsParticles } from "@tsparticles/engine";
import {particleConfig} from "@/app/particlesUtil";

export const metadata = {
    title: 'Samwel Otieno',
    description: 'Your reflections in me, fade indeed - Samwel Otieno.',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {

    tsParticles.load({
        id: "tsparticles",
        options: {particleConfig},
    });

    return (
        <html lang="en" className={"flex flex-col antialiased bg-black text-gray-200 justify-between h-fit"}>

        <div id="tsparticles"></div>

        <body id={"perticles-js"} className={"flex flex-col justify-between min-h-screen"}>
        <Header/>
        {children}
        <Footer/>
        </body>

        <Script src="tsparticles.engine.min.js"></Script>
        </html>
    )
}
