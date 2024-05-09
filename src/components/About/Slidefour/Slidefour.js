import React from 'react'
import Image from 'next/image'
import header from "./assets/header.png"
import group from "./assets/slide4.png"
function Slidefour() {
  return (
    <>
      <div className='w-full h-full bg-[#F7F9E7] flex justify-center max-md:flex-col max-md:items-center max-md:p-[0px] max-md:pl-[0px] max-md:pt-[30px] max-md:pb-[50px] pt-[100px] pb-[100px] pl-[50px] p-[50px] '>
        <Image className='mr-[200px] max-xl:mr-[120px] max-lg:mr-[100px] max-md:mr-[0px] w-[380px] h-[350px] max-xl:w-[320px] max-xl:h-[300px] max-lg:w-[280px] max-lg:h-[250px] max-sm:w-[180px] max-sm:h-[150px]' src={group} alt="This is an image" />
        <div className=' max-md:flex max-md:flex-col max-md:items-center' >
          <Image className='max-lg:w-[250px] max-sm:w-[200px] ' src={header} alt='img' />
          <div className='w-[550px] max-xl:w-[450px] max-lg:w-[330px] max-md:w-[500px] max-sm:w-[380px] max-[450px]:w-[280px]'>
            <h1 className='max-md:text-center font-serif font-bold text-[65px] max-xl:text-[55px] max-lg:text-[40px] max-md:text-[40px] max-sm:text-[30px] text-[#2B231D]'  >Games and Fun</h1>
            <p className='text-[18px] max-xl:text-[16px] max-lg:text-[13px] max-md:text-[12px] max-sm:text-[10px] text-justify tracking-wide '>Discover the joy of gaming at Bitty&apos;s Cafe, where Ludo, Carrom, and a variety of Indore favorites await. Nestled in Indore&apos;s bustling tech hub, we&apos;ve become a hotspot for professionals and game enthusiasts alike. Whether you&apos;re craving a quick bite or a leisurely evening, Bitty&apos;s offers a welcoming ambiance and delectable cuisine. Join us for an experience where every dish is prepared with passion and served with a smile. We can&apos;t wait to welcome you to Bitty&apos;s Cafe!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slidefour