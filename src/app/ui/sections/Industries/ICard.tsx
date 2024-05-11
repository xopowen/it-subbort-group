'use client'
import React from 'react';
import {useInView} from "react-intersection-observer";

function ICard({text,children,head}:{ text:string,head:string,  children: React.ReactNode }) {
    let { ref, inView, entry } = useInView()
    return (
        <article>
            <div ref={ref} className='w-24 h-24'>
                {inView && children}
            </div>
            <h3 className='font-main text-4xl text-gray-700 py-10'>{head}</h3>
            <div className='pt-10 border-t border-t-gray-400'>
                <p className='font-second text-2xl text-gray-400'>
                    {text}
                </p>
            </div>
        </article>
    );
}

export default ICard;