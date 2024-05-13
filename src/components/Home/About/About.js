import React from 'react'
import headline from './assets/header.png'
import Image from 'next/image'
import Link from 'next/link'
function About() {
    return (
        <>
            <div className='h-full bg-yellow-200 bg-opacity-40 w-full flex justify-start max-md:justify-center pb-[45px] max-md:pb-[100px] max-md:pb-[50px]'>

                <div className=' w-[600px] max-lg:w-[500px] ml-[100px] max-lg:ml-[50px] max-md:ml-[0px]  mt-[20px] max-md:mt-[100px] max-sm:mt-[50px] flex flex-col max-md:items-center'>
                    <Image className='max-xl:w-[250px] max-lg:w-[200px] max-md:w-[150px]' src={headline} alt='header'/>
                    <h1 className='font-bold text-[70px] font-serif mb-[20px] max-lg:text-[60px] max-md:text-[50px] max-sm:text-[30px]'>About our Cafe</h1>


                    <div className='w-[1000px] max-xl:w-[800px] max-lg:w-[700px] max-md:w-[600px] max-sm:w-[400px] max-[430px]:w-[280px] text-[15px] mb-[20px] max-md:text-[14px] max-sm:text-[10px] max-lg:text-[15px] max-sm:p-5'>

                        <p className='text-[20px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] mb-[10px] tracking-widest max-sm:tracking-wide'> At Bitty&apos;s, our menu reflects a delightful mix of flavors from around the world. Whether you&apos;re craving traditional South Indian specialties, comforting Chinese dishes, gourmet sandwiches, or flavorful Italian bites, we have something to satisfy every palate. Don&apos;t miss out on our indulgent Maggi noodles and hearty parathas, perfect for a quick bite or a leisurely meal.</p>
                        <p className='text-[20px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] mb-[10px] tracking-widest max-sm:tracking-wide'> Pair your meal with one of our signature teas or freshly brewed coffees to elevate your dining experience. Our beverages are crafted with care to complement our diverse menu.</p>
                        <p className='text-[20px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] mb-[10px] tracking-widest max-sm:tracking-wide'> More than just a cafe, Bitty&apos;s is a hub for social interaction and fun. Step into our spacious 2000 square feet cafe and soak in the inviting ambiance. Challenge your friends to a game of carrom, chess, or Uno, and create lasting memories in our welcoming setting.</p>

                    </div>

                    <Link href="/about"><button className='w-[155px] h-[70px] bg-[#5B422E] max-md:w-[130px] max-md:h-[60px] max-sm:w-[110px] max-sm:h-[55px] rounded-lg text-[#fff] text-[16px] max-sm:text-[12px]'>Explore More</button></Link>
                </div>
            </div>
        </>
    )
}

export default About