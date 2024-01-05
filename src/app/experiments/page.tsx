"use client"


const cords = {x: 0, y: 0}

export default function Page() {

    window.addEventListener("mousemove", function (e) {
        cords.x = e.clientX
        cords.y = e.clientY

        console.log("mouse moving")
    })


    return (<div className={"mx-auto"}>
        Hello world
    </div>)
}
