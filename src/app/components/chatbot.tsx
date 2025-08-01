// import { Button } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Chatbot = () => {

  return (
    <div className='fixed bottom-[30px] right-0  z-[500]  w-[100px] ml-auto  '>
        {/* <div className=" transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110  duration-300 animate-bounce"> */}
        {/* <div className=" transition ease-in-out delay-150   myChatBot"> */}
        <div className="transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-300 myChatBot">

            <Link href="#">
                {/* <img src="/Image/chatbot.png" className=' w-[64px] h-[64px]' /> */}
                
                <Image
                        src="/Image/chatbot.png"
                        alt="Chatbot icon for support" 
                        width={64} 
                        height={64} 
                        className='w-[64px] h-[64px]' 
                    />
            </Link>
        </div>
        {/* <button  className='font-bold bg-[#6b9eff] hover:bg-[#3c74ff] text-white border-none outline-none px-3 pt-3 pb-2.5 '>
            
            <div className="flex flex-col ">
                <div className="">D</div>
                <div className="">E</div>
                <div className="">M</div>
                <div className="">0</div>
                <div className="">S</div>
            </div>
        </button> */}
    </div>
  )
}

export default Chatbot