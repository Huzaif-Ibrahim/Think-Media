import React from 'react'
import Accordion from './Accordion'
import { case_study } from '../assets/assets'
import { motion } from 'framer-motion'

const heading = 'Browse Our Case Studies'
const headingWords = heading.split(' ')
const lastTwoIndex = headingWords.length - 1

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
}

const blockVariants = {
    hidden: { y: 20, opacity: 0, filter: 'blur(10px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } }
}

const blocksContainerVariant = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.5 }
    }
}

const Projects = () => {
    return (
        <div className='bg-[#F9F8FE] relative overflow-hidden' id='projects'>
            <div className="z-0 absolute -top-10 lg:top-80 -left-20 w-[600px] h-[600px] rounded-full bg-linear-to-br from-[#10B981]/50 to-transparent opacity-40 blur-3xl"></div>
            <div className="z-0 absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-linear-to-tr from-yellow-100 to-transparent opacity-40 blur-3xl"></div>

            <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, margin:'-150px'}}
            variants={containerVariants}
            className='px-4 lg:px-0 py-16 pb-28 lg:py-32 max-w-7xl w-full mx-auto flex flex-col lg:grid grid-cols-2 gap-12 lg:gap-16'>
                <div className='lg:pt-8 flex flex-col justify-start gap-1 lg:gap-4 text-(--text) text-center lg:text-left'>
                    <div className="flex flex-wrap justify-center lg:justify-start">
                        {
                            headingWords.map((word, indx) => {
                                    const isLastTwo = indx >= lastTwoIndex
                                return <motion.h2 variants={blockVariants} key={indx} className={`mr-1.5 text-3xl lg:text-4xl font-medium ${isLastTwo ? 'text-(--primary)' : 'text(--text)'}`}>{word}</motion.h2>
                            })
                        }
                    </div>
                    <motion.p className='opacity-50' variants={blockVariants}>Discover real-world examples of how we've helped businesses overcome their toughest challenges and achieve measurable success.</motion.p>
                </div>

                <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, margin:'-300px 0px'}}
                variants={blocksContainerVariant}
                className=''>
                    {
                        case_study.map((item,indx) => {
                            return <Accordion variants={blockVariants} key={indx} number={indx+1} title={item.title} desc={item.desc} link={item.link} />
                        })
                    }
                </motion.div>



            </motion.section>
        </div>
    )
}

export default Projects