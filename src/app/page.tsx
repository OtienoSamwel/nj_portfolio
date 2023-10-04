import Image from "next/image";
import {SpaceMedium} from "@/app/components/Footer";


export default function Page() {

    const experienceItems: ExperienceItemModel[] = [
        {
            company: "Unvius Inc",
            timePeriod: "Jan 2022 - Present",
            skills: ["Migrated the project to a more stable architecture (MVVM). This led to boosted productivity in adding new features and maintaining the code base",
                "Migrated the project to a more stable architecture (MVVM). This led to boosted productivity in adding new features and maintaining the code base",
                "Led the code base migration from Java to Kotlin and later introduced Jetpack Compose gradually for new features.",
                "Maintained comprehensive knowledge of the mobile development cycle and addressed challenges arising in each phase."]
        },
        {
            company: "Digisoft Solutions", timePeriod: "Jan 2021 Dec 2021", skills: [
                "Tracked post-deployment bug reports to recognize and resolve trends among user-reported faults and complaints.",
                "Led the development and deployment of a facial bio-metric system that was used to track employee clock-in times.",
                "Improved the user experience by making the mobile application more responsive and less resource-intensive.",
                "Presented proposals to senior engineers and developers outlining enhancements designed to improve usability and increase potential ROI."
            ]
        },
        {company: "", timePeriod: "", skills: []},
        {company: "", timePeriod: "", skills: []},
    ]


    return (
        <section className={"border-gray-200 rounded-xl mx-auto py-20 px-10 "}>
            <section className={"flex flex-col lg:flex-row space-x-20 mix-blend-lighten"}>
                <div className={"flex flex-col max-w-md "}>
                    <p className={"text-xl font-bold"}>Hello there 👋</p>
                    <p>I am an Android Developer with over two years of experience, known for my commitment to
                        excellence, technical proficiency, and unwavering attention to detail. I am dedicated to pushing
                        the boundaries of Android app development while maintaining a deep understanding of its core
                        principles.</p>
                </div>

                <SpaceMedium/>

                <Image src={"/splash_white.png"} alt={"splash"} width={"1263"} height={"574"}
                       className={" mix-blend- w-auto h-auto "}/>
            </section>

            <SpaceMedium/>

            <section>

                <p className={"text-4xl bg-gradient-to-bl font-bold  text-transparent bg-clip-text from-teal-400 to-green-50"}>Resume</p>


                <SpaceMedium/>

                <ul>
                    {experienceItems.map((item, index) => (<li key={index}>
                        <ExperienceItem company={item.company} timePeriod={item.timePeriod} skills={item.skills}/>
                        <SpaceMedium/>
                    </li>))}
                </ul>
            </section>


        </section>
    )
}

function ExperienceItem({company, timePeriod, skills}: { company: String, timePeriod: String, skills: string[] }) {
    return (
        <div className={"flex flex-col"}>
            <p className={"text-xl font-bold"}>{company}</p>
            <p className={"italic font-sans font-light"}>{timePeriod}</p>
            <ul>
                {skills.map((skill: String, index: number) => (
                    <li key={index}>
                        <div className={"flex flex-row items-center max-w-xl"}>
                            <div className={"w-2 h-2 rounded-full bg-gradient-to-bl from-blue-400 to-red-800"}></div>
                            <SpaceMedium/>
                            <p className={"font-light"}>
                                {skill}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}


interface ExperienceItemModel {
    company: String,
    timePeriod: String,
    skills: string[]
}
