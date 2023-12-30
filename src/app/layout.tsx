import './globals.css'
import Header from "@/app/components/Header";
import Footer, {SpaceMedium} from "@/app/components/Footer"

export const metadata = {
    title: 'Samwel Otieno',
    description: 'Personal website',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={"antialiased bg-black text-gray-200"}>
        <body className={"flex flex-col justify-between"}>
        <Header/>
        {children}

        <div>
            <SpaceMedium/>
            <SpaceMedium/>
            <SpaceMedium/>
            <SpaceMedium/>
            <SpaceMedium/>
            <SpaceMedium/>
        </div>

        <hr className={"opacity-20 mx-auto w-1/4"}/>

        <div>
            <SpaceMedium/>
            <SpaceMedium/>
            <SpaceMedium/>
        </div>
        <Footer/>
        </body>
        </html>
    )
}
