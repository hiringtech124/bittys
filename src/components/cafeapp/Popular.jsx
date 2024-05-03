import React from 'react'
import img from './assets/esd.png'
import imgg from './assets/Group 157.png'
import Image from 'next/image'

const Popular = () => {
  return (
    <>
      <div className='flex most popular h-full'>
        <div className='max-w-7xl mx-auto flex justify-center items-center flex-col'>
          <Image src={img} alt='efd'/>
          <h1 className='text-[100px] text-[#2B231D]'>Most Popular</h1>
          <Image src={imgg} alt='wefd' />
        </div>
      </div>
    </>
  )
}

export default Popular
