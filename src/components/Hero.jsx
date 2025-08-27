import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Hero = () => {
    return (
        <div className='w-full min-h-screen bg-gray-800/90 text-white text-center relative overflow-hidden' id='home'>
            <img className='w-full h-full absolute top-0 left-0 -z-1 object-cover bg-fixed' src={assets.hero} alt="hero image" />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className='max-w-6xl px-6 mx-auto'>
                <div className='container mx-auto px-4 pt-40 pb-10'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}

                        className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>Legal Excellence <br /> <span className='text-[#e8c468]'>Redefined</span></motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        viewport={{ once: true }}

                        className='text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/80'>We are Legal consultants with diverse expertise across multiple areas of law. We pride ourselves on combining technical skill with a deep understanding of our clients' needs.</motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}

                        className=' flex flex-col justify-center  md:flex-row gap-4'>
                        <button className='px-12 py-5 bg-[#e8c468] text-gray-800 rounded-2xl hover:scale-105 hover:bg-[#D4AF52] cursor-pointer transition-all'>Schedule Consultation</button>
                        <button className='px-12 py-5 border border-gray-400 rounded-2xl inset-0 cursor-pointer hover:scale-105
                    hover:bg-white hover:text-gray-800 transition-all'>View Practice Areas</button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}

                        className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-4 md:px-8 justify-center'>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.3 }}
                            viewport={{ once: true }}
                            className='flex flex-col md:flex-row  items-center gap-4 mx-auto'>
                            <div className='w-20 h-20 rounded-full shrink-0 bg-white/10 animate-float flex justify-around items-center'>
                                <img className='w-10' src={assets.scale} alt="" />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h3 className='text-xl font-bold'>Expert Legal Counsel</h3>
                                <p>Comprehensive legal <br /> <span className='text-[#e8c468]'>Solutions</span></p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                            viewport={{ once: true }}
                            className='flex flex-col md:flex-row items-center gap-4 justify-center'>
                            <div className='w-20 h-20 rounded-full shrink-0 bg-white/10 animate-float flex justify-around items-center' style={{ animationDelay: '1s' }}>
                                <img className='w-10' src={assets.shield} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-xl font-bold'>Trusted Advisors</h3>
                                <p>Your Legal Protection <br /> <span className='text-[#e8c468]'>Priority</span></p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.7 }}
                            viewport={{ once: true }}
                            className='flex flex-col md:flex-row  items-center gap-4 justify-center'>
                            <div className='w-20 h-20 rounded-full shrink-0 bg-white/10 animate-float flex justify-around items-center' style={{ animationDelay: '2s' }}>
                                <img className='w-10' src={assets.people} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-xl font-bold'>Client Focused</h3>
                                <p>Personalized legal <br /> <span className='text-[#e8c468]'>Strategies</span></p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div >
        </div >
    )
}

export default Hero
