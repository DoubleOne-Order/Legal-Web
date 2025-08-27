import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-gray-800 w-full p-10 text-gray-400 '>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 py-6'>
                <div className='flex flex-col justify-start gap-4'>
                    <img src={assets.logoDark} alt="" className='w-30' />
                    <p>Legal consultants with diverse expertise across multiple areas of law, combining technical skill with deep understanding of our clients' needs.</p>
                    <div>

                    </div>
                </div>
                <div>
                    <h3 className='text-[#e8c468] mb-3 font-bold'>Practice Areas</h3>
                    <ul className='flex flex-col gap-3'>
                        <li><a href="" className='hover:text-[#e8c468] cursor-pointer'>Corporate & Commercial Law</a></li>
                        <li><a href="" className='hover:text-[#e8c468] cursor-pointer'>Litigation & Dispute Resolution</a></li>
                        <li><a href="" className='hover:text-[#e8c468] cursor-pointer'>Employment & Labor Law</a></li>
                        <li><a href="" className='hover:text-[#e8c468] cursor-pointer'>Family Laww</a></li>
                        <li><a href="" className='hover:text-[#e8c468] cursor-pointer'>Real Estate & Property Law</a></li>
                        <li><a href="" className='hover:text-[#e8c468] cursor-pointer'>Intellectual Property</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-[#e8c468] mb-3 font-bold'>Quick Links</h3>
                    <ul className='flex flex-col gap-3'>
                        <li><a href="#About" className='hover:text-[#e8c468] cursor-pointer'>About Us</a></li>
                        <li><a href="" className='hover:text-[#e8c468] cursor-pointer'>Our Team</a></li>
                        <li><a href="" className='hover:text-[#e8c468] cursor-pointer'>Blog & Legal Updates</a></li>
                        <li><a href="" className='hover:text-[#e8c468] cursor-pointer'>FAQs</a></li>
                        <li><a href="" className='hover:text-[#e8c468] cursor-pointer'>Careers</a></li>
                        <li><a href="" className='hover:text-[#e8c468] cursor-pointer'>Client Portal</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-[#e8c468] mb-3 font-bold'>Contact Us</h3>
                    <div className='flex flex-col gap-4'>
                        <p>123 Kimathi Street,<br />
                            <span>Nairobi, Kenya</span></p>
                        <p>+(254) 701 234567</p>
                        <p>info@joancolegal.com</p>
                    </div>
                    <button className='border bg-[#e8c468] mx-auto px-6 text-gray-600 rounded-sm py-2 mt-8'> Schedule a Consultation</button>
                </div>
            </div>
            <hr className='border border-gray-600 mb-4' />
            <div className='flex flex-col gap-4 md:flex-row justify-between'>
                <p>© 2024 Joan & Co Legal Consultants. All rights reserved.</p>
                <ul className='flex flex-col md:flex-row gap-4 '>
                    <li><a href="">Privacy policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Privacy policy</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
