import React from 'react'
import Image from 'next/image';
import vegb from '../assets/vegbiryani.png';
import header from '../assets/header.png'
function Header() {
    return (
        <>
            <div className='h-screen w-full bg-yellow-200 bg-opacity-40 flex flex-col max-sm:h-full max-md:h-full max-lg:h-full max-xl:h-full  '>
                <div className='max-md:hidden w-full flex justify-end mt-[60px] pr-[100px] '>
                    <ul className='w-[600px] flex justify-between max-lg:w-[450px] max-md:w-[350px]'>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>Home</a></li>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>Menu</a></li>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>Our Cafe</a></li>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>Blog</a></li>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>About Us</a></li>
                    </ul>
                </div>
                <div className='flex justify-between max-xl:flex-col max-sm:items-center'>
                    <div className='flex flex-col justify-start ml-[150px] mt-[100px] max-sm:ml-[0px]   max-md:items-center max-md:ml-[50px]'>
                        <Image src={header} className=' mb-[10px] max-sm:w-[200px] max-sm:mb-[10px]' />
                        <h1 className='font-bold text-[60px] font-serif xl:w-[500px] max-lg:text-[40px] max-md:text-[30px] max-sm:text-[20px] max-sm:mb-[10px]'>"Where Every Bite Tells a Story"</h1>
                        <p className='mb-[30px] max-xl:w-[500px] max-sm:w-[290px] xl:w-[500px] max-sm:mb-[10px] max-sm:text-[12px] max-md:text-[15px] max-lg:text-[19px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
                            Maecenas ac quam lacinia,
                        </p>
                        <button className='bg-[#5B422E] rounded-lg xl:mt-[50px] w-[155px] max-sm:w-[100px] max-sm:h-[50px] h-[70px] text-[#fff] text-[16px] max-sm:text-[12px]'>Explore More</button>
                    </div>
                    <div className=' flex justify-center w-[500px] mt-[120px] mr-[50px] max-xl:mt-0 max-xl:ml-[200px] max-sm:w-[250px] max-sm:ml-[0px] max-sm:mr-[0px]  '>
                        <Image src={vegb} alt='vegbiryani' className='w-[320px] h-[320px] max-md:w-[300px] max-md:h-[300px] max-sm:w-[200px] max-sm:h-[200px]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header