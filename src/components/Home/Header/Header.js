import React from 'react'
import Image from 'next/image'
import vegb from './assets/vegBiryani.png'
import './css/header.css'

function Header() {
    return (
        <>
            <div className='h-full relative bgImg text-[#fff] flex flex-col mx-auto'>
                <div className='flex justify-center gap-[300px] max-xl:gap-[150px] max-lg:gap-[150px] max-[850px]:gap-[80px] max-sm:gap-y-5 max-sm:flex-col max-sm:items-center pt-[120px] max-sm:pt-[50px] pb-[140px] max-md:pb-[65px]'>
                    <div className='flex flex-col justify-start max-w-lg max-lg:max-w-sm max-md:w-[300px]  max-sm:items-center'>
                        <h1 className='font-bold text-[60px]  font-serif max-sm:px-[10px] mb-[20px] tracking-tight max-xl:text-[40px] max-lg:text-[30px] max-md:text-[35px] max-sm:text-[35px] max-sm:mb-[10px]'>
                            &quot;Where Every Bite Tells a Story&quot;
                        </h1>
                        <p className=' mb-[30px] tracking-widest max-sm:text-center max-sm:px-[20px] max-sm:mb-[10px] max-sm:text-[12px] max-md:text-[13px] max-lg:text-[14px]'>
                            Welcome to Bitty&apos;s Cafe, a culinary gem in Indore that promises not just delicious food but also a vibrant atmosphere filled with warmth and connection. Our journey began in December 2022, driven by a love for exceptional cuisine and a desire to create a welcoming space for all.
                        </p>
                    </div>
                    <div className=' flex justify-center '>
                        <Image
                            src={vegb}
                            alt='vegbiryani'
                            className='w-[320px] h-[320px] max-xl:w-[250px] max-xl:h-[250px] max-lg:w-[200px] max-lg:h-[200px] max-md:w-[150px] max-md:h-[150px]'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
