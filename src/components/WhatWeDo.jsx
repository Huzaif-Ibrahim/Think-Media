import React from 'react'
import { whatWeCanDo } from '../assets/assets'
import { motion } from 'motion/react'

const heading = 'What We Can Do?'
const headingWords = heading.split(' ')
const lastTwoIndex = headingWords.length - 2

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
}

const blocksContainerVariant = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.5 }
    }
}

const blockVariants = {
    hidden: { y: 20, opacity: 0, filter: 'blur(10px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } }
}


const WhatWeDo = () => {
    return (
        <div className='relative overflow-hidden' id='services'>
            <div className="-z-1 absolute -top-10 -left-20 w-[600px] h-[600px] rounded-full bg-linear-to-br from-[#10B981]/50 to-transparent opacity-40 blur-3xl"></div>
            <div className="z-0 absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-linear-to-tr from-yellow-100 to-transparent opacity-40 blur-3xl"></div>


            <motion.section
                initial='hidden'
                whileInView='visible'
                variants={containerVariants}
                viewport={{ once: true, margin: '-150px' }}
                className='px-4 lg:px-0 py-16 lg:py-32 max-w-7xl w-full mx-auto'>
                <div className="flex flex-wrap justify-center">
                    {
                        headingWords.map((word, indx) => {
                            const isLastTwo = indx >= lastTwoIndex
                            return <motion.h2 key={indx} variants={blockVariants} className={`mr-1.5 text-3xl lg:text-4xl font-medium text-center ${isLastTwo ? 'text-(--primary)' : 'text-(--text)'}`}>{word}</motion.h2>
                        })
                    }
                </div>
                <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin:'-300px 0px' }}
                variants={blocksContainerVariant}
                className='mt-16 lg:mt-24 w-full flex flex-col items-center justify-center lg:grid lg:grid-cols-4 gap-16'>
                    {
                        whatWeCanDo.map((item, indx) => {
                            return <motion.div
                            variants={blockVariants}
                            key={indx} className='group flex flex-col items-center lg:items-start justify-center gap-4 lg:gap-6 text-(--text)'>
                                <div className='p-4 group-hover:-translate-y-2 transition-all duration-300 rounded-lg border border-(--primary)'>
                                    <img src={item.svg} className='w-8' alt="" />
                                </div>

                                <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                                    <h5 className='text-xl'>{item.title}</h5>
                                    <p className='opacity-50'>{item.desc}</p>
                                </div>
                            </motion.div>
                        })
                    }
                </motion.div>
            </motion.section>
        </div>
    )
}

export default WhatWeDo