import React from 'react';
import {UTCardProps} from "@/app/ui/sections/UsedTech";
import Image from 'next/image'
import {IconJS} from "@/ImgAll";


function UTCard({title,isAction,haveAction,id}:UTCardProps & {isAction:boolean,haveAction:(id:number)=>void}) {

    return (
        <article className={`relative 
             
            before:absolute 
            before:top-0 
            before:left-0
            before:-translate-x-1/2
            lg:before:-translate-x-0
            before:p-[7.5px]  
            before:rounded-full 
            before:bg-gray-600 
            before:transform before:-translate-y-1/2
            transition-all
         ${isAction ?` 
         before:transform 
         before:duration-150 
         before:ease-in 
         before:scale-110 
         before:outline
         before:outlineAppearance7-5 
         before:outline-blue-400   
         `:'    before:outline-0'}`}
                 onClick={()=>{haveAction(id)}} onTouchEnd={()=>{haveAction(id)}}>
            <h4 className={`leading-snug  font-second font-normal pl-16 lg:pl-0 lg:pt-10  ${isAction?' text-black text-2xl':'text-gray-400 text-lg'}`}>
                {title}
            </h4>
            {isAction && <Image className='
            lg:absolute
            ml-16
            lg:ml-0
            -bottom-full
            duration-300
            option-appearance' alt={''} src={IconJS} width={80} height={80}></Image>}
        </article>
    );
}

export default UTCard;