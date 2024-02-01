// import { Button } from '@mantine/core'
import React from 'react'

const Sidebtn = () => {

  return (
      <div className='group fixed top-[calc(55%-100px)] right-0  z-[500]  ml-auto'>
          {/* <but */}
          <button  className=' bg-[#6b9eff] hover:bg-[#3c74ff] text-white border-none outline-none px-[15px] pt-3 pb-2.5 leading-[1.334] font-normal'>
              
              <div className="flex flex-col text-[12px] transition-all group-hover:-translate-x-2">
                  <div className="">D</div>
                  <div className="">E</div>
                  <div className="">M</div>
                  <div className="">0</div>
                  <div className="">S</div>
              </div>
              
          </button>
      </div>
  )
}

export default Sidebtn