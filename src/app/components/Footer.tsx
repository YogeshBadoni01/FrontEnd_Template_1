import Link from 'next/link'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdCall } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
    const data = [
        {
            heading:"About us",
            list:[
                "Support Center",
                "Customer Support",
                "About Us",
                "Copyright",
                "Popular Campaign",
            ]
        },
        {
            heading:"Our Information",
            list:[
                "Return Policy ",
                "Privacy Policy",
                "Terms & Conditions",
                "Site Map",
                "Store Hours",
            ]
        },
        {
            heading:"My Account",
            list:[
                "Press inquiries ",
                "Social media ",
                "directories",
                "Images & B-roll",
                "Permissions",
            ]
            
        },
    ]
  return (
    <>
        <div className="pt-[50px]">
            <div className="xl:min-w-[1340px] hlg:w-[970px] md:w-[750px]  mb-[30px] m-auto px-[30px]">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5  max-xl:gap-[30px]">
                    
                    <div className="mr-[80px] max-md:col-span-2">
                        <Link href="#" className='mb-[25px] inline-block'>
                            {/* <img src="/Image/footer/logo.png" alt="logo" /> */}
                            <Image  src="/Image/footer/logo.png" alt="logo" width={148} height={61} />
                        </Link>
                        <p className='text-[15px] leading-loose'>We run Advanced Search reports on the criteria you care about to see how work is progressing and where to focus your effort.</p>
                    </div>

                    {/* <div className="grid grid-cols-3 col-span-3 lg:grid-cols-2"> */}
                            <div className=" text-base text-left">
                                <h4 className='text-[17px] mb-[25px] font-bold leading-7'>About us</h4>
                                <ul >
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">Support Center </Link> </li>
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">Customer Support </Link> </li>
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">About Us </Link> </li>
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">Copyright </Link> </li>
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">Popular Campaign </Link> </li>
                                </ul>
                            </div>
                            <div className=" text-base text-left">
                                <h4 className='text-[17px] mb-[25px] font-bold leading-7'>Our Information</h4>
                                <ul >
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">Return Policy  </Link> </li>
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">Privacy Policy </Link> </li>
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">Terms & Conditions </Link> </li>
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">Site Map </Link> </li>
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">Store Hours </Link> </li>
                                </ul>
                            </div>
                            <div className=" text-base text-left max-md:col-span-2">
                                <h4 className='text-[17px] mb-[25px] font-bold leading-7'>My Account</h4>
                                <ul >
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">Press inquiries </Link> </li>
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">Social media </Link> </li>
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">directories </Link> </li>
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">Images & B-roll </Link> </li>
                                    <li className='text-sm leading-9 opacity-60 hover:opacity-100'> <Link href="#">Permissions </Link> </li>
                                </ul>
                            </div>
                        {/* </div> */}
                    {/* <div className="grid grid-cols-3 col-span-3 lg:grid-cols-2">
                    {
                        data.map((item)=>(
                            <div className=" text-base text-left">
                                <h4 className='text-[17px] mb-[25px] font-bold leading-7'>{item.heading}</h4>
                                <ul >
                                    {item.list.map((list, index) => (
                                        <li className='text-sm leading-9 opacity-60'> <Link href="#"key={index}>{list}</Link> </li>
                                        ))}
                                </ul>
                            </div>
                            ))
                        }
                        </div> */}
                    <div className=" text-base text-left max-md:col-span-2">
                        <h4 className='text-[17px] mb-[25px] font-bold leading-7'>Contect Us</h4>
                        <ul>
                            <li className='text-sm leading-9 opacity-60'> 
                                <Link href="#" className='flex justify-start items-start'>
                                    <div className="mt-3">
                                        <FaLocationDot className="mr-3"/>
                                    </div>
                                    <div className="">
                                        <p>Amsterdam, Netherlands</p>
                                    </div>
                                </Link>
                             </li>
                            <li className='text-sm leading-9 opacity-60'> 
                                <Link href="#" className='flex justify-start items-start'>
                                    <div className="mt-3">
                                        <MdCall className="mr-3"/>
                                    </div>
                                    <div className="">
                                        <p>+012 34 56 78 910</p>
                                        <p>7 Days - 8am - 10pm</p>
                                    </div>
                                </Link>
                             </li>
                            <li className='text-sm leading-9 opacity-60'> 
                                <Link href="#" className='flex justify-start items-start'>
                                    <div className="mt-3">
                                        <FaTelegramPlane className="mr-3"/>
                                    </div>
                                    <div className="">
                                        <p>info@demo.com</p>
                                    </div>
                                </Link>
                             </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="xl:min-w-[1340px] hlg:w-[970px] md:w-[750px]  mb-[30px] m-auto mt-[60px] pt-10 pb-[45px]">
            {/* <div className="mt-[60px] pt-10 pb-[45px]"> */}
                <div className="text-base flex flex-row justify-between max-lg:flex-col gap-[30px] max-lg:text-center px-[30px] ">
                    <p className=''>Copyright © 2021 Superprops. All rights reserved</p>
                    <ul className='flex gap-10 justify-center items-center md:items-stretch '>
                        <li><Link href="#">Support</Link></li>
                        <li><Link href="#">Hiring</Link></li>
                        <li><Link href="#">Privacy</Link></li>
                        <li><Link href="#">Terms</Link></li>
                    </ul>
                    <div className="flex justify-center items-center">
                        <span>Social:</span>
                        <ul className='flex'>
                            <li className='ml-[15px]'> <Link href="http://facebook.com">
                                <Image src="/Image/Social/facebook.png" alt="facebook" width={25} height={25} />
                            </Link></li>
                            <li className='ml-[15px]'> <Link href="http://twitter.com">
                                <Image src="/Image/Social/twitter.png" alt="twitter" width={25} height={25} />
                                </Link></li>
                            <li className='ml-[15px]'> <Link href="http://dribbble.com">
                                <Image src="/Image/Social/dribbble.png" alt="dribbble" width={25} height={25} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>        
    </>
  )
}

export default Footer