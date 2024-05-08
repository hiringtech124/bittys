'use client'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { useState } from 'react';
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
                    <p className='text-[20px] max-xl:text-[16px] items-center max-lg:text-[12px] gap-3 flex'> <MdMail className='text-[40px] max-md:text-[25px]' />@gmail.com</p>
                    <p className='text-[20px] max-xl:text-[16px] items-center max-lg:text-[12px] gap-3 flex'><FaPhoneSquareAlt className='text-[40px] max-md:text-[25px]' />+91 91794 44179</p>
                    <div className='flex gap-[50px] max-xl:gap-[30px] max-md:gap-[20px]'>
                        <FaSquareInstagram className='text-[40px] max-md:text-[25px]' />
                        <FaFacebook className='text-[40px] max-md:text-[25px]' />
                        <AiFillTwitterCircle className='text-[40px] max-md:text-[25px]' />
                        <FaPinterest className='text-[40px] max-md:text-[25px]' />
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