import {ImageModel} from "@/app/photography/page";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {useEffect, useRef} from "react";
import Image from "next/image";
import {motion} from "framer-motion"

export function GalleryImage({imageModel, onClick, index}: {
    imageModel: ImageModel,
    onClick: () => void,
    index: number
}) {
    return (
        <motion.div onClick={onClick} className={"flex border-black border-4 rounded"}>
            <Image src={imageModel.url} alt={"image"} width={"500"} height={"300"} className={"w-auto h-auto rounded"}/>
        </motion.div>
    )
}

export function SingleImage({url, onClick}: { url: string, onClick: () => void }) {
    return (
        <motion.div onClick={onClick} className={" flex mx-auto rounded-xl bg-opacity-0 "}>
            <Image src={url} alt={"find the map"}
                   className={"mx-auto rounded-xl w-auto h-auto "} width={"600"} height={"200"}/>
        </motion.div>
    )
}

export function Gallery(
    {images, handleClick}: { images: ImageModel[], handleClick: (model: ImageModel, index: number) => void }) {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>

            <Masonry columnsCount={5}>
                {images.map((item, index) => (
                    <motion.div key={index}>
                        <GalleryImage index={index} imageModel={item} onClick={() => {
                            handleClick(item, index)
                        }}/>
                    </motion.div>))}
            </Masonry>

        </ResponsiveMasonry>

    )
}


export function Model({openModal, closeModal, children, onNext, onPrevious}: {
    openModal: boolean,
    closeModal: any,
    children: any,
    onNext: () => void,
    onPrevious: () => void
}) {

    const dialogRef = useRef()

    useEffect(() => {
        if (openModal) {

            // @ts-ignore
            dialogRef.current.showModal()
        } else {
            // @ts-ignore
            dialogRef.current.close()
        }
    })


    return (
        // @ts-ignore
        <motion.dialog ref={dialogRef} onCancel={closeModal}
                       className={"flex flex-col justify-center rounded-xl  h-full w-full focus:border-0 focus:ring-0 border-0 ring-0 outline-0"}>

            <motion.div className={"flex  items-center bg-opacity-0"}>

                <PreviousButton onClick={onPrevious}/>

                {children}

                <NextButton onClick={onNext}/>
            </motion.div>
        </motion.dialog>
    )
}


export function NextButton({onClick}: { onClick: () => void }) {
    return (
        <div onClick={onClick}>
            <Image src={'/fast-forward.png'} alt={"next"} width={512} height={512} className={"w-9 h-9 "}/>
        </div>
    )
}

export function PreviousButton({onClick}: { onClick: () => void }) {
    return (
        <div onClick={onClick} className={"rotate-180"}>
            <Image src={'/fast-forward.png'} alt={"next"} width={512} height={512} className={"w-9 h-9"}/>
        </div>
    )
}
