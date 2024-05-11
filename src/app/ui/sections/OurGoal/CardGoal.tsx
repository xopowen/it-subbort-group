import Image from "next/image";

export default function CardGoal({index,hText,text,linkImg}:{index?:number,hText:string,text?:string,linkImg?:string}){


    if(linkImg){
        return <article className='border border-gray-500 overflow-hidden rounded-70 h-full'>
            <Image height={683} width={715} className='font-main text-4xl font-medium w-full h-full' src={linkImg} alt={hText}/>
        </article>
    }

    return <article className='border border-gray-500 rounded-70 p-clamp-30-80
    h-full
    flex flex-col justify-between gap-12 lg:6
    '>
        <p className='flex-grow font-main text-7xl pb-24 text-blue-800'>{index}</p>
        <h3 className='font-main text-4xl text-black font-medium max-h-24 '>{hText}</h3>
        <p className='font-light font-second text-gray-500'>{text}</p>
    </article>
}