'use client'
import React from 'react'
import Image from 'next/image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import img1 from './assets/baverage.png'
import img2 from './assets/chinese.png'
import img3 from './assets/Sindian.png'
import img4 from './assets/italian.png'
import img5 from './assets/sandwich.png'
import img6 from './assets/Mcourse.png'
import img7 from './assets/combo.png'
import img8 from './assets/paratha.png'
import img9 from './assets/juice.png'
import img10 from './assets/other.png'
function OurMenu() {
    return (
        <>
            <div className='h-full w-full bg-[#F5F9D6] flex flex-col items-center pt-[30px]' >
                <h1 className='font-serif font-bold text-[64px] max-xl:text-[52px] max-lg:text-[40px] max-sm:text-[35px]  text-[#4D3029]'>Our Menu</h1>
                <p className='text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-sm:text-[18px] w-[90%] max-lg:w-[50%] max-md:w-[60%] max-sm:w-[80%] mt-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.varius aliquam urna ut.</p>
                <div className='py-[50px] '>
                    <Tabs>
                        <TabList className='grid grid-cols-5 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-20 max-xl:gap-10 px-10'>
                            <Tab className='flex flex-col items-center'>
                                <Image className='w-[180px] h-[180px] mb-5 max-xl:w-[150px] max-xl:h-[150px] max-sm:w-[100px] max-sm:h-[100px] ' src={img1} alt='img1' />
                                <p className='text-[#00A890] text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-sm:text-[18px] font-bold tracking-wider'>Baverage</p>
                            </Tab>
                            <Tab className='flex flex-col items-center'>
                                <Image className='w-[180px] h-[180px] mb-5 max-xl:w-[150px] max-xl:h-[150px] max-sm:w-[100px] max-sm:h-[100px]' src={img2} alt='img1' />
                                <p className='text-[#00A890] text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-sm:text-[18px] font-bold tracking-wider'>Chinese</p>
                            </Tab>
                            <Tab className='flex flex-col items-center'>
                                <Image className='w-[180px] h-[180px] mb-5 max-xl:w-[150px] max-xl:h-[150px] max-sm:w-[100px] max-sm:h-[100px]' src={img3} alt='img1' />
                                <p className='text-[#00A890] text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-sm:text-[18px] font-bold tracking-wider'>South Indian</p>
                            </Tab>
                            <Tab className='flex flex-col items-center'>
                                <Image className='w-[180px] h-[180px] mb-5 max-xl:w-[150px] max-xl:h-[150px] max-sm:w-[100px] max-sm:h-[100px]' src={img4} alt='img1' />
                                <p className='text-[#00A890] text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-sm:text-[18px] font-bold tracking-wider'>Italian</p>
                            </Tab>
                            <Tab className='flex flex-col items-center'>
                                <Image className='w-[180px] h-[180px] mb-5 max-xl:w-[150px] max-xl:h-[150px] max-sm:w-[100px] max-sm:h-[100px]' src={img5} alt='img1' />
                                <p className='text-[#00A890] text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-sm:text-[18px] font-bold tracking-wider'>Sandwich</p>
                            </Tab>
                            <Tab className='flex flex-col items-center'>
                                <Image className='w-[180px] h-[180px] mb-5 max-xl:w-[150px] max-xl:h-[150px] max-sm:w-[100px] max-sm:h-[100px]' src={img6} alt='img1' />
                                <p className='text-[#00A890] text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-sm:text-[18px] font-bold tracking-wider'>Main Course</p>
                            </Tab>
                            <Tab className='flex flex-col items-center'>
                                <Image className='w-[180px] h-[180px] mb-5 max-xl:w-[150px] max-xl:h-[150px] max-sm:w-[100px] max-sm:h-[100px]' src={img7} alt='img1' />
                                <p className='text-[#00A890] text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-sm:text-[18px] font-bold tracking-wider'>Combo&apos;s</p>
                            </Tab>
                            <Tab className='flex flex-col items-center'>
                                <Image className='w-[180px] h-[180px] mb-5 max-xl:w-[150px] max-xl:h-[150px] max-sm:w-[100px] max-sm:h-[100px]' src={img8} alt='img1' />
                                <p className='text-[#00A890] text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-sm:text-[18px] font-bold tracking-wider'>Paratha</p>
                            </Tab>
                            <Tab className='flex flex-col items-center'>
                                <Image className='w-[180px] h-[180px] mb-5 max-xl:w-[150px] max-xl:h-[150px] max-sm:w-[100px] max-sm:h-[100px]' src={img9} alt='img1' />
                                <p className='text-[#00A890] text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-sm:text-[18px] font-bold tracking-wider'>Juices</p>
                            </Tab>
                            <Tab className='flex flex-col items-center'>
                                <Image className='w-[180px] h-[180px] mb-5 max-xl:w-[150px] max-xl:h-[150px] max-sm:w-[100px] max-sm:h-[100px]' src={img10} alt='img1' />
                                <p className='text-[#00A890] text-[24px]  max-xl:text-[22px] max-lg:text-[20px] max-sm:text-[18px] font-bold tracking-wider'>Other Offerings</p>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <h1></h1>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-gray-200">Grid Item 1</div>
                                <div className="bg-gray-200">Grid Item 2</div>
                                <div className="bg-gray-200">Grid Item 3</div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h1></h1>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-gray-200">Grid Item 5</div>
                                <div className="bg-gray-200">Grid Item 6</div>
                                <div className="bg-gray-200">Grid Item 7</div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h1></h1>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-gray-200">Grid Item 8</div>
                                <div className="bg-gray-200">Grid Item 9</div>
                                <div className="bg-gray-200">Grid Item 10</div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default OurMenu