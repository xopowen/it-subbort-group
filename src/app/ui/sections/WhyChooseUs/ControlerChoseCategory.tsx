import {categoryForWhyChoseUs} from "@/app/ui/sections/WhyChooseUs/ChoseCategory";

export default function ControllerChoseCategory({listCategory,haveCategory,activeID}:{
    listCategory:Array<categoryForWhyChoseUs>
    ,haveCategory:(categoryID:number)=>void,
     activeID:number
}
)
{



    return   <div className='overflow-auto pb-2 lg:w-min flex-shrink-0 flex-grow'>
        <ul className='flex  w-full lg:w-auto min-w-max lg:flex-col gap-20 lg:gap-0 justify-between relative
        lg:border-left
        border-up
        before:border-gray-500'>
            {listCategory.map((item,index)=>{
                return <li  key={item.id}
                            className={` relative
                            font-main text-3xl pl-0 lg:pl-12 pt-12 lg:pb-12
                            ${item.id === activeID ? ' cursor-pointer ' +
                                'lg:border-left ' +
                                'border-up  before:border-t-4 lg:before:border-l-4' +
                                ' before:border-blue-800 ' +
                                ' before:scaleCenterAppearance ' +
                                ' lg:before:top-0': ' opacity-30' } `}
                >
                    <button onClick={()=>{haveCategory(item.id)}} className={`${item.id === activeID ? 'text-blue-800 transition-colors':'text-gray-500'}`} aria-label={item.head}>
                        {item.head}
                    </button>
                </li>
            })}
        </ul>
    </div>

}