import React from 'react'
import Image from 'next/image'
import header  from './assets/header.png'
function OurTeam() {
  return (
    <>
      <div className='w-full h-full bg-[#CFBCAE] flex flex-col items-center pb-[100px]'>
        <div className='text-center flex flex-col items-center'>
          <h1 className='text-[#2B231D] font-bold font-serif text-[70px]'>Our Team</h1>
          <Image src={header} alt="our team" />
          <p className='text-[#1E1E1E] tracking-wide w-[900px] text-[20px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem Lorem ipsum Lorem ipsum sit Lorem ipsum Lorem ipsum dolor</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-[250px] h-[350px] bg-[#fff] rounded-2xl shadow-2xl'></div>
          <button className='w-[160px] h-[50px] bg-[#fff] rounded-3xl border border-[#000] z-10'>Get in touch</button>
        </div>
      </div>
    </>
  )
}

export default OurTeam