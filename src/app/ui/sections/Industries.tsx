import Picture from 'next-export-optimize-images/picture';

import Section from "@/components/Section";
import ICard from "@/app/ui/sections/Industries/ICard";
// import Image from "next/image";
import {IconLogistics} from "@/ImgAll";
const text = 'Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.'
function Industries() {
     return (
        <Section hText={'Industries'}>
            <div className='flex flex-col  lg:flex-row gap-12'>
                <ICard text={text} head={'Logistics'} >
                    <Picture src={IconLogistics} width={'100'} height={'100'}
                           className={'w-full h-full '}//animate-spin  ease-in
                           alt={''}/>
                </ICard>
                <ICard text={text} head={'E-commerce'}>
                    <svg width="100" height="100" className='size-full' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className='transition appearanceY animate-delay-150' x="1.5" y="1.5" width="28" height="28" rx="4.5" stroke="#2E2BD0" strokeWidth="3" strokeLinejoin="round"/>
                        <rect className='transition appearanceY animate-delay-300' x="35.5" y="1.5" width="63" height="28" rx="4.5" stroke="#9695E7" strokeOpacity="0.5" strokeWidth="3" strokeLinejoin="round"/>
                        <rect className='transition appearanceY animate-delay-500' x="1.5" y="35.5" width="97" height="28" rx="4.5" stroke="#9695E7" strokeOpacity="0.5" strokeWidth="3" strokeLinejoin="round"/>
                        <rect className='transition appearanceY animate-delay-700' x="1.5" y="69.5" width="97" height="28" rx="4.5" stroke="#9695E7" strokeOpacity="0.5" strokeWidth="3" strokeLinejoin="round"/>
                    </svg>
                </ICard>
                <ICard text={text} head={'CRM systems'}>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className='option-appearance animate-count-infinite animate-duration-1000 animate-delay-200' x="1.5" y="36.5" width="62" height="62" rx="8.5" stroke="#9695E7" strokeOpacity="0.5" strokeWidth="3"/>
                        <rect className='option-appearance animate-count-infinite animate-duration-1000 animate-delay-500' x="18.5" y="19.5" width="62" height="62" rx="8.5" stroke="#9695E7" strokeOpacity="0.5" strokeWidth="3"/>
                        <rect className='option-appearance animate-count-infinite animate-duration-1000 animate-delay-700' x="36.5" y="1.5" width="62" height="62" rx="8.5" stroke="#2E2BD0" strokeWidth="3"/>
                    </svg>
                </ICard>
            </div>
        </Section>
    );
}

export default Industries;