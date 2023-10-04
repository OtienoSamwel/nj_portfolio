import Link from "next/link";

export default function Contact() {
    return (
        <div>
            <Link href={"mailto:otienosamwelmitto@gmail.com"} className={"w-auto"}>
                <p className={"text-sm text-blue-500 underline"}>
                    otienosamwelmitto@gmail.com
                </p>
            </Link>
        </div>
    )
}
