import React from 'react'
import logoimg from './assets/contactLogo.png'
import Image from 'next/image'
import "./header.css"
function Header() {
  return (
    <>
        <div className='contact bg-[#292E36] w-full h-full py-[50px] pb-[100px] max-lg:pb-[50px] flex flex-col items-center'>
            <div className='flex justify-center items-center gap-[150px] max-xl:gap-[50px]'>
                <h1 className='text-[#7B5E5E] text-[20px] max-lg:text-[16px] max-md:text-[14px] font-serif text-center border border-[#E1B168] px-[21px] py-[20px] max-lg:px-[10px] max-lg:py-[10px] max-md:px-[5px] max-md:py-[5px]'>Call - +91 91794 44179</h1>
                <Image className='w-[300px] h-[180px] max-sm:hidden max-lg:w-[250px] max-lg:h-[130px] mr-[50px]' src={logoimg} alt='logoimg'/>
                <button className='bg-[#E1B168] text-[#292E36]  text-[22px] max-lg:text-[18px] max-md:text-[16px] font-serif text-center px-[58px] py-[20px] max-lg:px-[30px] max-lg:py-[10px] max-md:px-[10px] max-md:py-[5px]'>Order</button>
            </div>
            <h1 className='font-serif mt-[120px] max-lg:mt-[70px] max-sm:mt-[30px] text-center text-[#fff] font-bold text-[48px] max-lg:text-[38px] max-md:text-[25px] max-sm:text-[23px] border-t border-b border-[#E1B168] border-solid py-1 w-[350px] max-lg:w-[250px] max-md:w-[170px]'>CONTACT US</h1>
        </div>
    </>
  )
}

export default Header