import React from 'react';
import Section from "@/components/Section";
import HWCard from "@/app/ui/sections/HowWeWork/Card";
import ButtonRounded from "@/components/ButtonRounded";


export type HowWeWorkCard = {
    head?:string,
    description:string
}
const listCardHowWeWork:Array<HowWeWorkCard> = [
    {description:'Requirements analysis and statement of work'},
    {description:'Some words about this step in our work.', head:'Design (if required)'},
    {head:'Development, show demo version',description:'Some words about this step in our work.'}
    ,{head:'Testing, completion',description:'Some words about this step in our work.'}
    ,{head:'Product launch',description:'Some words about this step in our work.'}
    ,{head:'Continued technical support',description:'Some words about this step in our work. Some words about this step in our work. Some words about this step in our work.'}
]
function HowWeWork() {
    return (
        <Section hText={'How we work?'}>
           <div className='grid grid-cols-6 pb-12 lg:pb-2   '>
               {listCardHowWeWork && listCardHowWeWork.map((el,index)=>{
                   return <HWCard description={el.description} head={el.head} key = {index}/>
               })
               }
           </div>
            <div>
                <ButtonRounded text={'Learn more'}/>
            </div>
        </Section>
    );
}

export default HowWeWork;