'use client'
import {useCallback,  useState} from "react";
import '../globals.css';

const listLang = ['en','ru']
export default function LangSwitch(){
    let [show,setShow] = useState(false)
    let [lang,setLang] = useState('en')

    let selectLang = useCallback((lang:string)=>{
        setLang(lang)
        setShow(false)
    },[])

    return <div className="hidden lg:flex items-center  "  >
        <div className={`uppercase `}>
            <p >{lang}</p>
            <div className={'relative'}>
                <div className={`absolute overflow-hidden`}>
                    {show && <ul   className={`appearanceY`}>
                        {listLang.map((el,index)=>{
                            return  <li key={index}
                                        className=' cursor-pointer'
                                        onClick={()=>selectLang(el)}
                                        data-index={index}>{el}</li>
                        })}
                    </ul>}
                </div>
            </div>


        </div>
        <button type="button" onClick={()=>setShow(!show)}
                className='ml-1'
                tabIndex={0} aria-label={'show lang list'}>
            <svg width="20" height="20"
                 className={`${show?'rotate180':'rotate180-reverse'}`}
                 viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.50033 18.3333H12.5003C16.667 18.3333 18.3337 16.6667 18.3337 12.5V7.5C18.3337 3.33333 16.667 1.66667 12.5003 1.66667H7.50033C3.33366 1.66667 1.66699 3.33333 1.66699 7.5V12.5C1.66699 16.6667 3.33366 18.3333 7.50033 18.3333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path  d="M7.05859 8.86667L10.0003 11.8L12.9419 8.86667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    </div>
}