import React from 'react'
import Title from './Title'
import { motion } from 'motion/react'

const Contact = () => {
    return (
        <div className='w-full py-10' id='contact'>
            <div className='max-w-6xl mx-auto py-20' >
                <Title title={'Get legal Assistance Today'} subtitle={'Ready to discuss your legal needs? Contact us for a consultation and let our experienced team provide the guidance you deserve.'} />
                <div className='flex flex-col md:flex-row px-8 py-20 gap-10'>
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className='text-2xl font-bold mb-4 text-gray-800'>Book Your Consultation</h3>
                        <form className='flex flex-col gap-6'>
                            <div className='flex flex-col md:flex-row gap-4 w-full'>
                                <div className='flex-1/2'>
                                    <p className='mb-4'>First Name</p>
                                    <input type="text" name='firstname' placeholder='John' required className='w-full p-3 border border-gray-200 text-gray-600 rounded-sm focus:outline-none' />
                                </div>
                                <div className='flex-1/2'>
                                    <p className='mb-4'>First Name</p>
                                    <input type="text" name='firstname' placeholder='Doe' required className='w-full p-3 border border-gray-200 text-gray-600 rounded-sm focus:outline-none' />
                                </div>
                            </div>
                            <div>
                                <h3 className='mb-4'>Email</h3>
                                <input type="email" placeholder='johndoe@email.com' className='w-full p-3 border border-gray-200 focus:outline-none' />
                            </div>
                            <div>
                                <h3 className='mb-4'>Phone</h3>
                                <input type="tel" placeholder='+254' className='w-full border border-gray-200 p-3 focus:outline-none' />
                            </div>
                            <div>
                                <h3 className='mb-4'>Practice Area</h3>
                                <select name="" id="" className='w-full p-3 border border-[#e8c468] rounded-sm focus:outline-none text-gray-500'>
                                    <option value="">Select a practice area</option>
                                    <option value="Corporate">Corporate and Commercial Law</option>
                                    <option value="Litigation">Litigation and Dispute Resolution</option>
                                    <option value="Employment">Employment and Labor Law</option>
                                    <option value="Family">Family Law</option>
                                    <option value="Property">Real Estate and Property Law</option>
                                    <option value="Intellectual">Intellectual Property</option>
                                </select>
                            </div>
                            <div>
                                <h3 className='mb-4'>Message</h3>
                                <textarea name="message" rows={5} className='w-full border border-gray-200 p-3 focus:outline-none rounded-sm' placeholder='Please describe your legal matter or questions...
'></textarea>

                            </div>
                            <button className='bg-[#e8c468] mx-auto py-3 px-12 rounded-sm text-gray-600'>Schedule a Consultation</button>
                        </form>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                        className='flex flex-col gap-10 flex-1/2'>
                        <div className='w-full p-6 inline-flex gap-8 shadow-sm hover:scale-103 transition-all'>
                            <div className='w-12 h-12 rounded-sm bg-[#e8c468]'></div>
                            <div className='flex flex-col'>
                                <h3 className='font-bold md:text-xl text-gray-600'>Office Location</h3>
                                <p className='text-gray-500'>123 Kimathi Street,<br /><span>Nairobi, Kenya</span></p>
                            </div>
                        </div>
                        <div className='w-full p-6 inline-flex gap-8 shadow-sm hover:scale-103 transition-all'>
                            <div className='w-12 h-12 rounded-sm bg-[#e8c468]'></div>
                            <div className='flex flex-col'>
                                <h3 className='font-bold md:text-xl text-gray-600'>Phone</h3>
                                <p className='text-gray-500'>+(254) 701 234567</p>
                            </div>
                        </div>
                        <div className='w-full p-6 inline-flex gap-8 shadow-sm hover:scale-103 transition-all'>
                            <div className='w-12 h-12 rounded-sm bg-[#e8c468]'></div>
                            <div className='flex flex-col'>
                                <h3 className='font-bold md:text-xl text-gray-600'>Email</h3>
                                <p className='text-gray-500'>info@joancolegal.com</p>
                            </div>
                        </div>
                        <div className='w-full p-6 inline-flex gap-8 shadow-sm hover:scale-103 transition-all'>
                            <div className='w-12 h-12 rounded-sm bg-[#e8c468]'></div>
                            <div className='flex flex-col'>
                                <h3 className='font-bold md:text-xl text-gray-600'>Office Hours</h3>
                                <p className='text-gray-500'>Monday - Friday: 9:00 AM - 6:00 PM<br /><span>Saturday: 10:00 AM - 2:00 PM</span></p>
                            </div>
                        </div>
                        <div className='w-full bg-gray-800 rounded-sm text-gray-50 text-center py-8 px-4 flex flex-col gap-3'>
                            <h3 className='text-xl'>Emergency legal Support</h3>
                            <p>Need urgent legal assistance? Our emergency hotline is available 24/7.</p>
                            <button className='border bg-[#e8c468] px-12 py-2 rounded-sm mx-auto text-gray-800'>Call Emergency Line</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Contact
