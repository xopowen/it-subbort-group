'use client'
import {useState} from "react";
import ControllerChoseCategory from "@/app/ui/sections/WhyChooseUs/ControlerChoseCategory";
import {number} from "prop-types";
import CategoryCard from "@/app/ui/sections/WhyChooseUs/CategoryCard";

export type categoryForWhyChoseUs ={id:number,head:string}

const lCategory:Array<categoryForWhyChoseUs> = [
    {
        id:0,
        head:'Team',
    },
    {
        id:1,
        head:'Communication'
    },
    {
        id:2,
        head:'Solution',
    },
    {
        id:3,
        head:'Quality'
    }
]
export default function ChoseCategory(){
    let [categoryID,setCategory ] = useState(NaN)
     function haveCategory(id:number){
        setCategory(id)
    }

    return <div className=' flex lg:flex-row flex-col  gap-36  lg:gap-48'>
            <ControllerChoseCategory listCategory={lCategory} haveCategory={haveCategory} activeID ={categoryID}/>
        {!Number.isNaN(categoryID) &&   <CategoryCard key={categoryID} hText={ lCategory.find((el)=>el.id===categoryID)?.head+''} text={`
        A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines.
        `}/>}
    </div>
}