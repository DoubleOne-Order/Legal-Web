import React from 'react'
import Title from './Title'
import { motion } from 'motion/react'
import { div } from 'motion/react-client'

const About = () => {
    return (
        <div className='w-full py-20' id='about'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row px-4 py-20 ' >
                <div className='flex flex-1/2 flex-col gap-6'>
                    <Title title={'Why Choose Joan and Co?'} subtitle={"As legal consultants with diverse expertise across multiple areas of law, we pride ourselves on combining technical skill with a deep understanding of our clients' needs."} align={'left'} />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1 }}
                        viewport={{ once: true }}

                        className=''>
                        <h3 className='text-lg md:text-xl text-gray-700 font-bold'>Expert legal team</h3>
                        <p className='text-gray-500'>Experienced Advocates specializing in multiple practice areas</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.3 }}
                        viewport={{ once: true }}

                        className=''>
                        <h3 className='text-lg md:text-xl text-gray-700 font-bold'>Client-Centered Approach</h3>
                        <p className='text-gray-500'>Personalized strategies tailored to your unique situation</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.5 }}
                        viewport={{ once: true }}

                        className=''>
                        <h3 className='text-lg md:text-xl text-gray-700 font-bold'>Proven Track Record</h3>
                        <p className='text-gray-500'>Consistent success in achieving favorable outcomes for clients</p>
                    </motion.div>
                    <div className='flex gap-4 mt-4'>
                        <button className=' bg-blue-950 px-6 py-3 text-gray-100 rounded-sm'>Meet the Team</button>
                        <button className='border border-black px-6 py-2 rounded-sm'>View Case Studies</button>
                    </div>

                </div>
                <div className='grid grid-cols-2 justify-between gap-8 px-4 py-6'>
                    <div className='flex flex-col items-center gap-2 w-40'>
                        <div className='w-20 h-20 bg-amber-400/50 rounded-full'></div>
                        <h3 className='text-center text-lg md:text-xl font-bold'>50+</h3>
                        <p className='text-xs md:text-sm text-gray-500'>Clients Served</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 w-40'>
                        <div className='w-20 h-20 bg-amber-400/50 rounded-full'></div>
                        <h3 className='text-center text-lg md:text-xl font-bold'>3+</h3>
                        <p className='text-xs md:text-sm text-gray-500'>Years Experience</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 w-40'>
                        <div className='w-20 h-20 bg-amber-400/50 rounded-full'></div>
                        <h3 className='text-center text-lg md:text-xl font-bold'>98%</h3>
                        <p className='text-xs md:text-sm text-gray-500'>Success Rate</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 w-40'>
                        <div className='w-20 h-20 bg-amber-400/50 rounded-full'></div>
                        <h3 className='text-center text-lg md:text-xl font-bold'>24/7</h3>
                        <p className='text-xs md:text-sm text-gray-500'>Client Support</p>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default About
