import React from 'react'
import Image from 'next/image'
import headLine from './assets/header.png'

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
              <p className='text-[20px] tracking-tighter leading-5 text-justify font-medium text-[#1E1E1E] max-xl:text-[18px] max-lg:text-[14px] max-md:text-[13px]'>&quot;Bitty&apos;s Cafe in Indore has become my go-to spot for a quick bite and a relaxing coffee. The ambience is cozy and perfect for a casual hangout.!&quot;</p>                
              <h1 className='w-full flex justify-end font-serif text-[24px] max-xl:text-[22px] max-lg:text-[16px] tracking-tight font-bold'>Divyanshu</h1>
            </div>
            <div className='w-[300px] h-[230px] max-xl:w-[280px] max-xl:h-[210px] max-lg:w-[230px] max-lg:h-[180px] bg-[#fff] flex flex-col justify-between border border-black rounded-xl shadow-2xl py-5 px-5'>
              <p className='text-[20px] tracking-tighter leading-5 font-medium text-[#1E1E1E] max-xl:text-[18px] max-lg:text-[14px] max-md:text-[13px]'>&quot;I had an amazing experience at Bitty&apos;s Cafe last weekend. The menu offers a great variety, and everything I tried was delicious.!&quot;</p>
              <h1 className='w-full flex justify-end font-serif text-[24px] max-xl:text-[22px] max-lg:text-[16px] tracking-tight font-bold'>Aman</h1>
            </div>
            <div className='w-[300px] h-[230px] max-xl:w-[280px] max-xl:h-[210px] max-lg:w-[230px] max-lg:h-[180px] bg-[#fff] flex flex-col justify-between border border-black rounded-xl shadow-2xl py-5 px-5'>
              <p className='text-[20px] tracking-tighter leading-5 font-medium text-[#1E1E1E] max-xl:text-[18px] max-lg:text-[14px] max-md:text-[13px]'>&quot;Bitty&apos;s Cafe is a hidden gem in Indore! The food is simply outstanding. I tried their veggie platter and it was fresh and flavorful. !&quot;</p>             
              <h1 className='w-full flex justify-end font-serif text-[24px] max-xl:text-[22px] max-lg:text-[16px] tracking-tight font-bold'>Ashutosh</h1>
            </div>
            <div className='w-[300px] h-[230px] max-xl:w-[280px] max-xl:h-[210px] max-lg:w-[230px] max-lg:h-[180px] bg-[#fff] flex flex-col justify-between border border-black rounded-xl shadow-2xl py-5 px-5'>
              <p className='text-[20px] tracking-tighter leading-5 font-medium text-[#1E1E1E] max-xl:text-[18px] max-lg:text-[14px] max-md:text-[13px]'>&quot;The cafe has a warm, inviting atmosphere and the food is top-notch. The gourmet sandwiches and freshly brewed coffee were the highlights for me.!&quot;</p>
              <h1 className='w-full flex justify-end font-serif text-[24px] max-xl:text-[22px] max-lg:text-[16px] tracking-tight font-bold'>Anjali</h1>
            </div>
            <div className='w-[300px] h-[230px] max-xl:w-[280px] max-xl:h-[210px] max-lg:w-[230px] max-lg:h-[180px] bg-[#fff] flex flex-col justify-between border border-black rounded-xl shadow-2xl py-5 px-5'>
              <p className='text-[20px] tracking-tighter leading-5 font-medium text-[#1E1E1E] max-xl:text-[18px] max-lg:text-[14px] max-md:text-[13px]'>&quot;Bitty&apos;s Cafe has become one of my favorite spots in Indore. The ambience is cozy and stylish, perfect for a casual meetup.!&quot;</p>
              <h1 className='w-full flex justify-end font-serif text-[24px] max-xl:text-[22px] max-lg:text-[16px] tracking-tight font-bold'>Krishna</h1>
            </div>
            <div className='w-[300px] h-[230px] max-xl:w-[280px] max-xl:h-[210px] max-lg:w-[230px] max-lg:h-[180px] bg-[#fff] flex flex-col justify-between border border-black rounded-xl shadow-2xl py-5 px-5'>
              <p className='text-[20px] tracking-tighter leading-5 font-medium text-[#1E1E1E] max-xl:text-[18px] max-lg:text-[14px] max-md:text-[13px]'>&quot;Had a fantastic time at Bitty&apos;s Cafe! The place is beautifully decorated and has a very relaxing vibe.!&quot;</p>
              <h1 className='w-full flex justify-end font-serif text-[24px] max-xl:text-[22px] max-lg:text-[16px] tracking-tight font-bold'>Mukul</h1>
            </div>                 
          </div>
        </div>
      </div>
    </>
  )
}

export default Review