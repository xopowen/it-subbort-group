export default function ButtonRounded({text}:{text:string}){

    return <button className={`uppercase text-4xl
        size-72
        text-center
        text-white border border-white lg:bg-transparent
        bg-blue-800 rounded-full
        transition-colors
        hover:bg-blue-700
        focus:border-red-800
         ` } >
        {text}
    </button>
}