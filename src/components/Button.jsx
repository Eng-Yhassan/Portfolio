import React from 'react'
import MYCV from "../assets/My CV.pdf"

export default function Button() {
    return (
        <div>
            <a href={MYCV} target='_blank'>
            <button className='bg-gray-600 text-white py-1 px-2 text-2xl rounded-[4px]'>Download My Cv</button>
            </a>
        </div>
    )
}
