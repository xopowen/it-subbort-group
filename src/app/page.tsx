import Image from "next/image";
import "./globals.css";
import MainStart from "@/app/ui/sections/MainStart";
import OurGoal from "@/app/ui/sections/OurGoal";
export default function Home() {
  return (
    <main className={'flex flex-col'}>
      <MainStart/>
        <OurGoal/>
    </main>
  );
}
