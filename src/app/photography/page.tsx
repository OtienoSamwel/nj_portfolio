"use client"

import {useEffect, useState} from "react";
import {createClient} from "@supabase/supabase-js";
import {Gallery, Model, SingleImage} from "@/app/photography/Components";

export default function Page() {
    const [modal, setModal] = useState(false)
    const [selectedImageUri, setSelectedImageUri] = useState("")
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    // @ts-ignore
    const supabase = createClient(
        "https://rzyumvhnpighziiabmjs.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6eXVtdmhucGlnaHppaWFibWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxNjY3NDMsImV4cCI6MjAxNDc0Mjc0M30.p-keWhdmstLxXGym65yqhCDaXBgr6AcKy0XhnUdKb8E")


    //https://rbbavredkhgomqprqzcd.supabase.co/storage/v1/object/public/moon_monkeys/headshot.jpg
    const [photoList, setPhotoList] = useState<ImageModel[]>([])

    function formatPhotoUrl(name: string): string {
        const baseUrl = "https://rzyumvhnpighziiabmjs.supabase.co/storage/v1/object/public/classic_druids/photography/"
        return baseUrl + name
    }

    useEffect(() => getDataFromSupabase(), [])

    function getDataFromSupabase() {
        // @ts-ignore
        supabase.storage.from('classic_druids').list("photography").then(response => {
            let responseList = response.data //a list of all objects in the bucket
            let images: any[] = []

            //create photo model
            responseList?.map((item, index) => {
                const url = formatPhotoUrl(item.name)
                const width = 300
                const height = 200
                images.push({url: url, width: width, height: height})
            })
            setPhotoList(images)
        }).catch((e) =>
            console.log("an error occurred", e)
        )
    }

    function onImageClick(imageModel: ImageModel, index: number) {
        setSelectedImageUri(imageModel.url)
        setSelectedImageIndex(index)
        setModal(true)
        console.log("image with index clicked ", index)
    }

    function onNextImage() {
        const nextIndex = selectedImageIndex + 1
        const nextImage = photoList[nextIndex]
        setSelectedImageUri(nextImage.url)
        setSelectedImageIndex(nextIndex)
    }

    function onPreviousImage() {
        const previousIndex = selectedImageIndex - 1
        const previousImage = photoList[previousIndex]
        setSelectedImageUri(previousImage.url)
        setSelectedImageIndex(previousIndex)
    }

    return (
        <div className={""}>
            {photoList && <Gallery images={photoList} handleClick={onImageClick}/>}

            {modal &&
                (<Model openModal={modal} closeModal={() => setModal(false)}
                        onNext={onNextImage}
                        onPrevious={onPreviousImage}>
                    <SingleImage url={selectedImageUri} onClick={() => {
                        setModal(false)
                    }}/>
                </Model>)
            }
        </div>
    )
}

export interface ImageModel {
    url: string
    width: number
    height: number
}
