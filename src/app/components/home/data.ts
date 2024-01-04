import {ExperienceItemModel, PersonalProject} from "@/app/page";


export const experienceItems: ExperienceItemModel[] = [
    {
        company: "Univus Inc",
        timePeriod: "Jan 2022 - Present",
        skills: [
            "Spearheaded migration from Java to Kotlin, establishing a robust architecture that led to enhanced scalability and productivity.",
            "Transformed the Android audio streaming library from a paid service to a more scalable open-source WebRTC implementation leading to a significant reduction in running costs.",
            "Worked with a team to track and squash bugs in production increasing the crash-free sessions to 99%. This increased user retention and positive application review significantly.", "Crafted the company's flagship landing page using Next.js and Tailwind CSS, ensuring a seamless and engaging online presence, this helped in funneling in new users to the application.", "Gathered and implemented user feedback, contributing to continuous improvement initiatives for the mobile application."]
        ,
        technologies: ["Android", "XML", "Jetpack Compose", "Coil", "Hilt", "Kotlin Coroutines", "Java", "Nextjs", "Typescript", "Nginx"]
    },
    {
        company: "LegalTech Kenya",
        timePeriod: "Feb 2023 - Dec 2023",
        skills: [
            "Wrote scripts for web legal data harvesting. This data was used to fine-tune an LLM model to respond to historical legal questions.",
            "Acted timely on user feedback regarding the platform.",
            "Work with a team to build various internal company tools.",
            "Worked on various company client projects promptly."
        ],
        technologies: ["HTML", "CSS", "Django", "Django-Rest-Framework"]
    }, {
        company: "Digisoft Solutions",
        timePeriod: "Jan 2021 - Dec 2021",
        skills: [
            "Tracked post-deployment bug reports to recognize and resolve trends among user-reported faults and complaints.",
            "Led the development and deployment of a facial bio-metric system that was used to track employee clock-in times.",
            "Improved the user experience by making the mobile application more responsive and less resource-intensive.",
            "Presented proposals to senior engineers and developers outlining enhancements designed to improve usability and increase potential ROI."
        ],
        technologies: ["Apache Cordova", "Java", "PHP", "Android", "CameraX", "Ktor-Client", "Kotlin", "Kotlin Coroutines", "React Native"]
    },
    {
        company: "Stemtrix", timePeriod: "Oct 2021 - Sep 2022", skills: [
            "Taught fundamental coding principles to children using Python, emphasizing clarity and engagement.",
            "Created an interactive environment, developing hands-on projects to enhance practical coding skills.",
            "Instructed programmable circuit board fundamentals with the C++ programming language, ensuring a comprehensive understanding."
        ], technologies: ["Internet of things", "C++", "Python", "Arduino"]
    },
    {company: "", timePeriod: "", skills: [], technologies: []},
]

export const personalProjects: PersonalProject[] = [
    {
        name: "Casts",
        description: "An android application implementing Jetpack Media3 for seamless audio playback.",
        link: "https://github.com/otienosamwel/casts",
        technologies: ["Android", "Jetpack Compose", "Media3", "Glide", "Kotlin", "Ktor-Client"]
    },
    {
        name: "mpesa-stk-push",
        description: "An mpesa library to perform stk push requests with minimal configuration.",
        link: "https://github.com/OtienoSamwel/mpesa-stk-push",
        technologies: ["Kotlin", "Ktor-Server", "Ktor-Client"]
    },
    {
        name: "compose-doodles",
        description: "My experiments with Jetpack Compose",
        link: "https://github.com/OtienoSamwel/mpesa-stk-push",
        technologies: ["Kotlin", "Android", "Jetpack Compose"]
    },
    {
        name: "simple chat",
        description: "A simple chat cient with the bare minimum chat functionality.",
        link: "https://github.com/OtienoSamwel/simple-chat",
        technologies: ["Kotlin", "Android", "Jetpack Compose", "Ktor-Client", "Websockets"]
    },
    {
        name: "simple chat server",
        description: "A websocket server that hosts a single group chat.",
        link: "https://github.com/OtienoSamwel/chat-server",
        technologies: ["Kotlin", "Android", "Jetpack Compose", "Ktor-Client", "Websockets"]
    }

]

export const personalProjectsUnderConstruction: PersonalProject[] = [
    {
        name: "Skiza Server",
        description: "A Django server powering the Skiza Platform",
        link: "https://github.com/otienosamwel/skiza_server",
        technologies: ["Django", "Django-Rest-Framework ", "TTS model"]
    },
    {
        name: "Skiza Web",
        description: "The web frontend for the Skiza platform",
        link: "https://github.com/OtienoSamwel/mpesa-stk-push",
        technologies: ["Nextjs", "ReactJS", "Tailwind Css"]
    },
    {
        name: "Skiza Android",
        description: "Native mobile client for the Skiza Platform",
        link: "https://github.com/OtienoSamwel/skiza-mobile",
        technologies: ["Kotlin", "Android", "Jetpack Compose", "Ktor-Client"]
    },
]


export const openSourceContributions: PersonalProject[] = [
    {
        name: "Form builder",
        description: "An android Jetpack Compose State management library.",
        link: "https://github.com/jkuatdsc/form-builder",
        technologies: ["Android", "Jetpack Compose", "Kotlin"]
    }
]
