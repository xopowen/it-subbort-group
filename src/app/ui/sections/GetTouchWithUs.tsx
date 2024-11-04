'use client'
import '@/app/globals.css'
import Picture from 'next-export-optimize-images/picture';
import React from 'react';
// import Image from "next/image";
import {directInbox} from '../../../ImgAll'
import InputWithNumberMask from "@/components/InputWithNumberMask";
function GetTouchWithUs() {
    return (
        <section className=''>

            <div className='sm:mx-8
            bg-blue-800
            text-white
            flex   flex-col gap-8 md:gap-24  rounded-[70px]
            px-clamp-30-6-120 py-clamp-30-6-100'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <h2 className='lg:w-2/5  font-main leading-snug text-clamp40-11-112 lg:text-[100px]'> Get in touch with us</h2>
                    <div className='lg:w-2/5 flex flex-col gap-12'>
                        <p className='text-2xl text-gray-400 font-second'>
                            Simply fill in your Email in our contact form or get in touch with us by our  email - <a
                            href="http://itsupportgroup@gmail.com" className='text-white line-through'>itsupportgroup@gmail.com</a> - , and one of our experts will contact you shortly.
                            This could be the beginning of a wonderful collaboration and the easiest way to acquire a highly-experienced team.
                        </p>
                        <a  download={true} tabIndex={0} aria-label="Download the brief">
                            <button className='flex gap-3 border border-white rounded-2xl transition transform active:scale-110 hover:scale-110 px-10 py-4 bg-transparent'>
                                Download the brief
                                <Picture src={directInbox} alt=""/>
                            </button>
                        </a>
                    </div>
                </div>

                <form action="" className='grid grid-cols-1 justify-center lg:grid-cols-2 gap-12 lg:justify-between'>
                    <div className='flex flex-col gap-12 '>
                        <label className=''>
                            <input className='border-b focus:border-none border-gray-300 p-2 pl-0 w-full placeholder:text-gray-500 text-gray-300  font-main  text-3xl leading-normal  bg-transparent'
                                   name='full-name'
                                   placeholder='Enter your Full Name' type="text"/>
                        </label>
                        <label className=''>
                            <input className='border-b focus:border-none border-gray-300 p-2 pl-0 w-full placeholder:text-gray-500 text-gray-300  font-main  text-3xl leading-normal  bg-transparent'
                                   name='full-name'
                                   placeholder='Enter your Email' type="email"/>
                        </label>
                        <label className=''>
                            <InputWithNumberMask className='border-b focus:border-none border-gray-300 p-2 pl-0 w-full placeholder:text-gray-500 text-gray-300  font-main  text-3xl leading-normal  bg-transparent'
                                   name='full-name'
                                   placeholder='Enter your Phone Number' type="text" />
                        </label>

                    </div>
                    <div className='flex flex-col gap-12  '>

                        <label className=''>
                            <input className='border-b focus:border-none border-gray-300 p-2 pl-0 w-full placeholder:text-gray-500 text-gray-300  font-main  text-3xl leading-normal  bg-transparent'
                                   name='full-name'
                                   placeholder='Describe your project' type="text"/>
                        </label>
                        <label className=''>
                            <input className='border-b focus:border-none border-gray-300 p-2 pl-0 w-full placeholder:text-gray-500 text-gray-300  font-main  text-3xl leading-normal  bg-transparent'
                                   name='full-name'
                                   placeholder='Upload file (max file size is 30 MB)' type="email"/>
                        </label>
                    </div>
                    <div className={'flex justify-center md:justify-start'}>
                        <button className='bg-white flex transition gap-5 transform hover:scale-110 active:scale-110 rounded-[10px] py-4 px-10' type="submit" aria-label="submit">
                            <span className='uppercase text-blue-800  font-main text-lg'>submit</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.5 22H3.5" stroke="blue" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                                <path d="M18.5 4L5 17.5" stroke="blue" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                                <path d="M19 13.77V3.5H8.73" stroke="blue" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>

                </form>
            </div>


        </section>
    );
}

export default GetTouchWithUs;