import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div className='w-full flex  items-center justify-between h-16 px-8 border border-b-gray-200 fixed top-0 left-0 z-9999 bg-white'>
            <img src={assets.logo} alt="" className='w-20' />
            <ul className='hidden md:flex items-center space-x-8 text-gray-600'>
                <li><a href="#home">Home</a></li>
                <li><a href="#practice-areas">Practice Areas</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#resources">Resources</a></li>
                <button className='px-6 py-2 bg-[#e8c468] rounded-md hover:bg-[#D4AF52] cursor-pointer hover:scale-103 transition-all'><a href="#contact">Book Consultation</a></button>
            </ul>
        </div>
    )
}

export default Navbar
