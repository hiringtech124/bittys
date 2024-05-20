import React from 'react'
import Image from 'next/image'
import header from './assets/header.png'
import blog1 from './assets/blog1.png'
import blog2 from './assets/blog2.png'
import blog3 from './assets/blog3.png'
function Blog() {
  return (
    <>
      <div className='h-full w-full bg-yellow-200 bg-opacity-40 flex flex-col items-center'>
                <div className='flex flex-col items-center pt-6'>
                    <h1 className='font-bold text-[55px] font-serif tracking-wide max-lg:text-[45px] max-md:text-[40px] max-sm:text-[35px]'>Blog Posts</h1>
                    <Image src={header} className='max-lg:w-[250px] max-md:w-[200px] max-sm:w-[150px]' alt='Blog Header' />
                </div>


                <div className='pb-[130px] max-md:pb-[50px] max-md:w-[270px] h-full w-full mr-[0px] flex justify-center gap-20 max-sm:flex max-sm:flex-col max-sm:items-center max-xl:w-[85%] max-lg:grid max-lg:grid-cols-3 max-xl:gap-5
                                 max-lg:grid-cols-3 max-lg:gap-10 max-md:grid-cols-1 max-[950px]:w-[90%]  mt-8'>
                    <div className='bg-[#fff] w-[320px] h-[420px] max-lg:w-[240px] max-lg:h-[350px] flex flex-col items-center gap-2 rounded-lg'>
                        <Image src={blog1} className='p-5' alt='Blog Post 1' />
                        <div className='flex flex-col items-center'>
                            <h1 className='font-serif font-bold text-[32px] max-lg:text-[22px] max-md:text-[24px]'>Plates & Palates</h1>
                            <p className='w-[300px] max-lg:text-[13px] max-md:text-[12px] max-lg:w-[220px] max-md:w-[200px] text-center'>Where Every Dish Tells a Story</p>
                            <a className='text-[red] text-[20px] font-bold pt-3 max-md:text-[18px]'>Read Blog</a>
                        </div>
                    </div>
                    <div className='bg-[#fff] w-[320px] h-[420px] max-lg:w-[240px] max-lg:h-[350px] flex flex-col items-center rounded-lg'>
                        <Image src={blog2} className='p-5' alt='blog2' />
                        <div className='flex flex-col items-center'>
                            <h1 className='font-serif font-bold text-[32px] max-lg:text-[22px] max-md:text-[24px]'>Feast & Fables</h1>
                            <p className='w-[300px] max-lg:text-[13px] max-md:text-[12px] max-lg:w-[220px] max-md:w-[200px] text-center'>Tales of Taste, Texture, and Temptation</p>
                            <a className='text-[red] text-[20px] font-bold pt-3 max-md:text-[18px]'>Read Blog</a>
                        </div>
                    </div>
                    <div className='bg-[#fff] w-[320px] h-[420px] max-lg:w-[240px] max-lg:h-[350px] flex flex-col items-center rounded-lg'>
                        <Image src={blog3} className='p-5' alt='Blog Post 3' />
                        <div className='flex flex-col items-center'>
                            <h1 className='font-serif font-bold text-[32px] max-xl:text-[26px] max-lg:text-[22px] max-md:text-[22px]'>Bite-sized Bliss</h1>
                            <p className='w-[300px] max-lg:text-[13px] max-md:text-[12px] max-lg:w-[220px] max-md:w-[200px] text-center'>Brightening Your Day, One Recipe at a Time</p>
                            <a className='text-[red] text-[20px] font-bold pt-3 max-md:text-[18px]'>Read Blog</a>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default Blog