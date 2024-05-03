import React from 'react'
import Image from 'next/image'
import header from './assets/header.png'
function OurTeam() {
  return (
    <>
      <div className='w-full h-full bg-[#CFBCAE] flex flex-col items-center pb-[80px]'>
        <div className='text-center flex flex-col items-center pb-[30px] pt-[30px]'>
          <h1 className='text-[#2B231D] font-bold tracking-wide font-serif text-[70px] max-xl:text-[55px] max-md:text-[45px] max-sm:text-[35px]'>Our Team</h1>
          <Image className='max-sm:w-[200px]' src={header} alt="our team" />
          <p className='text-[#1E1E1E] tracking-wide w-[900px] max-xl:w-[700px] max-md:w-[500px] max-sm:w-[250px] text-[32px] max-xl:text-[26px] max-md:text-[22px] max-sm:text-[16px]'>&quot;Discover the Faces Behind Your Favorite Flavors: Introducing Our Culinary Dream Team.&quot;</p>
        </div>
        <div className='flex max-lg:grid max-lg:grid-cols-2 max-[550px]:grid-cols-1 max-lg:gap-10'>
          <div className='flex flex-col items-center mr-[50px] max-xl:mr-[20px] max-lg:mr-[0px] relative'>
            <div className='w-[250px] h-[350px] max-xl:w-[220px] max-xl:h-[320px] max-sm:w-[200px] max-sm:h-[300px] flex flex-col items-center justify-end pb-[30px] bg-[#fff] rounded-2xl shadow-2xl shadow-inner-2xl -z-5'>
              <h1 className='font-serif font-bold text-[36px] max-xl:text-[30px] max-md:text-[25px] max-sm:text-[22px] text-[#2B231D]'>Lorem Ipsum</h1>
              <p className='text-[20px] max-xl:text-[18px] text-[#705E52]'>Owner</p>
              <p className='text-[20px] max-xl:text-[18px] text-[#705E52]'>Indore</p>
            </div>
            <button className='text-[16px] max-xl:text-[14px] w-[160px] h-[50px] max-xl:w-[120px] max-xl:h-[45px] bg-[#fff] rounded-3xl border border-[#000] absolute top-[95%]  '>Get in touch</button>
          </div>
          <div className='flex flex-col items-center mr-[50px] max-xl:mr-[20px] max-lg:mr-[0px] relative'>
            <div className='w-[250px] h-[350px] max-xl:w-[220px] max-xl:h-[320px] max-sm:w-[200px] max-sm:h-[300px] flex flex-col items-center justify-end pb-[30px] bg-[#fff] rounded-2xl shadow-2xl shadow-inner-2xl -z-5'>
              <h1 className='font-serif font-bold text-[36px] max-xl:text-[30px] max-md:text-[25px] max-sm:text-[22px] text-[#2B231D]'>Lorem Ipsum</h1>
              <p className='text-[20px] max-xl:text-[18px] text-[#705E52]'>Owner</p>
              <p className='text-[20px] max-xl:text-[18px] text-[#705E52]'>Indore</p>
            </div>
            <button className='text-[16px] max-xl:text-[14px] w-[160px] h-[50px] max-xl:w-[120px] max-xl:h-[45px] bg-[#fff] rounded-3xl border border-[#000] absolute top-[95%] '>Get in touch</button>
          </div>
          <div className='flex flex-col items-center mr-[50px] max-xl:mr-[20px] max-lg:mr-[0px] relative'>
            <div className='w-[250px] h-[350px] max-xl:w-[220px] max-xl:h-[320px] max-sm:w-[200px] max-sm:h-[300px] flex flex-col items-center justify-end pb-[30px] bg-[#fff] rounded-2xl shadow-2xl shadow-inner-2xl -z-5'>
              <h1 className='font-serif font-bold text-[36px] max-xl:text-[30px] max-md:text-[25px] max-sm:text-[22px] text-[#2B231D]'>Lorem Ipsum</h1>
              <p className='text-[20px] max-xl:text-[18px] text-[#705E52]'>Owner</p>
              <p className='text-[20px] max-xl:text-[18px] text-[#705E52]'>Indore</p>
            </div>
            <button className='text-[16px] max-xl:text-[14px] w-[160px] h-[50px] max-xl:w-[120px] max-xl:h-[45px] bg-[#fff] rounded-3xl border border-[#000] absolute top-[95%]'>Get in touch</button>
          </div>
          <div className='flex flex-col items-center relative'>
            <div className='w-[250px] h-[350px] max-xl:w-[220px] max-xl:h-[320px] max-sm:w-[200px] max-sm:h-[300px]  flex flex-col items-center justify-end pb-[30px] bg-[#fff] rounded-2xl shadow-2xl shadow-inner-2xl -z-5'>
              <h1 className='font-serif font-bold text-[36px] max-xl:text-[30px] max-md:text-[25px] max-sm:text-[22px] text-[#2B231D]'>Lorem Ipsum</h1>
              <p className='text-[20px] max-xl:text-[18px] text-[#705E52]'>Owner</p>
              <p className='text-[20px] max-xl:text-[18px] text-[#705E52]'>Indore</p>
            </div>
            <button className='text-[16px] max-xl:text-[14px] w-[160px] h-[50px] max-xl:w-[120px] max-xl:h-[45px] bg-[#fff] rounded-3xl border border-[#000] absolute top-[95%] '>Get in touch</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTeam