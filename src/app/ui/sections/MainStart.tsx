import '@/app/globals.css'
import ButtonRounded from "@/components/ButtonRounded";
export default function MainStart(){

    return <section className='main-section  flex
    flex-col
    relative z-0
    justify-end
    '>
        <div className="container mx-auto ">
            <div className='my-28 lg:w-1/2 relative'>
                <h1 className='font-bold text-white text-clamp40-11-112 font-main lg:text-5xl  leading-normal lg:leading-loose z-10 relative'>Developing IT solutions to scale up your business</h1>
                <div className='bg-blue-800 h-4/6 lg:h-3/6 sp absolute w-full top-1/2
                transform -translate-y-1/2
                 -z-0'></div>
            </div>
            <div className='py-11 flex justify-center lg:justify-start'>
                <ButtonRounded text={'Estimate project'}/>
            </div>

        </div>

    </section>
}