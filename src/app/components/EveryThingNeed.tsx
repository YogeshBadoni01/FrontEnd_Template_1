"use client"
import React, { useState } from 'react'
import { Theme } from '../Theme/Theme'
import Image from 'next/image'


const theme = Theme
const EveryThingNeed = () => {
    const [hoverEffect, setHoverEffect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
  
    const handleMouseEnter = (index: React.SetStateAction<number>) => {
      setHoverEffect(true);
      setSelectedIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoverEffect(false);
      setSelectedIndex(-1);
    };
    const data = [
        {
            id:1,
            icon:"/Image/GridList/cards1.webp",
            text:"50+ Unique Design Blocks",
            color:"#f7433a19",
            color1:"#ff000",
        },
        {
            id:2,
            icon:"/Image/GridList/layout2.webp",
            text:"Multiple Layouts",
            color:"#5454d41a",
            color1:"#5454d4",
        },
        {
            id:3,
            icon:"/Image/GridList/smartphone3.webp",
            text:"Mobile First Design",
            color:"#fedc5a1a",
            color1:"#f3c826",
        },
        {
            id:4,
            icon:"/Image/GridList/sidebar4.webp",
            text:"Fully Responsive",
            color:"#5454d41a",
            color1:"#5454d4",
        },
        {
            id:5,
            icon:"/Image/GridList/grid5.webp",
            text:"Bootstrap 4 Framework",
            color:"#f040371a",
            color1:"#ff0000",
        },
        {
            id:6,
            icon:"/Image/GridList/grid5.webp",
            text:"Bootstrap 4 Framework",
            color:"#f040371a",
            color1:"#ff0000",
        },
        {
            id:7,
            icon:"/Image/GridList/shape7.webp",
            text:"Humanly Support",
            color:"#77bf411a",
            color1:"#77bf41",
        },
        {
            id:8,
            icon:"/Image/GridList/loop8.webp",
            text:"Lifetime Update",
            color:"#f040371a",
            color1:"#f04037",
        },
        {
            id:9,
            icon:"/Image/GridList/doc9.webp",
            text:"Rich Documentation",
            color:"#5454d41a",
            color1:"#5454d4",
        },
    ]
  return (
    <>
    <section className="container ">
        <div className="heading mb-[80px] flex justify-center">
            <h2 className='heading font-semibold'>It’s everything you’ll ever need</h2>
        </div>  

        <div className="Gridlist max-w-[1100px] mx-auto">
            <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-[25px]">
                {data.map((item, index) => (
                <div key={index} className={`flex flex-row justify-start items-center gap-[25px] p-3 rounded-full   border transition-all ease-in-out duration-300 cursor-pointer  item-slide-up font-bold text-[18px]   ${(index >= 3 && index <= 5) ? 'xl:grid-row-start-2 xl:grid-row-end-3 xl:transform xl:-translate-x-20' : ''}`} 
                // style={{background:`${hoverEffect && active ?`${item.color} ${!active}`:`${!hoverEffect}`}`}} 
                // onMouseEnter={()=>{setHoverEffect(!hoverEffect)}}
                style={{ background: hoverEffect && index === selectedIndex ? item.color : 'white' }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                >

                    <div className="p-[14px] ml-4 rounded-full " style={{ background: item.color }}>
                        <Image src={item.icon} alt={item.text} width={26} height={26} objectFit='cover'/>
                    </div>
                    <p>{item.text}</p>
                </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}
export default EveryThingNeed