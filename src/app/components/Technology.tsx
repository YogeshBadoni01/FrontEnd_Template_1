import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { IoCheckmark } from 'react-icons/io5'
import { Theme } from '../Theme/Theme'
import { Manrope } from 'next/font/google'

const theme = Theme
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'] as const,
});


const Technology = () => {
  
  return (
    <section className='container'>
      <div className=" flex flex-row  py-[100px] h-auto ">
          <div className="flex justify-start items-center text-base md:flex-row flex-col m-auto">
              <div className="flex flex-col justify-center text-center items-center lg:items-start lg:text-left basis-full md:mt-[30px] md:ml-[80px] max-w-[534px] m-auto">
                <p className=' mb-4 font-bold' style={{color:Theme.colors?.primary?.[3]}}>Technology based Community</p>
                {/* <h2 className='2xl:text-[40px] text-[30px] font-extrabold leading-snug mb-4' style={{ fontFamily: `${Theme?.fontFamily}` }}> */}
                <h2 className='2xl:text-[40px] md:text-[30px] text-[18px] font-bold leading-snug mb-4 font-manrope' >
                  Join our community by using our technology to grow up faster with our tools</h2>
                <p className='opacity-70 mb-4 md:text-[16px] text-[18px] leading-[2.2] max-w-[470px]'>Our data centers have top-notch security and surveillance, with a reliable 99.9% uptime. Secure email hosting with encryption both at rest and end-to-end, along with S/MIME message encryption.</p>
              
                <Link href="" className={`group flex items-center gap-[15px] py-[14px] px-4 border-2 opacity-80 rounded-full mt-10 transition-all ease-in-out duration-200 hover:bg-[${theme?.colors?.primary?.[0]}]  hover:bg-[#6b9eff] hover:text-white hover:border-[#6b9eff] `} >
                  <span className='group-hover:mr-1 font-bold'>Explore More</span>
                  <span ><FaAngleRight/></span>
                </Link>

              </div>
              <div className=" lg:flex basis-full order-2 item-slide-up">
                <img src='Image/Technology/Technology.webp'/>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Technology