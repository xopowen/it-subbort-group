'use client'
import React, {useState} from 'react';
import Section from "@/components/Section";
import UTCard from "@/app/ui/sections/UsedTech/UTCard";

export type UTCardProps = {id:number,title:string}
const listUTCard:Array<UTCardProps> =[{
    id:0,
    title:'Title of the first technology',
},{
    id:1,
    title:'technology description'
},{
    id:2,
    title:'technology description'
},{
    id:3,
    title:' technology description'
},{
    id:4,
    title:' technology description'
},{
    id:5,
    title:' technology description'
},{
    id:6,
    title:' technology description'
},{
    id:7,
    title:' technology description'
}

]
function UsedTech() {
    let [activeID,setActive] = useState<number>(NaN)


    return (
        <Section hText={'Used technologies'}>
            <div className='flex flex-col gap-32'>
                <div className='flex justify-end'>
                    <p className='font-second text-2xl text-gray-500 lg:w-1/2'>
                        Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.
                    </p>
                </div>
                <div className='relative flex flex-col lg:flex-row gap-12 border-l lg:border-l-0 lg:border-t border-t-gray-400'>
                    {listUTCard && listUTCard.map((el  )=>{
                        return <UTCard key={el.id} id={el.id} title={el.title} isAction={activeID===el.id} haveAction={setActive}/>
                    })}
                </div>
            </div>

        </Section>
    );
}

export default UsedTech;