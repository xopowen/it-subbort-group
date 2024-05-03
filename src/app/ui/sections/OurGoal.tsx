import Section from "@/components/Section";
import {blog1, blog5, blog6} from "@/ImgAll";

import CardGoal from "@/app/ui/sections/OurGoal/CardGoal";



const listGout:Array<{index?:number,hText:string,text?:string,linkImg?:any}> = [
    {
        index:1,
        hText:'Title of the first goal',
        text:'A small text describing one of the goals in two lines.'
    },
    {
        index:2,
        hText:'Title of the first goal',
        text:'A small text describing one of the goals in two lines.'
    },
    {
        hText:'Title of the first goal',
        linkImg:blog1,
    },
    {
        hText:'Title of the first goal',
        linkImg:blog5,
    },
    {
        index:3,
        hText:'Title of the first goal',
        text:'A small text describing one of the goals in two lines.'
    },
    {
        index:4,
        hText:'Title of the first goal',
        text:'A small text describing one of the goals in two lines.'
    },
    {
        hText:'Title of the first goal',
        linkImg:blog6,
    }
    ]
// ${!isOdd && listGout ?'  lg:[&:nth-last-child(1)]:col-start-5 lg:[&:nth-last-child(2)]:col-start-3 ':''}

export default function OurGoal(){
    return <Section hText={'Why choose us?'}>
            <div className='grid justify-end grid-cols-6 gap-0 p-1'>
                {listGout.map((el,index)=>{
                    return <div key={index} className={`lg:col-span-2 test
                    lg:[&:nth-child(4n)]:col-span-3  lg:[&:last-child:nth-child(4n)]:col-start-4
                    lg:[&:nth-child(5n)]:col-span-3  
                     lg:[&:last-child:nth-child(6n)]:col-start-5
                     lg:[&:nth-last-child(2):nth-child(6n)]:col-start-3 
                     lg:[&:last-child:nth-child(7n)]:col-start-5
                    col-span-6`}>
                        <CardGoal  hText={el.hText} text={el.text} index={el.index} linkImg={el.linkImg}/>
                    </div>
                })}
            </div>
    </Section>
}