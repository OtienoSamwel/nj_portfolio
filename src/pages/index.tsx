import {Inter} from 'next/font/google'

// @ts-ignore
import * as THREE from "three";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import {useFollowPointer} from "./use-follow-pointer"
import {useRef} from "react";
import {motion} from "framer-motion";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const ref = useRef(null)
    const {x, y} = useFollowPointer(ref)


    return (
        <div className={"bg-black flex flex-col relative"}>

            <motion.div
                ref={ref}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-transparent shadow-2xl shadow-white"
                animate={{x, y}}
                transition={{
                    type: "linear",
                    damping: 1,
                    stiffness: 50,
                    restDelta: 0.001
                }}
            />

            <div className="h-screen fixed top-0 left-0 right-0 ">
                {/*<Canvas>*/}
                {/*    <Scene/>*/}
                {/*</Canvas>*/}
            </div>

            <div className={"z-40"}>
                <Header/>
                <Footer/>
            </div>
        </div>
    )
}
