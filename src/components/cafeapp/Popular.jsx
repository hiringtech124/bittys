import React from 'react'
import img from './assets/esd.png'
import img1 from './assets/latte.png'
import Image from 'next/image'


const Popular = () => {
  return (
    <>
      <div className='flex justify-center items-center flex-col h-full w-full pt-[20px] pb-[70px] max-md:pb-[40px]'>

        <Image className='max-xl:w-[250px] max-lg:w-[200px] max-md:w-[150px] max-sm:w-[100px]' src={img} alt='efd' />
        <h1 className='text-[70px] max-xl:text-[55px] max-lg:text-[45px] max-md:text-[35px] max-sm:text-[25px] mb-[20px] font-serif font-bold text-[#2B231D]'>Most Popular</h1>
        <Image className='w-[80%] h-[auto] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' src={img1} alt='cafelatte'/>
      </div>

    </>
  )
}

export default Popular
