"use client"

import {motion} from "framer-motion";

export default function Header() {
    return (
        <motion.header layout className={"flex flex-col md:flex-row justify-around p-8 z-40"}>
            <motion.p
                whileHover={{scale: [null, 1.2, 1.1]}}
                whileTap={{scale: 0.9}}
                className={"font-bold text-2xl bg-gradient-to-r from-blue-500 to-white via-amber-600 text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-amber-600  hover:via-blue-500  inline-block"}>
                👨‍💻 Otieno Samwel
            </motion.p>


            <div className={"h-3 md:hidden"}></div>

            <div className={" flex flex-col md:flex-row md:space-x-4"}>
                <HeaderText text={"🎬About"}/>
                <HeaderText text={"📜Resume"}/>
                <HeaderText text={"📧Contact"}/>
                <HeaderText text={"👷‍Projects"}/>
            </div>

        </motion.header>
    )
}

function HeaderText({text = ""}) {
    return (
        <motion.p
            className={"font-light text-white"}
            whileHover={{scale: [null, 1.2, 1.1]}}
            whileTap={{scale: 0.9}}
        >{text}
        </motion.p>
    )
}
