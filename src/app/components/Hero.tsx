import { BackgroundImage, Box, Center, Chip } from '@mantine/core'
import { FaAngleRight } from 'react-icons/fa6'
import Header from './Header'
import Image from 'next/image'



export default function Hero() {
  return (
    <>
    <section className="home xl:pt-[100px] mb-[50px]   font-inter " id='Home'>
    <Header/>
    {/* < div className=" xl:max-w-[1400px] max-w-[970px] mx-auto w-full relative px-[30px]   min-h-[610px] lg:min-h-[700px] md:min-h-[920px]  flex flex-row  justify-between items-center mb-[50px] m-auto"   > */}
    < div className=" xl:max-w-[1400px] max-w-[970px] mx-auto w-full relative px-[30px]   min-[1400px]:min-h-[920px] lg:min-h-[810px] hlg:min-h-[700px] sm:min-h-[640px] h-auto flex flex-row  justify-between items-center  m-auto"   >
    {/* <div className=" w-full lg:max-w-[650px] transform translate-y-6 "> */}
    <div className=" md:w-1/2 transform translate-y-6 ">
          <div className="flex flex-col justify-center text-center items-center lg:items-start lg:text-left w-full ">
            <p className='cursor-pointer mb-[25px] text-[14px] flex flex-row items-center justify-center bg-white rounded-full py-[3px]  pl-1 pr-7'  >
                <strong className=" py-1.5 px-2 mr-2.5 bg-[#6b9eff] rounded-full font-semibold text-white text-[9px] md:text-[13px]  leading-[13px]">NEWS</strong>
                We have updated our term & condition policy
                <span className='opacity-40 ml-1.5'><FaAngleRight/></span>
              </p> 
              <h2 className='text-[26px] md:text-[32px] lg:text-[40px]  font-bold mb-[23px] leading-[1.8]  md:leading-[52px] lg:leading-[1.3] font-manrope item-slide-up xxl:text-[60px]' >The leading Customer Application for your daily workspace.</h2>
              <div className="md:w-[534px] w-full ">
                <p className='text-[13px] md:text-[18px] mb-[30px]  leading-[26px] md:leading-[39px] opacity-70  item-slide-up tracking-[0.1px] font-inter'  >
                  Flow adds smart capabilities on top of your bank accounts. Connect your banks to Flow and get complete control over your money instantly anytime.
                </p>
              </div>
              <div className="flex gap-5 justify-center lg:justify-start">
                <div className="">
                  {/* <img src='Image/hero/googleplay.png' className='cursor-pointer'/> */}
                  <Image  src='/Image/hero/googleplay.png' alt="googleplay" className='cursor-pointer' width={166} height={54}/>
                </div>
                <div className="">
                  <Image src='/Image/hero/applestore.png' alt="applestore" className='cursor-pointer' width={166} height={54}/>
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
      {/* <div className="relative  right-0 "> */}
      <div className="absolute right-0 bottom-0 w-1/2 ">
        <div className="   -mr-[71px] ml-[71px] ">

            <div className=" hidden hlg:flex max-w-full overflow-hidden relative">
            <Image
              src="/Image/hero/banner_image.webp"
              alt="bannerImg"
              className="w-full h-auto md:h-full max-w-[700px]  hlg:h-[522px] hlg:w-[410px]  lg:h-full lg:w-full "
              width={700}
              height={700}
              // layout='fill'
            />
          </div>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}
