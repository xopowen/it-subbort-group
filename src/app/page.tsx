import Image from "next/image";
import "./globals.css";
import MainStart from "@/app/ui/sections/MainStart";
import OurGoal from "@/app/ui/sections/OurGoal";
import {WhyChooseUs} from "@/app/ui/sections/WhyChooseUs";
import HowWeWork from "@/app/ui/sections/HowWeWork";
import UsedTech from "@/app/ui/sections/UsedTech";
import Industries from "@/app/ui/sections/Industries";
export default function Home() {
  return (
    <main className={'flex flex-col  '}>
        <MainStart/>
        <OurGoal/>
        <WhyChooseUs/>
        <HowWeWork/>
        <UsedTech/>
        <Industries/>
    </main>
  );
}
