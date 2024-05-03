'use client'
export default function BtnContactUs(){
    return  <a href="#">
        <button className='lg:rounded-2xl lg:bg-blue-800 lg:px-10 lg:py-4 uppercase
        w-clamp-30-112 h-clamp-30-112 lg:w-full lg:h-full
        flex items-center justify-center    transition-colors
        bg-white rounded-3xl lg:p-0  hover:bg-gray-100 lg:hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-gray-200
    '>

                <span className='hidden lg:inline whitespace-nowrap mr-2'>contact us</span>
                <svg className=' size-1/2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={'dark:stroke-blue-800 lg:stroke-white dark:lg:stroke-white'} d="M20.5 22H3.5"   strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                <path className={'dark:stroke-blue-800 lg:stroke-white  dark:lg:stroke-white'} d="M18.5 4L5 17.5"   strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                <path className={'dark:stroke-blue-800 lg:stroke-white  dark:lg:stroke-white'} d="M19 13.77V3.5H8.73"  strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
            </svg>

    </button>   </a>
}