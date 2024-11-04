import '@/app/globals.css'
import ButtonRounded from "@/components/ButtonRounded";
export default function MainStart(){

    return <section className='main-section  flex
    pt-[30%]
    bg-cover
    flex-col
    relative z-0
    justify-end
    '>
        <div className="container mx-auto px-clamp-15-5-40">
            <div className='lg:w-1/2 relative px-1'>
                <h1 className='font-bold
                text-white
                text-clamp40-11-112
                font-main
                lg:text-5xl
                 leading-normal
                 lg:leading-loose
                 z-10 relative'>
                    Developing IT solutions to scale up your business
                </h1>
                <div className='bg-blue-800   lg:h-3/6 sp absolute w-full top-1/2
                transform -translate-y-1/2
                 -z-0'></div>
            </div>
            <div className='py-11 flex justify-center lg:justify-start'>
                <ButtonRounded text={'Estimate project'}/>
            </div>

        </div>

    </section>
}