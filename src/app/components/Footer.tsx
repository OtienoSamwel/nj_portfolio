"use client"
import Link from "next/link";
import Image from "next/image";
import Contact from "@/app/components/Contact";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id={"contact"} className={" mb-10 mt-30 flex flex-col w-full mx-auto"}>
            <div className={" flex flex-col"}>

                <SpaceMedium/>

                <div className={"flex flex-row mx-auto"}>
                    <div className={""}>
                        <IconButton imageUrl={"linked_in_elem.svg"}
                                    linkUrl={"https://www.linkedin.com/in/otienosamwel/"}/>
                    </div>

                    <SpaceMedium/>
                    <div className={""}>
                        <IconButton imageUrl={"github-mark.svg"} linkUrl={"https://github.com/otienosamwel"}/>
                    </div>

                    <SpaceMedium/>

                    <div className={""}>
                        <IconButton imageUrl={"twitter_elem.svg"} linkUrl={"https://twitter.com/otienosamwel_"}/>
                    </div>

                    <SpaceMedium/>

                    <div className={"border-r-2 h-10 opacity-30"}></div>

                    <SpaceMedium/>

                    <Contact/>


                </div>

                <SpaceMedium/>


            </div>
        </footer>
    )
}

function IconButton({imageUrl = " ", linkUrl = ""}) {
    return (
        <motion.div whileHover={{scale:1.2}} whileTap={{scale:1.3}}>
            <Link href={linkUrl}>
                <Image src={imageUrl}
                       width={47}
                       height={47}
                       alt={"social link"}
                       className={"w-10 h-10"}/>
            </Link>
        </motion.div>
    )
}

export function SpaceMedium() {
    return (
        <div className={"w-4 h-4"}>
        </div>
    )
}


export function SpaceLarge() {
    return (
        <div className={"w-8 h-8"}>

        </div>
    )
}
