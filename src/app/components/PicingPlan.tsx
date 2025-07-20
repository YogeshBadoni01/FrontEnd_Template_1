"use client"

import { Group, Radio, Switch } from '@mantine/core'
import React, { useState } from 'react'
import { Theme } from '../Theme/Theme'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'
import Link from 'next/link'
import { Inter, Manrope } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable:'--font-inter',
    display:'swap'
  });
  
  const manrope = Manrope({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'] ,
  });

const theme = Theme
const PicingPlan = () => {
    const [price, setPrice]=useState(true)


    
    const plans = [
        {
            planName:"Starter Plan",
            Monthlyprice:19,
            Yearlyprice:228,
            price:19,
            feature1:"Unlimited Connections",
            feature2:"Basic Actions & Triggers",
            feature3:"Draft Payments ",
            feature4:"Unlimited Flows & Supports ",
            feature5:"Lifetime updates ",

        },
        {
            planName:"Business Plan",
            Monthlyprice:49,
            Yearlyprice:588,
            price:49,
            feature1:"Unlimited Connections",
            feature2:"Basic Actions & Triggers",
            feature3:"Draft Payments ",
            feature4:"Unlimited Flows & Supports ",
            feature5:"Lifetime updates ",

        },
    ]
  return (
    // <div className='home pt-[40px] md:pt-[40px] xl:pt-[100px] 2xl:pt-[126px] xl:pb-[150px] pb-[90px] font-inter' id='Pricing'>
    <div className='home pt-[40px] md:pt-[40px] xl:pt-[100px] xxl:pt-[126px] xl:pb-[150px] pb-[90px] font-inter px-1' id='Pricing'>
        <div className=" mb-[34px] flex justify-center items-center flex-col m-auto max-w-[440px] text-center">
            <div className=" mb-[34px] mx-auto">
                <h2 className='heading  font-bold leading-9 mb-4'>Meet exciting Pricing Plans</h2>
                <p className='md:text-[16px] text-[18px] opacity-70 leading-[2.125]'>Create custom landing pages with us so that converts more visitors than any website.</p>
            </div>
            <div className="flex justify-center items-center gap-[17px]">
                <div className="m-auto">
                  
                    <div className="flex flex-row gap-5 justify-center items-center text-[17px] font-medium cursor-pointer">
                        <span className={`${price?`text-[${Theme?.colors?.primary?.[0]}] `:``} `} onClick={()=>{setPrice(!price)}}>Monthly</span> 
                            <Switch checked={!price} onChange={() => setPrice((prev) => !prev) } color={Theme?.colors?.primary?.[0]}  size='lg'/> 
                        <span className={`${price?``:`text-[${Theme?.colors?.primary?.[0]}]`}`} onClick={()=>{setPrice(!price)}}>Yearly</span>
                    </div>
                </div>
                <div className="px-[9px] py-1.5  text-[13px] rounded-md text-white font-semibold" style={{background:theme?.colors?.primary?.[8]}}>
                    Save 25%
                </div>
            </div>
            
            <div className="m-auto w-full xl:mb-[-394px] pt-[40px] md:pt-[40px] xl:pt-[100px] xxl:pt-[126px] ">
                <div className=" ">

                    <div className=" flex flex-row items-center md:justify-center  justify-start  md:gap-[40px] gap-[30px] overflow-x-scroll md:overflow-visible ">
                        {
                            plans.map((item,index)=>(
                                <div className="block hover:-translate-y-10 duration-1000 ease-out" key={index}>

                                    <div className="flex justify-center items-start  xl:min-w-[535px] md:min-w-[440px] min-w-[305px] ">
                                            
                                    <div className="rounded-[10px] bg-white w-full">
                                        <div className="text-[14px] md:text-[18px] xl:text-sm w-full xl:py-[34px] xl:px-[95px] lg:px-[30px] lg:py-[30px] px-[20px] py-[20px]">
                                                
                                            <div className="mb-[46px]">
                                                <h3 className='text-[20px] mb-4  block font-manrope leading-[1.35]' style={{color:theme?.colors?.primary?.[0]}}>{item.planName}</h3>
                                                <div className='text-[30px] mb-2.5 block md:leading-[80px] leading-none font-medium'>
                                                    <span>$</span>
                                                    <span className='xxl:text-[80px] xl:text-[50px]  md:text-[30px] inline-block  '>{price?`${item.Monthlyprice}`:`${item.Yearlyprice}`}</span>
                                                    
                                                    <span>/mo</span>
                                                </div>
                                                <p className='mb-4 opacity-80 text-[18px]'>Per user</p>
                                            </div>
                                            <ul className='last:-mb-[21px]'>
                                                <li className='flex flex-row justify-start items-center mb-[21px] 21px] text-[16px] md:text-[18px] '>
                                                    <FaCheck className="mr-3 w-[30px] h-[30px] p-1.5 opacity-70" style={{color:theme?.colors?.primary?.[0],background:theme?.colors?.primary?.[9]}} /> 
                                                    <span>{item.feature1}</span> 
                                                </li>
                                                <li className='flex flex-row justify-start items-center mb-[21px] text-[16px] md:text-[18px]'>
                                                    <FaCheck className="mr-3 w-[30px] h-[30px] p-1.5 opacity-70" style={{color:theme?.colors?.primary?.[0],background:theme?.colors?.primary?.[9]}} /> 
                                                    <span>{item.feature2}</span> 
                                                </li>
                                                <li className='flex flex-row justify-start items-center mb-[21px] text-[16px] md:text-[18px]'>
                                                    <FaCheck className="mr-3 w-[30px] h-[30px] p-1.5 opacity-70" style={{color:theme?.colors?.primary?.[0],background:theme?.colors?.primary?.[9]}} /> 
                                                    <span>{item.feature3}</span> 
                                                </li>
                                                <li className='flex flex-row justify-start items-center mb-[21px] text-[16px] md:text-[18px]'>
                                                    <FaCheck className="mr-3 w-[30px] h-[30px] p-1.5 opacity-70" style={{color:theme?.colors?.primary?.[0],background:theme?.colors?.primary?.[9]}} /> 
                                                    <span>{item.feature4}</span> 
                                                </li>
                                                <li className='flex flex-row justify-start items-center mb-[21px] text-[16px] md:text-[18px]'>
                                                    <FaCheck className="mr-3 w-[30px] h-[30px] p-1.5 opacity-70" style={{color:theme?.colors?.primary?.[0],background:theme?.colors?.primary?.[9]}} /> 
                                                    <span>{item.feature5}</span> 
                                                </li>
                                            </ul>
                                            </div>
                                                <div className=" font-bold px-[30px] py-[25px] text-white rounded-b-[10px] text-lg font transition-all ease-in-out duration-200 bg-[#6b9eff] hover:bg-[#3c74ff] font-inter text-[16px] md:text-[18px]" >
                                                    <Link href="#">Start 14 Days Free Trial</Link>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default PicingPlan