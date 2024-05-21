import React from 'react'
import Image from 'next/image'
import first from "./assets/mango.png"
import second from "./assets/strawberry.png"
import third from "./assets/lime.png"
import fourth from "./assets/kiwi.png"
import fifth from "./assets/cola.png"
import sixth from "./assets/choco.png"
import seven from "./assets/coffee.png"
function WeServe() {
  return (
    <>
      <div className='bg-[#F5F9D6] w-full h-full pt-[40px]'>
        <div className='flex flex-col items-center'>
          <h1 className='text-[64px] font-bold text-[#4D3029] font-serif max-xl:text-[54px] max-lg:text-[44px] max-md:text-[35px] max-sm:text-[30px]'>We Serve</h1>
          <p className='text-[20px] max-xl:text-[17px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] text-center text-[#1E1E1E] w-[800px] max-lg:w-[600px] max-md:w-[400px] max-sm:w-[300px]'> We serve a variety of refreshments, snacks and delicacies to satisfy your taste buds and make sure you get the best experience with us</p>
          <div className='pt-[50px] pb-[50px] flex items-end max-md:grid max-md:grid-cols-3 max-sm:grid-cols-2 max-md:gap-4 space-x-4 max-md:space-x-0'>
              <Image className='w-[150px] h-[190px] max-xl:w-[120px] max-xl:h-[150px] max-lg:w-[80px] max-lg:h-[100px] max-md:w-[170px] max-md:h-[170px] max-sm:w-[140px] max-sm:h-[140px]' src={first} alt="first"/>
              <Image className='w-[150px] h-[220px] max-xl:w-[120px] max-xl:h-[180px] max-lg:w-[80px] max-lg:h-[130px] max-md:w-[170px] max-md:h-[170px] max-sm:w-[140px] max-sm:h-[140px]' src={second} alt="second "/>
              <Image className='w-[150px] h-[260px] max-xl:w-[120px] max-xl:h-[200px] max-lg:w-[80px] max-lg:h-[150px] max-md:w-[170px] max-md:h-[170px] max-sm:w-[140px] max-sm:h-[140px]' src={third} alt="third"/>
              <Image className='w-[150px] h-[320px] max-xl:w-[120px] max-xl:h-[250px] max-lg:w-[80px] max-lg:h-[200px] max-md:w-[170px] max-md:h-[170px] max-sm:w-[140px] max-sm:h-[140px]' src={fourth} alt="fourth"/>
              <Image className='w-[150px] h-[200px] max-xl:w-[120px] max-xl:h-[150px] max-lg:w-[80px] max-lg:h-[100px] max-md:w-[170px] max-md:h-[170px] max-sm:w-[140px] max-sm:h-[140px]' src={fifth} alt="fifth"/>
              <Image className='w-[150px] h-[350px] max-xl:w-[120px] max-xl:h-[280px] max-lg:w-[80px] max-lg:h-[230px] max-md:w-[170px] max-md:h-[170px] max-sm:w-[140px] max-sm:h-[140px]' src={sixth} alt="sixth"/>
              <Image className='w-[150px] h-[250px] max-xl:w-[120px] max-xl:h-[190px] max-lg:w-[80px] max-lg:h-[140px] max-md:w-[170px] max-md:h-[170px] max-sm:w-[140px] max-sm:h-[140px]' src={seven} alt="seven"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeServe