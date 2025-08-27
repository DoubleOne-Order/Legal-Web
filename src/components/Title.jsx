import React from 'react'
import { motion } from 'motion/react'
const Title = ({ title, subtitle, align, center }) => {

    const alignClass = align === 'left' ? 'text-left' : 'text-center'
    const mxToggle = align === 'left' ? '' : 'mx-auto'

    return (
        <div className={`${alignClass}`} >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='font-bold text-4xl md:text-5xl mb-6'>{title}</motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className={`${mxToggle} text-lg md:text-xl text-gray-600 max-w-3xl`}>{subtitle}</motion.p>
        </div>
    )
}

export default Title
