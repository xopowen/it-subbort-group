import Section from "@/components/Section";
import ChoseCategory from "@/app/ui/sections/WhyChooseUs/ChoseCategory";

export function WhyChooseUs(){

    return <Section hText={'Why choose us?'}  >
        <>
            <p className='text-2xl text-gray-500 font-second leading-normal mb-36 lg:w-1/2'>
                Fill the gaps in your competencies by setting up a remote IT team.
                We will find the best experts for you and arrange everything around it.
                You will get a perfect match both in skills and cultural fit.
            </p>
            <ChoseCategory/>
        </>
    </Section>
}