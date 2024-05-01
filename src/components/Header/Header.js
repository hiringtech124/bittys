import React from 'react'
import Image from 'next/image';
import vegb from './assets/vegBiryani.png';
import header from './assets/header.png'
function Header() {
    return (
        <>
            <div className='h-full w-full bg-yellow-200 bg-opacity-40 flex flex-col  '>
                <div className='max-md:hidden w-full flex justify-end mt-[60px] pr-[100px] '>
                    <ul className='w-[600px] flex justify-between max-lg:w-[450px] max-md:w-[350px]'>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>Home</a></li>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>Menu</a></li>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>Our Cafe</a></li>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>Blog</a></li>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>About Us</a></li>
                    </ul>
                </div>
                <div className='flex justify-between max-sm:flex-col max-sm:items-center pb-[125px] max-md:pb-[50px]'>
                    <div className='flex flex-col justify-start ml-[150px] max-xl:ml-[100px] max-xl:ml-[60px] mt-[100px] max-sm:ml-[0px] max-sm:mt-[50px]   max-sm:items-center max-md:ml-[50px]'>
                        <Image src={header} className=' max-sm:w-[200px] max-xl:w-[300px] max-lg:w-[200px] max-md:w-[150px] max-sm:w-[100px] max-sm:mb-[10px]' alt='header' />
                        <h1 className='font-bold text-[60px] font-serif w-[600px] max-xl:w-[400px] max-lg:w-[300px] max-md:w-[250px] max-sm:w-[250px] mb-[20px] tracking-tight max-xl:text-[40px] max-lg:text-[30px] max-md:text-[25px] max-sm:text-[20px] max-sm:mb-[10px]'>&quot;Where Every Bite Tells a Story&quot;</h1>
                        <p className=' mb-[30px] w-[450px] max-xl:w-[400px] max-sm:w-[250px] max-lg:w-[300px] max-sm:mb-[10px] max-sm:text-[12px] max-md:text-[13px] max-lg:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
                            Maecenas ac quam lacinia,
                        </p>
                        <button className='bg-[#5B422E] rounded-lg mt-[0px] w-[155px] max-sm:w-[100px] max-sm:h-[40px] max-md:w-[120px] max-md:h-[50px] h-[70px] text-[#fff] text-[16px] max-sm:text-[11px] max-sm:text-[14px]'>Explore More</button>
                    </div>
                    <div className=' flex justify-center mt-[120px] max-sm:mt-[30px] mr-[50px] max-xl:ml-[200px] max-lg:ml-[100px] max-md:ml-[0px] max-md:mr-[50px] max-sm:mr-[0px]  '>
                        <Image src={vegb} alt='vegbiryani' className='w-[320px] h-[320px] max-xl:w-[280px] max-xl:h-[280px] max-lg:w-[200px] max-lg:h-[200px] max-md:w-[150px] max-md:h-[150px]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header