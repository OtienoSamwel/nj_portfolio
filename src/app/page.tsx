import Image from "next/image";

export default function Page() {
    return (
        <section className={"border-gray-200 rounded-xl mx-auto text-center py-20 "}>
            <section className={"flex flex-row space-x-56 mix-blend-lighten"}>
                <div className={"flex flex-col max-w-md"}>
                    <p className={"text-xl font-bold"}>Hello there 👋</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with
                        the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <Image src={"/splash_white.png"} alt={"splash"} width={1263} height={574}
                       className={"max-w-xl max-h-xl mix-blend-lighten"}/>
            </section>


            <section className={"my-20"}>
                <p> Resume</p>
            </section>
        </section>
    )
}
