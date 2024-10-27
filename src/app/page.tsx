
import "./globals.css";
import MainStart from "@/app/ui/sections/MainStart";
import OurGoal from "@/app/ui/sections/OurGoal";
import {WhyChooseUs} from "@/app/ui/sections/WhyChooseUs";
import HowWeWork from "@/app/ui/sections/HowWeWork";
import UsedTech from "@/app/ui/sections/UsedTech";
import Industries from "@/app/ui/sections/Industries";
import GetTouchWithUs from "@/app/ui/sections/GetTouchWithUs";
import {imgMainSection} from '@/ImgAll'



export default async function Home( ) {
  return (
    <main className={'flex flex-col  overflow-x-hidden'}>
        <link fetchPriority={'high'} as={'image'} rel={'preload'} href= {imgMainSection.src} ></link>
        <MainStart/>
        <OurGoal/>
        <WhyChooseUs/>
        <HowWeWork/>
        <UsedTech/>
        <Industries/>
        <GetTouchWithUs/>
    </main>
  );
}
