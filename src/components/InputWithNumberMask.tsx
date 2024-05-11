'use client'

import React, {LegacyRef, useEffect, useRef} from 'react';
import TellNumberMask from "@/functions/TellNumberMask";

function InputWithNumberMask(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    let ref = useRef< HTMLInputElement  | undefined>()

    useEffect(()=>{
        let mask:TellNumberMask|undefined;
        if(ref.current){
            mask = new TellNumberMask(ref.current)
        }

        return ()=>{
            // @ts-ignore
            mask?.remove()

        }

    },[ref.current])


    // @ts-ignore
    return<input ref={ref} {...props}/>

}

export default InputWithNumberMask;