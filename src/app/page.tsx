"use client"

import Image from "next/image";
import {SpaceMedium} from "@/app/components/Footer";

import {motion} from "framer-motion";


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
        <section id={"about"} className={"border-gray-200 rounded-xl mx-auto py-20 px-10 "}>
            <section className={"flex flex-col lg:flex-row justify-around mix-blend-lighten"}>
                <div className={"flex flex-col max-w-md min-w-0 "}>
                    <p className={"text-xl font-bold"}>Hello there 👋</p>
                    <p>I am an Android Developer with over two years of experience, known for my commitment to
                        excellence, technical proficiency, and unwavering attention to detail. I am dedicated to pushing
                        the boundaries of Android app development while maintaining a deep understanding of its core
                        principles.</p>
                </div>

                <SpaceMedium/>

                <Image src={"/splash_white.png"} alt={"splash"} width={"1263"} height={"574"}
                       className={" mix-blend w-auto h-auto min-w-0"}/>
            </section>

            <SpaceMedium/>

            <section id={"resume"}>


                <p className={"text-4xl bg-gradient-to-bl font-bold  text-transparent bg-clip-text from-teal-400 to-green-50"}>Resume</p>


                <div>
                    <SpaceMedium/>
                    <SpaceMedium/>
                </div>


                <div className={"flex  flex-col lg:flex-row justify-between items-center"}>

                    <ul>
                        {experienceItems.map((item, index) => (<li key={index}>
                            <ExperienceItem company={item.company} timePeriod={item.timePeriod} skills={item.skills}/>
                            <SpaceMedium/>
                            <SpaceMedium/>
                            <SpaceMedium/>
                        </li>))}
                    </ul>

                    <div className={"w-auto h-auto"}>
                        <CreativeGraphic/>
                    </div>


                </div>
            </section>


        </section>
    )
}

function ExperienceItem({company, timePeriod, skills}: { company: String, timePeriod: String, skills: string[] }) {
    return (
        <div className={"flex flex-col min-w-0"}>
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


function CreativeGraphic() {

    const draw = {
        hidden: {pathLength: 0, opacity: 0},
        visible: (i: number) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: {delay, type: "spring", duration: 1.5, bounce: 0},
                    opacity: {delay, duration: 0.01}
                }
            };
        }
    };
    return (
        <motion.svg
            width="300"
            height="300"
            viewBox="0 0 600 600"
            initial="hidden"
            animate="visible"

            className={"w-auto h-auto min-w-0"}
        >
            <motion.circle
                cx="100"
                cy="100"
                r="80"
                stroke="#ff0055"
                variants={draw}
                custom={1}
            />
            <motion.line
                x1="220"
                y1="30"
                x2="360"
                y2="170"
                stroke="#00cc88"
                variants={draw}
                custom={2}
            />
            <motion.line
                x1="220"
                y1="170"
                x2="360"
                y2="30"
                stroke="#00cc88"
                variants={draw}
                custom={2.5}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="30"
                rx="20"
                stroke="#0099ff"
                variants={draw}
                custom={3}
            />
            <motion.circle
                cx="100"
                cy="300"
                r="80"
                stroke="#0099ff"
                variants={draw}
                custom={2}
            />
            <motion.line
                x1="220"
                y1="230"
                x2="360"
                y2="370"
                stroke="#ff0055"
                custom={3}
                variants={draw}
            />
            <motion.line
                x1="220"
                y1="370"
                x2="360"
                y2="230"
                stroke="#ff0055"
                custom={3.5}
                variants={draw}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="230"
                rx="20"
                stroke="#00cc88"
                custom={4}
                variants={draw}
            />
            <motion.circle
                cx="100"
                cy="500"
                r="80"
                stroke="#00cc88"
                variants={draw}
                custom={3}
            />
            <motion.line
                x1="220"
                y1="430"
                x2="360"
                y2="570"
                stroke="#0099ff"
                variants={draw}
                custom={4}
            />
            <motion.line
                x1="220"
                y1="570"
                x2="360"
                y2="430"
                stroke="#0099ff"
                variants={draw}
                custom={4.5}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="430"
                rx="20"
                stroke="#ff0055"
                variants={draw}
                custom={5}
            />
        </motion.svg>
    )
}

interface ExperienceItemModel {
    company: String,
    timePeriod: String,
    skills: string[]
}
