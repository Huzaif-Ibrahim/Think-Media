import React, { useRef } from 'react'
import { HowWeDo } from '../assets/assets'
import { motion, useScroll, useTransform } from 'framer-motion'

const heading = 'How Can We Help Your Business?'
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


const How = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const fast = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
    const slow = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])

    return (
        <div ref={ref} className='bg-[#F9F8FE] relative overflow-hidden'>
            <div className="z-0 absolute -top-10 lg:top-80 -left-20 w-[600px] h-[600px] rounded-full bg-linear-to-br from-[#10B981]/50 to-transparent opacity-40 blur-3xl"></div>
            <div className="z-0 absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-linear-to-tr from-yellow-100 to-transparent opacity-40 blur-3xl"></div>

            <motion.section
                className='px-4 lg:px-0 py-16 lg:py-32 max-w-7xl w-full mx-auto'>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>

                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, margin: '-150px' }}
                        variants={containerVariants} className='flex flex-col justify-center gap-1 lg:gap-8 text-(--text) text-center lg:text-left'>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start">
                            {
                                headingWords.map((word, indx) => {
                                    const isLastTwo = indx >= lastTwoIndex
                                    return <motion.h2 key={indx} variants={blockVariants} className={`text-3xl lg:text-4xl font-medium mr-1.5 ${isLastTwo ? 'text-(--primary)' : 'text(--text)'}`}>{word}</motion.h2>
                                })
                            }
                        </div>
                        <motion.p variants={blockVariants} className='opacity-50'>We create high-performing websites, mobile applications, and full-scale digital solutions that help businesses grow.</motion.p>
                    </motion.div>

                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, margin: '-300px 0px' }}
                        variants={blocksContainerVariant}
                        className='hidden lg:grid grid-cols-2 gap-8'>
                        <motion.div style={{ y: fast }} className='flex flex-col w-full pt-12 gap-8'>
                            {
                                HowWeDo.slice(0, 2).map((item, indx) => {
                                    return <motion.div variants={blockVariants} key={indx} className='hover:-translate-y-2 transition-all duration-300 rounded-4xl px-2 py-16 border border-(--primary) flex flex-col items-center gap-8 text-center text-(--text)'>
                                        <div className='p-4 rounded-2xl bg-(--primary)/10'><img src={item.svg} className='w-12' alt="" /></div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <h5 className='text-xl font-medium'>{item.title}</h5>
                                            <p className='text-(--text)/50'>{item.desc}</p>
                                        </div>
                                    </motion.div>
                                })
                            }
                        </motion.div>

                        <motion.div style={{ y: slow }} className='flex flex-col w-full gap-8'>
                            {
                                HowWeDo.slice(2, 4).map((item, indx) => {
                                    return <motion.div variants={blockVariants} key={indx} className='hover:-translate-y-2 transition-all duration-300 rounded-4xl px-2 py-16 border border-(--primary) flex flex-col items-center gap-8 text-center text-(--text)'>
                                        <div className='p-4 rounded-2xl bg-(--primary)/10'><img src={item.svg} className='w-12' alt="" /></div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <h5 className='text-xl font-medium'>{item.title}</h5>
                                            <p className='text-(--text)/50'>{item.desc}</p>
                                        </div>
                                    </motion.div>
                                })
                            }
                        </motion.div>
                    </motion.div>


                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, margin: '-300px 0px' }}
                        variants={blocksContainerVariant}
                        className='flex flex-col lg:hidden w-full gap-4'>
                        {
                            HowWeDo.map((item, indx) => {
                                return <motion.div variants={blockVariants} key={indx} className='hover:-translate-y-2 transition-all duration-300 rounded-4xl px-2 py-16 border border-(--primary) flex flex-col items-center gap-6 text-center text-(--text)'>
                                    <div className='p-4 rounded-2xl bg-(--primary)/10'><img src={item.svg} className='w-12' alt="" /></div>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <h5 className='text-xl font-medium'>{item.title}</h5>
                                        <p className='text-(--text)/50'>{item.desc}</p>
                                    </div>
                                </motion.div>
                            })
                        }
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}

export default How