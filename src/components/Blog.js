import React from 'react'
import Image from 'next/image'
import header from '../assets/header.png'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
function Blog() {
  return (
    <>
      <div className='h-full w-full bg-yellow-200 bg-opacity-40 flex flex-col'>
                <div className='flex flex-col items-center pt-6'>
                    <h1 className='font-bold text-[55px] font-serif tracking-wide max-lg:text-[45px] max-md:text-[40px] max-sm:text-[35px]'>Blog Posts</h1>
                    <Image src={header} className='max-lg:w-[250px] max-md:w-[200px] max-sm:w-[150px]' />
                </div>


                <div className='h-full flex justify-between max-xl:grid max-xl:grid-cols-3 max-xl:gap-5 max-xl:ml-[50px]
                                 max-lg:grid-cols-3 max-md:grid-cols-1 ml-[100px] max-lg:ml-[10px] max-sm:ml-[30px] max-sm:mr-[50px] mt-8'>
                    <div className='bg-[#fff] w-[320px] h-[420px] max-lg:w-[260px] max-lg:h-[350px] flex flex-col items-center rounded-lg'>
                        <Image src={blog1} className='p-5' />
                        <div className='flex flex-col items-center'>
                            <h1 className='font-serif font-bold text-[32px] max-lg:text-[28px] max-md:text-[24px]'>Heading</h1>
                            <p className='w-[300px] max-lg:text-[14px] max-md:text-[12px] max-lg:w-[250px] max-md:w-[200px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit</p>
                            <a className='text-[red] text-[20px] font-bold pt-3 max-md:text-[18px] max-sm:text-[15px]'>Read Blog</a>
                        </div>
                    </div>
                    <div className='bg-[#fff] w-[320px] h-[420px] max-lg:w-[260px] max-lg:h-[350px] flex flex-col items-center rounded-lg'>
                        <Image src={blog2} className='p-5' />
                        <div className='flex flex-col items-center'>
                            <h1 className='font-serif font-bold text-[32px] max-lg:text-[28px] max-md:text-[24px]'>Heading</h1>
                            <p className='w-[300px] max-lg:text-[14px] max-md:text-[12px] max-lg:w-[250px] max-md:w-[200px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit</p>
                            <a className='text-[red] text-[20px] font-bold pt-3'>Read Blog</a>
                        </div>
                    </div>
                    <div className='bg-[#fff] w-[320px] h-[420px] max-lg:w-[260px] max-lg:h-[350px] flex flex-col items-center rounded-lg mr-[100px]'>
                        <Image src={blog3} className='p-5' />
                        <div className='flex flex-col items-center'>
                            <h1 className='font-serif font-bold text-[32px] max-lg:text-[28px] max-md:text-[24px]'>Heading</h1>
                            <p className='w-[300px] max-lg:text-[14px] max-md:text-[12px] max-lg:w-[250px] max-md:w-[200px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit</p>
                            <a className='text-[red] text-[20px] font-bold pt-3'>Read Blog</a>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default Blog