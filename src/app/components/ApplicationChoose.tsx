import { Manrope } from 'next/font/google';
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

import "../globals.css"

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'] as const,
  });
const ApplicationChoose = () => {
    const data =[
        {
            imgSrc:"Application1",
            heading:"Create Free Account",
            para:"As a delivery driver, you'll make reliable money—working anytime, anywhere.",
            Link:"Start Earning"

        },
        {
            imgSrc:"Application2",
            heading:"Monitor user Analytics",
            para:"Grow your business and reach new customers with us.",
            Link:"Sign up  your store"

        },
        {
            imgSrc:"Application3",
            heading:"Safe & Trusted",
            para:"Get the best DoorDash experience with live order tracking.",
            Link:"Get The App"

        },
        {
            imgSrc:"Application4",
            heading:"Fast Customer Support",
            para:"Get the best DoorDash experience with live order tracking.",
            Link:"Learn More"

        },
    ]
  return (
    <div id='About' className='container fade-up'>
        <div className="pt-[126px] pb-[120px] text-center " >
            <h2 className='pb-4 md:text-[26px] text-[18px]  font-bold font-manrope'>Why you choose this application</h2>
            {/* <div className="mt-[80px] flex flex-row justify-between "> */}
            <div className="mt-[80px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-center  items-center gap-5">
                {
                    data.map((item,index)=>(

                    <div className=" flex flex-col justify-end items-center max-w-[301px] m-auto " key={index}>
                        
                        {/* <div className="mb-[40px] h-40 w-40 transform skew-x-0 hover:skew-x-6 transition-transform duration-600"> */}
                        <div className="mb-[40px] ">
                            <img src={`Image/Application/${item.imgSrc}.webp` } alt={`${item.imgSrc}`}  className='myskew' />
                        </div>
                        <div className="mb-4 ">
                            <h4 className=' text-[16px] md:text-[18px] font-bold tracking-normal'> {item.heading}</h4>
                        </div>

                        <div className="mb-4 ">
                            <p className='text-[15px] md:text-[16px] opacity-70 leading-loose '>{item.para}</p>
                        </div>

                        <Link href="#" className='flex flex-row items-center text-[#2c6fee] text-[15px] md:text-base font-bold'>
                            <p className='mr-[1px] hover:mr-2 transition-all ease-out'> {item.Link}</p> <span><FaArrowRight/></span>
                        </Link>
                    </div>
                    ))
                }   
            </div>
        </div>   
    </div>
  )
}

export default ApplicationChoose