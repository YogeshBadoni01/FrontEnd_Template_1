import { BackgroundImage, Box, Center, Chip } from '@mantine/core'
import Image from 'next/image'
import { Theme } from '../Theme/Theme'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import { Manrope } from 'next/font/google'
import Header from './Header'
// import {inter,manrope} from '../../utils/font'

const theme= Theme;

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'] as const,
});

export default function Hero() {
  return (
    <>
    <section className="home xl:pt-[100px]   font-inter " id='Home'>
    <Header/>
    < div className=" xl:max-w-[1400px] max-w-[970px] mx-auto w-full relative px-[30px]   min-h-[610px] lg:min-h-[700px] md:min-h-[810px]  flex flex-row  justify-between items-center mb-[50px] m-auto"   >
    <div className=" w-full lg:max-w-[650px] transform translate-y-6 ">
          <div className="flex flex-col justify-center text-center items-center lg:items-start lg:text-left w-full ">
            <p className='mb-[25px] text-[14px] flex flex-row items-center justify-center bg-white rounded-full py-[3px]  pl-1 pr-7'  >
                <strong className=" py-1.5 px-2 mr-2.5 bg-[#6b9eff] rounded-full font-semibold text-white text-[9px] md:text-[13px]  leading-[13px]">NEWS</strong>
                We have updated our term & condition policy
                <span className='opacity-40 ml-1.5'><FaAngleRight/></span>
              </p> 
              <h2 className='text-[26px] md:text-[32px] lg:text-[40px] 2xl:text-[60px] font-bold mb-[23px] leading-[1.8]  md:leading-[52px] lg:leading-snug font-manrope item-slide-up' >The leading Customer Application for your daily workspace.</h2>
              <div className="md:w-[534px] w-full ">
                <p className='text-[13px] md:text-[18px] mb-[30px]  leading-[26px] md:leading-[39px] opacity-70 font-manrope item-slide-up tracking-[0.1px]'  >
                  Flow adds smart capabilities on top of your bank accounts. Connect your banks to Flow and get complete control over your money instantly anytime.
                </p>
              </div>
              <div className="flex gap-5 justify-center lg:justify-start">
                <div className="">
                  <img src='Image/hero/googleplay.png'/>
                </div>
                <div className="">
                  <img src='Image/hero/applestore.png'/>
                </div>
              </div>
          </div>
      </div>
      {/* <figure className='relative top-28 right-0 -mr-[71px]'>
        <div className="relative">
          <div className="  hidden lg:flex item-slide-up -ml-28">
            <img src='Image/hero/banner_image.webp' className='lg:w-[570px] lg:mr-[70px] xl:w-full w-[410px]  h-[522px] xl:h-full self-end'/>
          </div>
        </div>
      </figure> */}
      <div className="relative  right-0">
            <div className="max-w-full overflow-hidden relative">
            <img
              src="Image/hero/banner_image.webp"
              alt="bannerImg"
              className="w-full h-auto md:h-full min-[992px]:h-[364px] lg:h-full"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
