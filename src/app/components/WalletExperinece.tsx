import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { IoCheckmark } from 'react-icons/io5'
import { Theme } from '../Theme/Theme'
import { Manrope } from 'next/font/google'
import Image from 'next/image'

const theme = Theme
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'] as const,
});


const WalletExperinece = () => {
  
  return (
    <section className="container pt-[150px] pb-[70px] ">
        <div className=" flex flex-row   py-[100px] m-auto h-full">

            <div className="flex md:justify-start justify-center items-center text-base md:flex-row flex-col m-auto ">
                <div className="  lg:flex basis-full order-2 md:order-1 item-slide-up">
                    {/* <img src='Image/WalletExpe/wallet-experience.webp' className='md:w-full w-[452px] md:h-full h-[485px]' width={630} height={676} /> */}
                    <Image src='/Image/WalletExpe/wallet-experience.webp' className='md:w-full w-[452px] md:h-full h-[485px]' alt="wallet" width={630} height={676} />
                </div>

                <div className="flex flex-col justify-center text-center items-center lg:items-start lg:text-left basis-full  md:ml-[80px] md:min-w-[520px] order-1 md:order-2 m-auto ">
                    <p className=' mb-4 font-bold' style={{color:Theme.colors?.primary?.[3]}}>Ultimate wallet experience</p>
                    {/* <h2 className='2xl:text-[40px] text-[30px] font-extrabold leading-snug mb-4' style={{ fontFamily: `${Theme?.fontFamily}` }}> */}
                    <h2 className='xxl:text-[40px] md:text-[30px] text-[18px] font-bold leading-snug  font-manrope mb-4' >
                        Take your wallet experience to new ultimate level</h2>
                    <p className='opacity-70 mb-4 text-[16px] md:text-[18px]'>Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.</p>
                    <ul className='mt-[30px] flex lg:flex-col md:flex-row flex-col max-w-[450px]'>
                        <li className='flex justify-start lg:flex-row md:flex-col flex-col items-center gap-[15px]  mt-[30px]   '> 
                            <Image src="/Image/WalletExpe/icon_1.webp" alt="Icons1" className='mr-[14px] myskew' width={60} height={60} />
                            <div className=''>
                                <h4 className='text-base font-bold leading-[1.87] mb-1'>Fast & Instant Transfer</h4>
                                <p className='text-[15px] font-medium leading-[1.73] mb-1 opacity-80'>We’re driven beyond just finishing the projects. We want to find solutions.</p>
                            </div>
                        </li>
                        <li className='flex justify-start lg:flex-row md:flex-col flex-col items-center gap-[15px]  mt-[30px]   '>
                             <Image src="/Image/WalletExpe/icon_2.webp" alt="Icons2" className='mr-[14px] myskew' width={60} height={60}/>
                            <div className=''>
                                <h4 className='text-base font-bold leading-[1.87] mb-1'>File Management System</h4>
                                <p className='text-[15px] font-medium leading-[1.73] mb-1 opacity-80'>We’re driven beyond just finishing the projects. We want to find solutions with the assessment.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WalletExperinece