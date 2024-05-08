
import React from 'react'


import './css/cafeher.css'

const Cafeher = () => {
  return (
    <>
      <div className='cafehead relative text-[#fff] h-full w-full flex flex-col justify-center items-center pt-[10px] pb-[100px] max-sm:py-[50px]'>
        <div className='w-[800px] h-[450px] max-lg:w-[600px] max-lg:h-[350px] max-md:w-[500px] max-md:h-[300px] max-sm:w-[230px] max-sm:h-[130px]'>
          <div className='flex flex-col items-center pt-[100px] max-sm:pt-[0px]' > 
            <h1 className='font-serif font-bold text-[70px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[25px]'>Our Cafe</h1>
            <p className='w-[110%] text-center text-[22px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[8px] tracking-wide'>Experience the essence of flavor at Bitty&apos;s Cafe, where each dish is a masterpiece crafted with local ingredients and global inspiration. Indulge in our specialty coffees and homemade treats amidst a cozy atmosphere that feels like home. Join us for a culinary adventure that celebrates taste, creativity, and community.</p>
          </div>
        </div>
        <div className='pt-[20px]'>
          <input className='max-md:text-[16px] max-sm:text-[8px] border border-[#CFBCAE] w-[600px] mr-[10px] max-lg:w-[500px] max-md:w-[400px] max-sm:w-[200px] h-[55px] max-md:h-[45px] max-sm:h-[35px] rounded-xl max-md:rounded-lg pl-[50px] max-sm:pl-[20px]' placeholder='Search Menu' />
          <button className='bg-[#2B231D] text-[#fff] h-[55px] w-[100px] max-md:w-[80px] max-sm:w-[50px] max-md:h-[45px] max-sm:h-[35px] max-md:text-[14px] max-sm:text-[11px]  rounded-xl max-md:rounded-lg'>Search</button>
        </div>
      </div>
    </>
  )
}

export default Cafeher
