import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";

const Button = (props) => {
  return (
    <Link href={props.link}>
         <div className="bg-[#43B27F] flex items-center justify-between rounded-lg text-4xl md:text-3xl lg:text-4xl w-[50%]">
        <h3 className='p-2'>{props.text}</h3>
        <div className='px-2'>
        <div className='bg-[#D9D9D9] text-[#050505] rounded-lg p-2'>
        <FaArrowRight />
        </div>
        </div>
       
        </div>

        </Link>
  )
}

export default Button
