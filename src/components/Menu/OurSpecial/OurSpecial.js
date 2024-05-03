import React from 'react'
import Image from 'next/image'
import special from "./assets/spcial.png"
import "./special.css"
function OurSpecial() {
  return (
    <>
      <div className='bg-[#F5F9D6] w-full h-full flex flex-col items-center'>
        <h1 className='text-[64px] font-bold text-[#4D3029] font-serif mb-[50px] mt-[20px] max-xl:text-[54px] max-lg:text-[44px] max-md:text-[35px] max-sm:text-[30px]'>Our Special</h1>
        <div className='flex p-[20px] pb-[50px] max-[530px]:flex max-[530px]:flex-col max-[530px]:items-center max-[530px]:p-[0px] max-[530px]:pb-[50px]'>

          <Image className='w-[420px] h-[400px] max-xl:w-[300px] max-xl:h-[300px] max-lg:w-[250px] max-lg:h-[250px] max-md:w-[200px] max-md:h-[200px] mr-[200px] max-xl:mr-[200px] max-lg:mr-[150px] max-md:mr-[80px] max-[530px]:mr-[0px]' src={special} alt="Our Special" />

          <div className='w-[500px] max-xl:w-[400px] max-lg:w-[300px] max-md:w-[250px] max-sm:w-[200px] max-[530px]:mt-[10px]'>
            <h1 className='text-[56px] font-serif tracking-wide text-[#2A3833] max-xl:text-[46px] max-lg:text-[34px] max-md:text-[30px] max-sm:text-[22px]'>We welcome you to Savor the Flavor of The World</h1>
            <p className='text-[#3C5049] text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[10px] text-justify '>Get ready to taste our take on Modern Asian menu. Indulge your tastebud with the burst of flavour.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurSpecial