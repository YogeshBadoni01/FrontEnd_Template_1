"use client"
import React, { useState } from 'react'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'
import classes from './CustomerCarousel.module.css'
import { FaArrowRight, FaStar } from 'react-icons/fa6'
import { Button } from '@mantine/core'
import Link from 'next/link'
import { Theme } from '../Theme/Theme'


const theme = Theme
const CustomerCarosal = () => {
  let [indicater,setIndicater]=useState<number>(0)
  
  const ScrollHandler = (index: number) => {
    setIndicater(index);
  };


  const data = [
    {
      comma:"/Image/Carousal/left-quote.png",
      para:"OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce template with modern and trending design. We deliver on such an expansive with innovation agenda with so many theme projects.",
      person:"Mariana Dickey",
      occupation:"Head of Design by GeekWire",
      logo:"/Image/Carousal/Geekwire.png",
      PersonImg:"/Image/Carousal/client1.png",
      OfficeName:"GeekWire"
    },
    {
      comma:"/Image/Carousal/left-quote.png",
      para:"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
      person:"Jonathan Taylor ",
      occupation:"Head of Communication by Envato",
      logo:"/Image/Carousal/envato.png",
      PersonImg:"/Image/Carousal/client2.png",
      OfficeName:"Envato"
    },
    
    
   
  ]
  return (
    <>
      <section className='container'>
         <div className="pt-[75px] xl:pt-[150px] md:pt-[100px] pb-[160px] " id='Testmonial'>
            <div className="heading mb-[80px] flex justify-center ">
                <h2 className='text-[18px] md:text-[26px] font-bold'>What's client say about us</h2>
            </div> 
            <div className="xl:w-[1170px] lg:w-[910px] max-md:w-[690px]  sm:w-full m-auto -mb-[5px]">
            <Carousel   classNames={classes}  loop withControls={false} onSlideChange={(index:number)=>{ScrollHandler(index)}} withIndicators >
              {
                data.map((item,index)=>(
              <Carousel.Slide  key={index}>
                <div className="bg-white mb-10">

                  <div className="  grid grid-cols-6 max-lg:pt-[70px] md:pt-[90px] mb-[56px] md:pb-[73px] px-[46px] md:px-[80px] item-slide-up ">

                    <div className=" col-span-6 md:col-span-4 flex flex-col justify-center relative pt-4">
                        <div className="absolute -top-[45px] ">
                          <img src={item.comma} alt='comma' />
                        </div>

                        <p className='text-[14px] md:text-[20px] leading-[210%] italic mb-[23px]'>{item.para}</p>
                        
                        <div className="flex justify-start items-center gap-[10px]">
                              <div className="md:hidden ">
                                <img src={item.PersonImg} alt={item.person} className='w-[75px] h-[75px] rounded-full'/>
                              </div>
                            <div className="">
                              <div className="">
                                <h3 className='text-base md:text-lg mb-1.5 font-semibold'>{item.person}</h3>
                                <p className='text-[14px] md:text-base mb-4 opacity-70'>{item.occupation}</p>
                              </div>

                              <div className="">
                                <img src={item.logo} alt={item.logo}  className='max-w-[130px] '/>
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 md:inline-block hidden">
                      <div className="relative  flex justify-center">
                      <div className="rating flex px-[26px] py-[14px] bg-white absolute bottom-0 mx-auto left-0 right-0 w-fit rounded-full  ">
                          <FaStar className="text-yellow-400 text-[22px] mr-1"/>
                          <FaStar className="text-yellow-400 text-[22px] mr-1"/>
                          <FaStar className="text-yellow-400 text-[22px] mr-1"/>
                          <FaStar className="text-yellow-400 text-[22px] mr-1"/>
                          <FaStar className="text-yellow-400 text-[22px] mr-1"/>
                      </div>
                      <div className="rounded-full">
                        <img src={item.PersonImg} alt={item.person} className='rounded-full'/>
                      </div>
                      </div>
                    </div>
                  </div>
              <div className="group flex justify-center items-center text-[13px] md:text-[15px] mb-5 px-[15px] py-[23px]" style={{color:theme?.colors?.primary?.[7]}}>
                  <Link href="" >Read the {item.OfficeName} case study</Link>
                  <FaArrowRight className="ml-[9px] group-hover:ml-4"/>
                </div>
                </div>
              </Carousel.Slide>
                ))
              }

            </Carousel>

              {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Button variant="gradient" style={{ margin: '0 4px  ' }} className='bg-black w-5 h-2'></Button>
              </div>
                 */}
              {
                <div className="flex justify-center">

                  {/* <p>{indicater}</p> */}
                  {/* {
                    data.map((item,index)=>(
                      <div style={{  marginTop: '10px' }} className=''>
                          <Button key={index} variant="gradient" style={{ margin: '0 4px' }} className={` border-solid border max-w-[4px] h-2 ${index==indicater? "bg-black border-[1px] max-w-[16px] ":"bg-gray-300 border-[1px]  max-w-[12px] "}`}></Button>
                      </div>
                    ))
                  }
                   */}
                </div>
              }
            </div>

        </div>   
      </section>
    </>
  )
}

export default CustomerCarosal