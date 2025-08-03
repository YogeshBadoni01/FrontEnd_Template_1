import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import "../globals.css"
import Image from 'next/image'

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
    <section id='About'>

    <div  className='container fade-up '>
        {/* <div className="pt-[126px] pb-[120px] text-center " > */}
        <div className="py-10 md:py-[50px] hlg:pt-[60px] hlg:pb-[80px] lg:pb-[120px]  text-center " >
            <h2 className='mb-4 sm:text-[24px] lg:text-[26px] text-[18px]  font-bold font-manrope'>Why you choose this application</h2>
            {/* <div className="mt-[80px] flex flex-row justify-between "> */}
            <div className="mt-[80px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-center  items-center gap-5">
                {
                    data.map((item,index)=>(

                    <div className=" flex flex-col justify-end items-center md:max-w-[301px] m-auto " key={index}>
                        
                        {/* <div className="mb-[40px] h-40 w-40 transform skew-x-0 hover:skew-x-6 transition-transform duration-600"> */}
                        <div className="mb-[40px] ">
                            {/* <img src={`Image/Application/${item.imgSrc}.webp` } alt={`${item.imgSrc}`}  className='myskew' /> */}
                            <Image
                             src={`/Image/Application/${item.imgSrc}.webp` } 
                             alt={`${item.imgSrc}`} 
                             width={110}
                             height={110}
                              className='myskew' />
                        </div>
                        <div className="mb-4 ">
                            <h4 className=' text-[16px] md:text-[18px] font-bold tracking-normal'> {item.heading}</h4>
                        </div>

                        <div className="mb-4 ">
                            <p className='text-[15px] sm:text-[16px] opacity-70 leading-loose '>{item.para}</p>
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
    </section>
  )
}

export default ApplicationChoose