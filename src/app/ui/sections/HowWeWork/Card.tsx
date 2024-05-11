import React from 'react';
import {HowWeWorkCard} from "@/app/ui/sections/HowWeWork";

function HWCard({head,description}:HowWeWorkCard) {
    return (
        <article tabIndex={0} className='group grid col-span-6 lg:self-start lg:first:self-center lg:first:border-none
         transition duration-300
         hover:[&:not(:first-child)]:bg-blue-800
         hover-none:[&:not(:first-child)]:focus:bg-blue-800

         lg:col-span-2 items-center content-center text-2xl first:pl-0 first:border-none first:hover-none:bg-none  p-12 border border-gray-500 rounded-[40px] '>
            {head && <h3 className='font-main pb-6
            group-hover:group-[&:not(:first-child)]:text-white
            group-focus:text-white
            text-gray-700 ' >
                {head}
            </h3>
        }
        <p className='text-gray-500
         group-hover:group-[&:not(:first-child)]:text-gray-300
         group-focus:text-gray-300
        '>
            {description}
        </p>
        </article>
    );
}

export default HWCard;