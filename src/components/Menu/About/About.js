import React from 'react'

function About() {
  return (
    <>
      <div className=' aboutbg w-full h-full max-md:flex max-md:flex-col max-md:items-center'>
        <h1 className='text-[#E4C289] text-[32px] max-lg:text-[28px] max-md:text-[25px] pt-[50px] pl-[200px] max-xl:pl-[150px] max-lg:pl-[80px] max-md:pl-[0px]'>ABOUT US</h1>
        <div className=' w-full h-[550px] max-lg:h-[500px] max-md:h-[400px] max-sm:h-[450px] flex items-center max-md:flex-col max-md:justify-center pl-[200px] max-xl:pl-[150px] max-lg:pl-[50px] max-md:pl-[0px] max-sm:pb-[50px] max-sm:pl-[0px]'>
          <h1 className='font-bold font-serif tracking-tight text-[90px] max-md:flex max-md:justify-center max-md:mb-[10px] w-[600px] max-xl:w-[500px] max-lg:w-[400px] max-sm:w-[250px] mr-[50px] max-md:mr-[0px] max-lg:[20px] max-xl:text-[70px] max-lg:text-[50px] max-md:text-[50px] max-sm:text-[26px] '>Know Bitty&apos;s Cafe</h1>
          <p className='font-serif pr-[20px] max-md:pr-[0px] text-[26px] w-[600px] min-md:w-[500px] max-sm:w-[400px] max-[450px]:w-[250px] max-xl:text-[24px] max-lg:text-[20px] max-md:text-[20px] max-sm:text-[16px] max-sm:text-center'>Bitty&apos;s Cafe is a Brand that aims to provide a flavorful, high-quality meal for everyone. Whether you&apos;re a child or an adult, we offer something for everyone! We try to create new flavors for everyone, with special emphasis on children, adults, and older citizens. We are committed to providing our customers with the highest quality, flavor-rich meals, and beverages that are prepared in a hygienic environment.</p>
        </div>
      </div>
    </>
  )
}

export default About