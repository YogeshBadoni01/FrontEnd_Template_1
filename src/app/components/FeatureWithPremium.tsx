import React from 'react'
import { FaAngleRight, FaArrowRight } from 'react-icons/fa6'
import { Theme } from '../Theme/Theme'
import Link from 'next/link'

const theme= Theme
const FeatureWithPremium = () => {
    const data = [

        {
            Question:"Can I use Omega for my clients?",
            Answer:"Absolutely. The Envato Theme license allows you to build a websites for personal use or for a client. User Omega for your clients.",
        },
        {
            Question:"Do I get free updates?",
            Answer:"Yes. We update all of our themes regularly, plus are constantly adding new components, pages, and features to our themes. Purchase once and get lifetime updates.",
        },
        {
            Question:"Does it work with WordPress?",
            Answer:"Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. ",
        },
        {
            Question:"Will you provide support?",
            Answer:"With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website.",
        },
    ]
  return (
    <>
        <div className=" bg-black xl:pt-[195px] pt-[0px] px[30px]" >
            <div className="min-[992px]:max-w-[1170px] md:max-w-[970px] max-w-[750px] m-auto pt-[150px] px-[30px] ">
                <ul className='grid md:grid-cols-2 grid-cols-1 gap-y-[66px] gap-x-[140px]'>
                    {
                        data.map((item,index)=>(
                            <li className='flex justify-start items-start text-white item-slide-up' key={index}>
                                <div className="mr-[21px]">
                                    <FaArrowRight className="w-[30px] h-[30px] p-2 rounded-full text-[13px]" style={{background:theme?.colors?.primary?.[0]}}/>
                                </div>
                                <div className="text-start text-base">
                                    <h4 className='font-bold leading-[1.87] mb-2'>{item.Question}?</h4>
                                    <p className='opacity-80 leading-[1.73]'>{item.Answer}</p>
                                </div>
                            </li>
                        ))
                    }
                  
                </ul>
                <div className="pt-[45px] pb-[60px] text-white text-center" id='Contect us'>
                    <div className=" px-[30px] m-auto">
                        <div className="pt-[102px] m-auto w-full">
                            <h2 className='mb-[15px] mx-auto text-lg md:text-[28px] lg:text-[32px] font-bold'>Explore ultimate feature with premium</h2>
                            <p className='opacity-70 leading-loose max-w-[575px] mx-auto mb-[41px]'>Tell us your Apple ID email address so we could send you a TestFlight invitation directly.</p>
                            
                            <Link href="" className={` m-auto px-[30px] py-[22px] rounded-full font-bold inline-block transition-all ease-in-out duration-200 bg-[#6b9eff] hover:bg-[#3c74ff]`}  >
                                <span>Start 14 Days Free Trial</span>
                            </Link>

                            <span className='block opacity-60 mt-[17px]'>No credit card required</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default FeatureWithPremium