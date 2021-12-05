import React from 'react'
import Image from "next/image"

export default function Footer() {
    return (
        <div className="relative bottom-0 flex flex-1 bg-primary font-poppins font-bold text-white justify-center text-xl py-3 items-center w-full mx-auto z-50">
            &lt;/&gt; with <Image width="30" height="30" src="/love.png" alt="Love" />, <Image width="20" height="20" src="/next.png" alt="Next" />&nbsp;and <Image width="30" height="30" src="/typescript.png" alt="TS" />by&nbsp;<a className="text-white underline hover:text-white" href="https://harshal09.vercel.app/" target="_blank" rel="noreferrer">Harshal Raikwar</a>
        </div>
    )
}
