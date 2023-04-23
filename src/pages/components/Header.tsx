import {motion} from "framer-motion";

export default function Header() {
    return (
        <motion.div layout className={"flex flex-row justify-around p-8 z-40"}>
            <motion.p
                whileHover={{scale: [null, 1.2, 1.1]}}
                whileTap={{scale: 0.9}}
                transition={{duration: 0.5}}
                className={"font-bold text-white text-2xl bg-gradient-to-r from-blue-500 to-white via-amber-600 text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-amber-600  hover:via-blue-500  inline-block"}>
                Otieno Samwel
            </motion.p>

            <div className={"flex space-x-4"}>
                <HeaderText text={"About"}/>
                <HeaderText text={"Resume"}/>
                <HeaderText text={"Contact"}/>
            </div>

        </motion.div>
    )
}


function HeaderText({text = ""}) {
    return (
        <motion.p
            className={"font-light text-white"}
            whileHover={{scale: [null, 1.2, 1.1]}}
            transition={{duration: 0.3}}
            whileTap={{scale: 0.9}}

        >{text}
        </motion.p>
    )
}
