import React from 'react'
import Image from 'next/image'
import headLine from './assets/header.png'
import pic1 from './assets/nahid photo.png'
function Review() {
  return (
    <>
      <div className='w-full h-full flex flex-col items-center bg-[#F7F9E7]'>
        <div className='mr-[750px] max-xl:mr-[650px] max-lg:mr-[550px] max-md:mr-[0px] flex flex-col items-center py-[20px]'>
          <Image className='max-xl:w-[200px] max-lg:w-[150px]' src={headLine} alt='line' />
          <h1 className='font-serif font-bold text-[70px] max-xl:text-[60px] max-lg:text-[50px] max-md:text-[45px] max-[550px]:text-[40px]'>Reviews</h1>
        </div>
        <div className=' pb-[45px]'>
          <div className='grid grid-cols-3 max-md:grid-cols-2 max-[550px]:grid-cols-1 max-[550px]:gap-x-0 gap-x-20 gap-y-10 max-xl:gap-x-10 max-xl:gap-y-5 max-lg:gap-x-5'>
            <div className='w-[300px] h-[230px] max-xl:w-[280px] max-xl:h-[210px] max-lg:w-[230px] max-lg:h-[180px] bg-[#fff] flex flex-col justify-between border border-black rounded-xl shadow-2xl py-5 px-5'>
              <p className='text-[20px] font-medium text-[#1E1E1E] max-xl:text-[18px] max-lg:text-[15px]'>&quot;A gem in Bhopal! Their cheesy toast is perfection!&quot;</p>
              <div className='flex'>
                <Image className='w-[70px] h-[70px] max-xl:w-[60px] max-xl:h-[60px] max-xl:w-[50px] max-xl:h-[50px] rounded-2xl' src={pic1} alt='pic' />
                <div className='pl-[50px] '>
                  <h1 className='font-serif text-[24px] max-xl:text-[22px] max-lg:text-[16px] tracking-tight font-bold'>Nahid Hasan</h1>
                  <p className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] font-normal text-[#2B231D]'>Chef</p>
                </div>
              </div>
            </div>
            <div className='w-[300px] h-[230px] max-xl:w-[280px] max-xl:h-[210px] max-lg:w-[230px] max-lg:h-[180px] bg-[#fff] flex flex-col justify-between border border-black rounded-xl shadow-2xl py-5 px-5'>
              <p className='text-[20px] font-medium text-[#1E1E1E] max-xl:text-[18px] max-lg:text-[15px]'>&quot;A gem in Bhopal! Their cheesy toast is perfection!&quot;</p>
              <div className='flex'>
                <Image className='w-[70px] h-[70px] max-xl:w-[60px] max-xl:h-[60px] max-xl:w-[50px] max-xl:h-[50px] rounded-2xl' src={pic1} alt='pic' />
                <div className='pl-[50px] '>
                  <h1 className='font-serif text-[24px] max-xl:text-[22px] max-lg:text-[16px] tracking-tight font-bold'>Nahid Hasan</h1>
                  <p className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] font-normal text-[#2B231D]'>Chef</p>
                </div>
              </div>
            </div>
            <div className='w-[300px] h-[230px] max-xl:w-[280px] max-xl:h-[210px] max-lg:w-[230px] max-lg:h-[180px] bg-[#fff] flex flex-col justify-between border border-black rounded-xl shadow-2xl py-5 px-5'>
              <p className='text-[20px] font-medium text-[#1E1E1E] max-xl:text-[18px] max-lg:text-[15px]'>&quot;A gem in Bhopal! Their cheesy toast is perfection!&quot;</p>
              <div className='flex'>
                <Image className='w-[70px] h-[70px] max-xl:w-[60px] max-xl:h-[60px] max-xl:w-[50px] max-xl:h-[50px] rounded-2xl' src={pic1} alt='pic' />
                <div className='pl-[50px] '>
                  <h1 className='font-serif text-[24px] max-xl:text-[22px] max-lg:text-[16px] tracking-tight font-bold'>Nahid Hasan</h1>
                  <p className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] font-normal text-[#2B231D]'>Chef</p>
                </div>
              </div>
            </div>
            <div className='w-[300px] h-[230px] max-xl:w-[280px] max-xl:h-[210px] max-lg:w-[230px] max-lg:h-[180px] bg-[#fff] flex flex-col justify-between border border-black rounded-xl shadow-2xl py-5 px-5'>
              <p className='text-[20px] font-medium text-[#1E1E1E] max-xl:text-[18px] max-lg:text-[15px]'>&quot;A gem in Bhopal! Their cheesy toast is perfection!&quot;</p>
              <div className='flex'>
                <Image className='w-[70px] h-[70px] max-xl:w-[60px] max-xl:h-[60px] max-xl:w-[50px] max-xl:h-[50px] rounded-2xl' src={pic1} alt='pic' />
                <div className='pl-[50px] '>
                  <h1 className='font-serif text-[24px] max-xl:text-[22px] max-lg:text-[16px] tracking-tight font-bold'>Nahid Hasan</h1>
                  <p className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] font-normal text-[#2B231D]'>Chef</p>
                </div>
              </div>
            </div>
            <div className='w-[300px] h-[230px] max-xl:w-[280px] max-xl:h-[210px] max-lg:w-[230px] max-lg:h-[180px] bg-[#fff] flex flex-col justify-between border border-black rounded-xl shadow-2xl py-5 px-5'>
              <p className='text-[20px] font-medium text-[#1E1E1E] max-xl:text-[18px] max-lg:text-[15px]'>&quot;A gem in Bhopal! Their cheesy toast is perfection!&quot;</p>
              <div className='flex'>
                <Image className='w-[70px] h-[70px] max-xl:w-[60px] max-xl:h-[60px] max-xl:w-[50px] max-xl:h-[50px] rounded-2xl' src={pic1} alt='pic' />
                <div className='pl-[50px] '>
                  <h1 className='font-serif text-[24px] max-xl:text-[22px] max-lg:text-[16px] tracking-tight font-bold'>Nahid Hasan</h1>
                  <p className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] font-normal text-[#2B231D]'>Chef</p>
                </div>
              </div>
            </div>
            <div className='w-[300px] h-[230px] max-xl:w-[280px] max-xl:h-[210px] max-lg:w-[230px] max-lg:h-[180px] bg-[#fff] flex flex-col justify-between border border-black rounded-xl shadow-2xl py-5 px-5'>
              <p className='text-[20px] font-medium text-[#1E1E1E] max-xl:text-[18px] max-lg:text-[15px]'>&quot;A gem in Bhopal! Their cheesy toast is perfection!&quot;</p>
              <div className='flex'>
                <Image className='w-[70px] h-[70px] max-xl:w-[60px] max-xl:h-[60px] max-xl:w-[50px] max-xl:h-[50px] rounded-2xl' src={pic1} alt='pic' />
                <div className='pl-[50px] '>
                  <h1 className='font-serif text-[24px] max-xl:text-[22px] max-lg:text-[16px] tracking-tight font-bold'>Nahid Hasan</h1>
                  <p className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] font-normal text-[#2B231D]'>Chef</p>
                </div>
              </div>
            </div>

            

            
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Review