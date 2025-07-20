import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { IoCheckmark } from 'react-icons/io5'
import { Theme } from '../Theme/Theme'
import { Inter, Manrope } from 'next/font/google'

const theme = Theme

const ControlCustom = () => {
  
  return (
    <section className='container'>
      <div className=" flex flex-row  h-auto py-[100px] lg:max-w-full max-w-[970px] m-auto font-inter">

          <div className="flex justify-start items-center text-base md:flex-row flex-col ">
              <div className="   lg:flex basis-full order-2 md:order-1 item-slide-up ">
                <img src='Image/ControlCutom/analytics1.webp'/>
              </div>

              <div className="flex flex-col justify-center text-center md:items-center items-start lg:text-left basis-full md:mt-[30px] md:ml-[80px] max-w-[480px] order-1 md:order-2">
              
                <h2 className='xs:text-[28px] min-[1167px]:text-[36px] text-[18px]  leading-[1.250] md:text-left mb-4 font-manrope xxl:text-[40px] font-extrabold'  >
                  Why you choose Custom app for your daily use?
                </h2>
                <p className='opacity-70 mb-4 md:text-[16px] text-[14px] leading-loose '>Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.</p>
                <ul className='mt-[30px] text-left w-full'>
                  <li className='flex justify-start items-center gap-[15px] mb-[15px]  text-[17px]   '> <IoCheckmark style={{color:theme?.colors?.primary?.[4]}} className="h-[22px] w-[22px] font-medium"/> <p className='font-medium'>Chat prompt module supported</p></li>
                  <li className='flex justify-start items-center gap-[15px] mb-[15px]  text-[17px]   '> <IoCheckmark style={{color:theme?.colors?.primary?.[4]}} className="h-[22px] w-[22px] font-medium"/> <p className='font-medium'>Enjoy unlimited features by paid plans</p></li>
                  <li className='flex justify-start items-center gap-[15px] mb-[15px]  text-[17px]   '> <IoCheckmark style={{color:theme?.colors?.primary?.[4]}} className="h-[22px] w-[22px] font-medium"/> <p className='font-medium'>Manage ultimate conversation</p></li>
                </ul>
                <div className="w-full">
                <Link href="" className={`group flex items-center gap-[15px] py-[14px] px-4 border-2 opacity-80 rounded-full mt-[30px] lg:mt-[25px] xl:mt-10 w-fit hover:bg-[${theme?.colors?.primary?.[0]}] transition-all ease-in-out duration-200 hover:bg-[#6b9eff] hover:text-white hover:border-[#6b9eff] `} >
                  <span className='group-hover:mr-1 font-bold'>Explore More</span>
                  <span ><FaAngleRight/></span>
                </Link>

                </div>

              </div>
          </div>
          {/* <Temp/> */}
      </div>
    </section>
  )
}

export default ControlCustom