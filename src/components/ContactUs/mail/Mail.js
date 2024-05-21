'use client'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useState } from 'react';
import Link from 'next/link';
function Mail() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic goes here
        console.log(formData);
        // Reset form fields
        setFormData({
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: ''
        });
    };
    return (
        <>
            <div className='w-full h-full bg-[#F5F9D6] flex justify-center max-sm:flex-col-reverse items-center gap-[150px] max-xl:gap-[80px] max-lg:gap-[90px] max-md:gap-[50px] py-[50px] text-[#292E36]'>
                <div className='text-[#292E36] max-sm:w-[280px] flex flex-col  gap-[30px] max-lg:gap-[15px]'>
                    <h1 className='font-serif font-bold text-[40px] max-xl:text-[35px] max-lg:text-[30px] max-md:text-[25px] max-sm:text-center'>Contact Information</h1>
                    <p className='text-[20px] max-xl:text-[16px] items-center max-lg:text-[12px] gap-3 flex'> <FaLocationDot className='text-[40px] max-md:text-[25px] ' />Plot No 123, Scheme no 78 Part 2 in<br />
                        Front of Hotel Grand Ten Vijay Nagar,<br />
                        Indore, MP, District - Indore 445533</p>
                    <p className='text-[20px] max-xl:text-[16px] items-center max-lg:text-[12px] gap-3 flex'> <MdMail className='text-[40px] max-md:text-[25px]' />business@bittyscafe.com</p>
                    <p className='text-[20px] max-xl:text-[16px] items-center max-lg:text-[12px] gap-3 flex tracking-tighter'><FaPhoneSquareAlt className='text-[40px] max-md:text-[25px] ' />+91 91794 44179 ,+91 96697 40666</p>
                    <div className='flex gap-[50px] max-xl:gap-[30px] max-md:gap-[20px]'>
                        <Link target="_blank" href="https://www.instagram.com/bittys_foodmohalla/"><FaSquareInstagram className='text-[40px] max-md:text-[25px]' /></Link>
                        <Link target="_blank" href="https://www.facebook.com/people/Bittys-Cafe/61559943420942/?viewas&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"><FaFacebook className='text-[40px] max-md:text-[25px]' /></Link>
                        
                    </div>
                </div>
                <div className='w-[600px] max-xl:w-[450px] max-lg:w-[350px] max-md:w-[250px] flex flex-col max-sm:items-center gap-5'>
                    <h5 className='text-[15px] text-center tracking-wider border-t border-b border-[#E1B168] border-solid py-1 w-[100px]'>MAIL US</h5>
                    <h1 className='font-bold font-serif text-[40px] max-xl:text-[35px] max-lg:text-[30px] max-md:text-[25px]'>Have a Question?</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-wrap gap-y-5 max-lg:gap-y-3 max-md:gap-y-2 gap-x-[60px] max-lg:gap-x-[20px]'>
                            <input className='bg-[#F5F9D6] border border-[#C4C4C4] text-[22px] max-xl:text-[16px] text-[#555555] w-[45%] max-xl:w-[43%] max-lg:w-[47%]  max-md:w-[100%] py-[10px] max-xl:py-[5px] px-5 max-xl:px-2' placeholder='Name' type="text" name="name" value={formData.name} onChange={handleChange} />
                            <input className='bg-[#F5F9D6] border border-[#C4C4C4] text-[22px] max-xl:text-[16px] text-[#555555] w-[45%] max-xl:w-[43%] max-lg:w-[47%] max-md:w-[100%] py-[10px] max-xl:py-[5px] px-5 max-xl:px-2' placeholder='Email' type="email" name="email" value={formData.email} onChange={handleChange} />
                            <input className='bg-[#F5F9D6] border border-[#C4C4C4] text-[22px] max-xl:text-[16px] text-[#555555] w-[45%] max-xl:w-[43%] max-lg:w-[47%] max-md:w-[100%] py-[10px] max-xl:py-[5px] px-5 max-xl:px-2' placeholder='Subject' type="text" name="subject" value={formData.subject} onChange={handleChange} />
                            <input className='bg-[#F5F9D6] border border-[#C4C4C4] text-[22px] max-xl:text-[16px] text-[#555555] w-[45%] max-xl:w-[43%] max-lg:w-[47%] max-md:w-[100%]   py-[10px] max-xl:py-[5px] px-5 max-xl:px-2' placeholder='Phone' type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                            <textarea className='bg-[#F5F9D6] border border-[#C4C4C4] text-[22px] max-xl:text-[16px] text-[#555555] w-full pb-[50px] max-xl:pb-[40px] px-5 max-xl:px-2' placeholder='Message' name="message" value={formData.message} onChange={handleChange} />
                        </div>
                        <button className='border border-[#E1B168] text-[#292E36] text-[22px] max-xl:text-[16px] text-center font-medium py-[20px] max-xl:py-[14px] max-lg:py-[10px] px-[67px] max-xl:px-[44px] max-lg:px-[30px] mt-[20px]'  type="submit">Send</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Mail