import React from 'react'

function About() {
    return (
        <>
            <div className='h-full w-full flex justify-end max-md:justify-center pb-[166px] max-md:pb-[100px] max-md:pb-[50px]'>

                <div className=' w-[600px] max-lg:w-[500px] mr-[200px] max-xl:mr-[100px] max-xl:mr-[50px]  mt-[200px] max-md:mt-[100px] max-sm:mt-[50px] flex flex-col justify-between max-sm:mt-[0px]
                     max-md:ml-[0px] max-md:mr-[0px] max-md:items-center '>

                    <h1 className='font-bold text-[70px] font-serif mb-[20px] max-lg:text-[60px] max-md:text-[50px] max-sm:text-[30px]'>About our Cafe</h1>


                    <p className='w-[500px] max-sm:w-[300px] text-[15px] mb-[20px] max-md:text-[14px] max-sm:text-[10px] max-lg:text-[15px] max-sm:p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
                        Maecenas ac quam lacinia,
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
                        Maecenas ac quam lacinia,
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus lobortis elit et mi lobortis, sed varius tortor aliquam.
                        Maecenas ac quam lacinia,
                    </p>

                    <button className='w-[155px] h-[70px] bg-[#5B422E] max-md:w-[130px] max-md:h-[60px] max-sm:w-[110px] max-sm:h-[55px] rounded-lg text-[#fff] text-[16px] max-sm:text-[12px]'>Explore More</button>
                </div>
            </div>
        </>
    )
}

export default About