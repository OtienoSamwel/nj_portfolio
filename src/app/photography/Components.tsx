import {ImageModel} from "@/app/photography/page";

import {LazyLoadImage} from "react-lazy-load-image-component";

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
        <motion.div onClick={onClick} className={"border-black border-4 rounded"}>
            <LazyLoadImage src={imageModel.url} alt={"fantastic image"} className={"rounded"}/>
        </motion.div>
    )
}

export function SingleImage({url, onClick}: { url: string, onClick: () => void }) {
    return (
        <motion.div onClick={onClick} className={" mx-auto rounded-xl bg-opacity-0 "}>
            <LazyLoadImage src={url} alt={"find the map"}
                           className={"mx-auto rounded-xl w-2/5 h-auto "}/>
        </motion.div>
    )
}


export function Gallery(
    {images, handleClick}: { images: ImageModel[], handleClick: (model: ImageModel, index: number) => void }) {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 3, 900: 4}}>

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
