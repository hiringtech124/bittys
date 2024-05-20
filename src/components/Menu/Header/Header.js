
import React from 'react'
import './header.css'
const Header = ({ scrollToMenu }) => {
  
  return (
    <>
      <div className=' backImg w-full h-full py-[100px] max-sm:py-[50px] relative'>
        <div className=' w-full  flex flex-col justify-center max-sm:items-center  pl-[200px] max-xl:pl-[150px] max-lg:pl-[80px] max-md:pl-[50px] max-sm:pl-[0px]'>
          <h1 className='text-[#fff] font-bold font-serif text-[100px] max-xl:text-[80px] max-lg:text-[60px] max-md:text-[45px] max-sm:text-[30px]'>&quot;Bitty&apos;s Cafe&quot;</h1>
          <button onClick={scrollToMenu} className='text-[#4D3029] w-[200px] h-[70px] max-xl:w-[170px] max-xl:h-[60px] max-lg:w-[130px] max-lg:h-[50px]  bg-[#EFFC55] bg-opacity-50 rounded-lg font-bold text-[32px] max-xl:text-[28px] max-lg:text-[22px]'>Order Now</button>
        </div>
      </div>
    </>
  )
}

export default Header