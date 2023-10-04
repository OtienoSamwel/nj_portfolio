import Link from "next/link";
import Image from "next/image";
import Contact from "@/app/components/Contact";

export default function Footer() {
    return (
        <footer className={" mb-10 mt-30 flex flex-col w-full "}>
            <p className={"text-2xl mx-auto font-bold bg-gradient-to-bl from-red-700 to-white text-transparent bg-clip-text"}>
                Contact me
            </p>

            <SpaceMedium/>

            <div className={"flex flex-row mx-auto"}>

                <div className={"bg-gradient-to-br from-blue-600 to-white rounded-full"}>
                    <IconButton imageUrl={"linked_in_elem.svg"} linkUrl={"https://www.linkedin.com/in/otienosamwel/"}/>
                </div>

                <SpaceMedium/>
                <div className={"bg-gradient-to-br from-red-700 to-blue-600 rounded-full "}>
                    <IconButton imageUrl={"github-mark.svg"} linkUrl={"https://github.com/otienosamwel"}/>
                </div>

                <SpaceMedium/>

                <div className={"bg-gradient-to-br from-blue-400 to-black rounded-full"}>
                    <IconButton imageUrl={"twitter_elem.svg"} linkUrl={"https://twitter.com/otienosamwel_"}/>
                </div>

            </div>

            <SpaceMedium/>

            <div className={"mx-auto"}>
                <Contact/>
            </div>
        </footer>
    )
}

function IconButton({imageUrl = " ", linkUrl = ""}) {
    return (
        <div>
            <Link href={linkUrl}>
                <Image src={imageUrl}
                       width={47}
                       height={47}
                       alt={"social link"}
                       className={"w-10 h-10"}/>
            </Link>
        </div>
    )
}

export function SpaceMedium() {
    return (
        <div className={"w-4 h-4"}>
        </div>
    )
}
