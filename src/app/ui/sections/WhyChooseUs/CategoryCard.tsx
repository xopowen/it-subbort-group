
export default function CategoryCard ({text,hText}:{text:string,hText:string}){

    return <article className='flex-auto border border-gray-500 rounded-3xl md:rounded-[70px] px-clamp-15-5-40 py-12 flex flex-col gap-12'>
        <h3 className='text-blue-800 font-main text-4xl font-normal option-appearance'>
            {hText}
        </h3>
        <p className='text-3xl text-gray-500 leading-normal option-appearance'>
            {text}
        </p>
    </article>

}