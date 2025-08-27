import React from 'react'
import Title from './Title'
import { legalServices } from '../assets/assets'
import { motion } from 'motion/react'

const PracticeAreas = () => {
    return (
        <div className='bg-gray-50 py-10' id='practice-areas'>
            <div className='max-w-6xl mx-auto my-20 flex flex-col'>
                <Title title={'Our Practice Areas'} subtitle={'Comprehensive legal services across multiple specializations, delivering expert counsel tailored to your unique needs.'} />

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-2 mb-10 pt-20'>
                    {legalServices.map((service, index) => (
                        <motion.div key={index}

                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0., delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className=' shadow-lg text-gray-600 px-8 py-10 flex flex-col gap-3 hover:scale-105 transition-all'>
                            <div className='w-12 h-12 rounded-lg bg-[#e8c468]/50'></div>
                            <h3 className='text-gray-800 text-lg md:text-xl font-bold '>{service.category}</h3>
                            <p className='text-base md:text-l'>{service.description}</p>
                            <ul>
                                {service.services.map((item, i) => (
                                    <li key={i} className='list-disc ml-4'>{item}</li>
                                ))}
                            </ul>
                            <button className='border border-[#e8c468] rounded-sm py-2 md:text-lg'>Learn More</button>
                        </motion.div>
                    ))}
                </div>

                <button className='w-xs mx-auto bg-[#e8c468] px-6 py-3 rounded-sm text-gray-600 cursor-pointer mt-6 hover:bg-[#D4AF52] hover:scale-103 transition-all'>Schedule a Consultation</button>
            </div>
        </div>
    )
}

export default PracticeAreas
