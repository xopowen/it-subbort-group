export default function Section({hText,
                                    children,
                                }: Readonly<{
    hText:string,
    children: React.ReactNode;
}>)
{


    return <section className='flex flex-col gap-24 container mx-auto'>
        <h2 className='font-main text-6xl text-black  '>{hText}</h2>
        <div className=''>
            {children}
        </div>
    </section>

}