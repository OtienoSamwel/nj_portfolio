"use client"

import React from 'react';
import { BlogContent, blogContent } from './content';
import { SpaceLarge, SpaceMedium, SpaceSmall } from '../components/spacers-server';
import {motion} from "framer-motion"
import Image from "next/image"


export default function Page(){
    return (
        <div className='flex flex-col p-8 '>
            <h1 className="text-6xl">Articles</h1>
            <SpaceMedium />

            <h1 className="text-2xl font-bold text-gray-300">Featured</h1>

            <SpaceMedium/>

            <ul className="flex flex-wrap">
                {blogContent.map((item:BlogContent, index:number) => (<li className="p-1" key={index}>
                    <PostItemSmall title={item.title} content={item.content} date={item.date} summary={item.summary} />
                </li>))}
            </ul>

            <SpaceLarge/>

            <hr className="opacity-50"/>

            <SpaceMedium/>

            <h1 className="text-6xl text-grey-300">More</h1>

            <SpaceMedium/>

            <ul className="flex flex-col justify-start">
                {blogContent.map((item:BlogContent, index:number) => (<li className="p-1" key={index}>
                    <PostItemNormal title={item.title} content={item.content} date={item.date} summary={item.summary} />
                </li>))}
            </ul>
        </div>
    );
};


function PostItemSmall(blog:BlogContent) {
    return (
        <motion.div whileHover={{scale:1.02}} whileTap={{scale:0.999}} className="w-80 rounded-xl p-4 border-opacity-50 bg-white bg-opacity-10 ">
        <div className='flex flex-col'>
            <p className="text-xl font-bold">{blog.title}</p>
            <p>{blog.date}</p>
            <p className='text-xs'>{blog.summary}</p>
        </div>
        </motion.div>
    )
}


function PostItemNormal(blog:BlogContent) {
    return (
        <motion.div whileHover={{scale:1.02}} whileTap={{scale:0.999}} className="flex flex-row w-1/2 border rounded-xl space-x-4  border-opacity-50 bg-white bg-opacity-10 border-black">
            <Image src="/falling.jpeg" width={200} height={200} alt='article image' className="rounded"/>
        <div className='flex flex-col'>
            <p className="text-xl font-bold">{blog.title}</p>
            <p>{blog.date}</p>
            <p className='text-xs'>{blog.content}</p>
        </div>
        </motion.div>
    )
}
