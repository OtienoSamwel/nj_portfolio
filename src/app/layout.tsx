import './globals.css'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer"

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
        <Footer/>
        </body>
        </html>
    )
}
