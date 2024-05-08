import React from 'react'
import Image from 'next/image'
import pic from './assets/group2.png'
function Visit() {
  return (
    <>
      <div className='w-full h-full flex flex-col items-center justify-center gap-y-5 py-[50px]'>
        <h5 className='text-[15px] text-center tracking-wider border-t border-b border-[#E1B168] border-solid py-1 w-[100px]'>VISIT US!</h5>
        <h1 className='font-bold font-serif text-[40px] max-xl:text-[35px] max-lg:text-[30px] max-md:text-[25px]'>Come and visit our Cafe</h1>
        <Image className='w-[40%] max-md:w-[50%] max-sm:w-[80%]' src={pic} alt='pic'/>
      </div>
    </>
  )
}

export default Visit