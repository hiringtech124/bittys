import React from 'react'
import Image from 'next/image';
import "../css/view.css"
import vegb from '../assets/vegbiryani.png';
import header from '../assets/header.png'
import dots from '../assets/dottedline.png'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
function View() {
    return (
        <>
            {/* FIRST SLIDE */}
            {/* <div className='h-screen w-full bg-yellow-200 bg-opacity-40 flex flex-col max-sm:w-[800px] max-sm:h-full max-md:h-full max-lg:h-full max-xl:h-full  '>
                <div className=' w-full flex justify-end mt-[60px] pr-[100px]'>
                    <ul className='w-[600px] flex justify-between'>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>Home</a></li>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>Menu</a></li>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>Our Cafe</a></li>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>Blog</a></li>
                        <li className='text-[22px] tracking-wide font-bold rounded-all hover:bg-brown-700'><a>About Us</a></li>
                    </ul>
                </div>
                <div className='flex justify-between max-xl:flex-col'>
                    <div className='flex flex-col justify-start ml-[150px] mt-[100px]  max-md:items-center max-md:ml-[50px]'>
                        <div className='line '></div>
                        <div className='w-[511px] '>
                            <h1 className='font-bold text-[60px] font-serif max-lg:text-[40px]'>"Where Every Bite Tells a Story"</h1>
                        </div>
                        <div className='w-[516px] h-[105px]'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
                                Maecenas ac quam lacinia,
                            </p>
                        </div>
                        <div className=' bg-[#5B422E] rounded-lg w-[155px]'>
                            <button className='w-[155px] h-[70px] text-[#fff] text-[16px]'>Explore More</button>
                        </div>

                    </div>
                    <div className='w-[500px] mt-[120px] mr-[50px] max-xl:mt-0 max-xl:ml-[200px] max-sm:ml-[260px] '>
                        <Image src={vegb} alt='vegbiryani' className='w-[320px] h-[320px] max-md:w-[300px] max-md:h-[300px]' />
                    </div>
                </div>
            </div> */}
            {/* SECOND SLIDE*/}
            <div className='h-screen w-full flex justify-end max-lg:justify-center'>

                <div className=' w-[600px] h-[400px] mr-[200px] mt-[200px] flex flex-col justify-between
                 max-lg:mr-[0px] max-lg:ml-[100px] max-sm:ml-[0px] max-sm:mr-[0px] max-md:h-[350px] max-sm:h-[400px] max-sm:items-center '>
                    <div className=''>
                        <h1 className='font-bold text-[80px] font-serif max-lg:text-[70px] max-md:text-[60px] max-sm:text-[50px]'>About our Cafe</h1>
                    </div>
                    <div className='w-[500px] max-sm:w-[300px]'>
                        <p className='text-[16px] max-md:text-[14px] max-lg:text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
                            Maecenas ac quam lacinia,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
                            Maecenas ac quam lacinia,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
                            Maecenas ac quam lacinia,
                        </p>
                    </div>
                    <button className='w-[155px] h-[70px] bg-[#5B422E] rounded-lg text-[#fff] text-[16px]'>Explore More</button>
                </div>
            </div>
            {/*  THIRD SLIDE */}
            <div className='h-full w-full bg-yellow-200 bg-opacity-40'>

                

                <div className='flex flex-col items-center pt-10'>
                    <Image src={header} className='max-lg:w-[250px] max-md:w-[200px] max-sm:w-[170px]'/>
                    <div className='pb-5'>
                        <h1 className='font-bold text-[60px] font-serif max-lg:text-[45px] max-md:text-[35px] max-sm:text-[25px]'>Explore our Cafe</h1>
                    </div>
                    <div className='w-[516px] h-[105px] text-[15px] max-lg:text-[13px] max-md:text-[11px] max-md:w-[400px] max-sm:w-[300px]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
                            Maecenas ac quam lacinia,
                        </p>
                    </div>
                </div>
                <div className='flex justify-center max-lg:grid max-lg:grid-cols-3 max-lg:gap-4 max-md:grid-cols-2 max-md:gap-4 max-sm:grid-cols-1 max-sm:gap-4
                                max-md:ml-[50px] max-sm:ml-[30px]'>
                    <div className=' chefS w-[310px] h-[400px] mr-[50px] flex items-center pt-[190px] max-lg:w-[250px] max-lg:h-[300px] max-lg:pt-[100px]' >
                        <div className=' flex flex-col items-center'>
                            <h1 className='font-serif font-bold text-[32px] pb-5 tracking-wide max-lg:text-[25px] text-[#fff]'>Chef's Special</h1>
                            <p className='pb-5 pl-5 max-lg:text-[13px] text-[#fff]'>Lorem ipsum Lorem ipsum dolor Lorem ipsum Lorem ipsum dolor sit</p>
                            <a className='text-[red] text-[20px] font-bold max-lg:text-[16px]'>Explore More</a>
                        </div>
                    </div>
                    <div className='italian w-[310px] h-[400px] mr-[50px] flex items-center pt-[190px] max-lg:w-[250px] max-lg:h-[300px] max-lg:pt-[100px]' >
                        <div className='flex flex-col items-center'>
                            <h1 className='font-serif font-bold text-[32px] pb-5 tracking-wide max-lg:text-[25px] text-[#fff]'>Italian</h1>
                            <p className='pb-5 pl-5 max-lg:text-[13px] text-[#fff]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit</p>
                            <a className='text-[red] text-[20px] font-bold max-lg:text-[16px]'>Explore More</a>
                        </div>
                    </div>
                    <div className=' baverage w-[310px] h-[400px] mr-[50px] flex items-center pt-[190px] max-lg:w-[250px] max-lg:h-[300px] max-lg:pt-[100px]' >
                        <div className=' flex flex-col items-center'>
                            <h1 className='font-serif font-bold text-[32px] pb-5 tracking-wide max-lg:text-[25px] text-[#fff]'>Baverages</h1>
                            <p className='pb-5 pl-5 max-lg:text-[13px] text-[#fff]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit</p>
                            <a className='text-[red] text-[20px] font-bold max-lg:text-[16px]'>Explore More</a>
                        </div>
                    </div>
                    <div className='sIndian w-[310px] h-[400px] flex items-center pt-[190px] max-lg:w-[250px] max-lg:h-[300px] max-lg:pt-[100px]'  >
                        <div className=' flex flex-col items-center'>
                            <h1 className='font-serif font-bold text-[32px] pb-5 tracking-wide max-lg:text-[25px] text-[#fff]'>South Indian</h1>
                            <p className='pb-5 pl-5 max-lg:text-[13px] text-[#fff]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit</p>
                            <a className='text-[red] text-[20px] font-bold max-lg:text-[16px]'>Explore More</a>
                        </div>
                    </div>

                </div>
            </div>
            {/* FOURTH SLIDE */}
            <div className='backImg h-full w-full'>
                <div className='flex justify-between max-sm:flex-col max-sm:items-center max-sm:ml-[100px]'>
                    <div className='flex flex-col items-center ml-[100px] mt-[30px] max-sm:ml-[0px]'>
                        <div className=''>
                            <h1 className='font-bold text-[60px] font-serif tracking-wide max-xl:text-[50px] max-lg:text-[45px] max-md:text-[40px] max-sm:text-[35px]'>Our Products</h1>
                        </div>
                        <Image src={header} className='max-xl:w-[250px] max-md:w-[200px] max-sm:w-[150px]'/>
                    </div>
                    <div className=' mt-[60px] mr-[90px] max-lg:mr-[40px] max-sm:mt-[20px] max-sm:ml-[40px]'>
                        <button className=' bg-[#5B422E] rounded-lg w-[155px] h-[60px] text-[#fff] text-[16px] 
                                            max-xl:w-[130px] max-xl:h-[50px] max-xl:text-[14px] '>Explore More</button>
                    </div>
                </div>
                <div className='w-full h-full flex justify-between mt-[50px] max-md:flex-col'>
                    <div className='w-[550px] h-full ml-[50px] max-xl:w-[450px] max-lg:w-[400px] max-lg:mr-5 max-lg:ml-[30px] max-md:mb-10 max-sm:pr-[15px]'>
                        <div className='pb-[15px]'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'>Product 1</h1>
                                <Image src={dots} className='max-xl:w-[200px] max-lg:w-[150px]'/>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'> ₹199</h1>
                            </div>
                            <div>
                                <p className='text-[16px] w-[500px] max-xl:w-[450px] max-lg:w-[400px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor
                                    sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
                            </div>
                        </div>
                        <div className='pb-[15px]'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'>Product 2</h1>
                                <Image src={dots} className='max-xl:w-[200px] max-lg:w-[150px]'/>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'> ₹199</h1>
                            </div>
                            <div>
                                <p className='text-[16px] w-[500px] max-xl:w-[450px] max-lg:w-[400px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor
                                    sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
                            </div>
                        </div>
                        <div className='pb-[15px]'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'>Product 3</h1>
                                <Image src={dots} className='max-xl:w-[200px] max-lg:w-[150px]'/>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'> ₹199</h1>
                            </div>
                            <div>
                                <p className='text-[16px] w-[500px] max-xl:w-[450px] max-lg:w-[400px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor
                                    sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
                            </div>
                        </div>
                        <div className='pb-[15px]'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'>Product 4</h1>
                                <Image src={dots} className='max-xl:w-[200px] max-lg:w-[150px]'/>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'> ₹199</h1>
                            </div>
                            <div>
                                <p className='text-[16px] w-[500px] max-xl:w-[450px] max-lg:w-[400px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor
                                    sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
                            </div>
                        </div>

                    </div>
                    <div className='w-[550px] h-full mr-[50px] max-xl:w-[450px] max-lg:w-[400px] max-lg:mr-5 max-lg:ml-[30px] max-sm:pr-[15px]'>
                        <div className='pb-[15px]'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'>Product 1</h1>
                                <Image src={dots} className='max-xl:w-[200px] max-lg:w-[150px]'/>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'> ₹199</h1>
                            </div>
                            <div>
                                <p className='text-[16px] w-[500px] max-xl:w-[450px] max-lg:w-[400px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor
                                    sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
                            </div>
                        </div>
                        <div className='pb-[15px]'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'>Product 2</h1>
                                <Image src={dots} className='max-xl:w-[200px] max-lg:w-[150px]'/>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'> ₹199</h1>
                            </div>
                            <div>
                                <p className='text-[16px] w-[500px] max-xl:w-[450px] max-lg:w-[400px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor
                                    sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
                            </div>
                        </div>
                        <div className='pb-[15px]'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'>Product 3</h1>
                                <Image src={dots} className='max-xl:w-[200px] max-lg:w-[150px]'/>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'> ₹199</h1>
                            </div>
                            <div>
                                <p className='text-[16px] w-[500px] max-xl:w-[450px] max-lg:w-[400px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor
                                    sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
                            </div>
                        </div>
                        <div className='pb-[15px]'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'>Product 4</h1>
                                <Image src={dots} className='max-xl:w-[200px] max-lg:w-[150px]'/>
                                <h1 className='font-bold text-[38px] font-serif tracking-wide max-xl:text-[35px] max-lg:text-[32px]'> ₹199</h1>
                            </div>
                            <div>
                                <p className='text-[16px] w-[500px] max-xl:w-[450px] max-lg:w-[400px]'>Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor
                                    sit Lorem ipsum Lorem ipsum dolor sit Lore</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/*  FIFTH SLIDE */}
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
            {/* Sixth Slide */}
            <div className=' sixthslide w-[1600px] h-[478px] text-[#fff] max-sm:h-[600px] max-md:h-[600px] '>
                <div className=' w-[1100px] h-full flex items-center justify-between ml-[250px] max-lg:ml-[150px] max-sm:flex-col max-sm:items-center max-sm:ml-[0px] max-sm:pr-[100px]'>
                    <div className=' mb-[140px] max-sm:mt-[200px] max-sm:mb-[0px]'>
                        <h1 className='font-serif font-bold text-[70px] max-lg:text-[60px] max-md:text-[50px] '>Visit Us</h1>
                    </div>

                    <div className='max-2xl:mr-[300px] max-lg:mr-[300px] max-lg:mr-[300px] max-sm:mr-[0px] max-sm:mb-[50px]'>
                        <div className='w-[500px]   max-lg:w-[450px]'>
                            <p className='tracking-wide mb-[50px] text-[20px] max-lg:text-[18px]'>Lorem ipsum Lorem ipsum dolor sit
                                Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem
                                Lorem ipsum Lorem ipsum sit Lorem ipsum Lorem ipsum dolor</p>
                            <p className='tracking-wide text-[20px] max-lg:text-[18px]'>MON to SUN.....................9:00AM-9:00PM</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* seventh slide */}
            <div className='bg-[#F9EDE1] bg-cover w-screen h-[439px] flex items-center justify-center relative max-md:h-[500px]'>
                <div className=' flex w-full  justify-between max-md:flex-col max-md:items-center'>
                    <div className='w-[700px] h-[150px] ml-[100px] mt-[100px] max-xl:w-[500px] max-lg:mt-[50px] max-lg:ml-[50px] max-md:mt-[0px] max-sm:w-full'>
                        <h1 className='font-serif font-bold text-[30px] pb-2 max-sm:w-[200px] '>News Letter</h1>
                        <div className='pb-5'>
                            <input type="text" placeholder="Email" className=" w-[460px] max-sm:w-[150px] max-xl:w-[250px] bg-[#F9EDE1] border border-gray-300 rounded-md px-4 py-2 mr-2" />
                            <button type="submit" className="bg-[#2B231D] hover:bg-blue-700 text-white py-2 px-4 rounded">Subscribe</button>
                        </div>
                        <p className='max-xl:w-[350px] max-sm:w-[250px]'>Sign up with your email address to receive news and updates</p>
                    </div>
                    <div className='w-[350px] max-sm:w-[300px] max-sm:mr-[10px] max-sm:ml-[10px] h-[200px] flex justify-between mr-[200px] mt-[50px] max-lg:mr-[50px] max-md:ml-[50px]'>
                        <div className='max-lg:mr-[20px]'>
                            <ul className='flex flex-col items-center max-sm:ml-[20px]'>
                                <li className='pb-3'><a>Home</a></li>
                                <li className='pb-3'><a>Products</a></li>
                                <li className='pb-3'><a>Our Cafe</a></li>
                                <li className='pb-3'><a>Blog</a></li>
                                <li className='pb-3'><a>About Us</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-bold text-[20px] pb-3'>Contact Us</h1>
                            <p className='pb-3'>Call us : 2343452</p>
                            <p>Email: xyz@gmail.com</p>
                        </div>
                    </div>


                </div>
                <div className='absolute bottom-[0px]'>
                    <div className='border-t-2 border-gray-400 h-[10px] w-screen'></div>
                    <div className='h-[70px] flex justify-center items-center'>
                        <p className='font-bold text-[20px] max-md:text-[18px] max-sm:text-[14px]'>Copyright ©2024 . All rights reserved.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default View