import React, { useEffect, useRef } from 'react'
import { assets, companies } from '../assets/assets';
import { ArrowRight } from 'lucide-react';
import { motion, useAnimate, useAnimation, useInView, useScroll, useTransform } from 'motion/react';

const headline = 'We Build Digital Experiences That Drive Growth'
const headlineWords = headline.split(' ')
const HEADLINE_DELAY = headlineWords.length * 0.1 + 0.2;

const subheading = 'From websites and branding to full-scale digital products, we help businesses create powerful digital experiences that attract customers, boost revenue, and scale their brand.'
const subheadingWords = subheading.split(' ')

const section2_text = 'Helped More Than 25 Businesses to Grow'
const section2_words = section2_text.split(' ')
const lastTwoIndex = section2_words.length - 3


const Hero = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const medium = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"])
    const fast = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"])

    const ref2 = useRef(null)
    const isInView = useInView(ref2, { once: true, margin: '-100px' })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [isInView, controls])


    return (
        <div ref={ref} className='px-4 md:px-0 relative overflow-hidden min-h-screen'>
            <div className="-z-1 absolute -top-20 -left-20 w-[500px] h-[600px] rounded-full bg-linear-to-br from-[#10B981] to-transparent opacity-40 blur-3xl"></div>
            <div className="-z-1 absolute -right-80 top-80 md:-top-80 md:right-140 w-[500px] h-[500px] rounded-full bg-linear-to-tr from-yellow-100 to-transparent opacity-40 blur-3xl"></div>
            <div className="-z-1 absolute bottom-40 -right-60 w-[400px] h-[400px] rounded-full bg-linear-to-tr from-[#10B981] to-transparent opacity-40 blur-3xl"></div>

            <section className="pt-28 md:pt-44 px-0 md:px-8 max-w-7xl w-full mx-auto">
                <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-16'>
                    <div className='flex flex-col'>
                        <div>
                            {
                                headlineWords.map((word, indx) => {
                                    return <motion.h1
                                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 * indx }}
                                        key={indx} className='mr-1.5 text-4xl md:text-6xl font-medium text-(--text) inline-block'>
                                        {word}
                                    </motion.h1>
                                })
                            }
                        </div>

                        <svg viewBox="0 12.5 100 12.5" xmlns="http://www.w3.org/2000/svg" className='w-full mt-8 md:mt-0 md:w-[500px] md:h-[100px]'>
                            <motion.path d="M0,25 C25,12.5 75,12.5 100,25"
                                fill="none"
                                stroke="#10B981"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: HEADLINE_DELAY }}
                            />

                        </svg>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: HEADLINE_DELAY + 0.5 }}
                            className='mt-8'
                        >
                            {
                                subheadingWords.map((word, indx) => {
                                    return <motion.p
                                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: HEADLINE_DELAY + (0.05 * indx) + 0.5 }}
                                        key={indx} className='inline-block mr-1.5 text-sm md:text-base text-(--text)'>
                                        {word}
                                    </motion.p>
                                })
                            }
                        </motion.div>

                        <motion.div
                            className='flex items-center justify-start mt-8 gap-4 text-sm md:text-base'>
                            <motion.button
                                onClick={() => {
                                    document.getElementById('contact')?.scrollIntoView();
                                }}
                                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.5, delay: 3 }}
                                className='cursor-pointer text-white px-8 py-2 rounded-full bg-[#10B981]'>Start Your Project</motion.button>
                            <motion.button
                                onClick={() => {
                                    document.getElementById('projects')?.scrollIntoView();
                                }}
                                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.5, delay: 3.3 }}
                                className='cursor-pointer flex items-center gap-2 py-2 text-[#10B981]'>View Portfolio <ArrowRight color='var(--primary)' size={16} /></motion.button>
                        </motion.div>

                    </div>

                    <motion.div className='relative'
                        initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        transition={{ duration: 0.5, delay: 4 }}>

                        <motion.div className='rounded-md bg-[#10B981] w-full md:w-90 mx-auto h-full md:h-110 flex justify-start items-end overflow-hidden'>
                            <img src={assets.hero_img} className='' alt="" />
                            <motion.img
                                style={{ y: fast }}
                                initial={{ opacity: 0, filter: "blur(5px)", scale: 0.8 }}
                                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                transition={{ duration: 0.5, delay: 4.1, ease: 'easeInOut' }}
                                src={assets.credit_card} className='absolute w-24 md:w-36 bottom-12 md:bottom-48 lg:bottom-12 -right-4 md:-right-8 lg:right-8' alt="" />
                            <motion.img
                                style={{ y: medium }}
                                initial={{ opacity: 0, filter: "blur(5px)", scale: 0.8 }}
                                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                transition={{ duration: 0.5, delay: 4.4, ease: 'easeInOut' }}
                                src={assets.svg1} className='absolute w-12 md:w-16 top-12 right-72 md:right-20' alt="" />
                            <motion.div
                                style={{ y: medium }}
                                initial={{ opacity: 0, filter: "blur(5px)", scale: 0.8 }}
                                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                transition={{ duration: 0.5, delay: 4.5, ease: 'easeInOut' }}
                                className='absolute w-8 md:w-12 top-36 left-8 md:left-12 flex items-center justify-center'>
                                <div className="relative inline-block">
                                    <img src={assets.svg2} className="w-full" />
                                    <img src={assets.check} className="w-2 md:w-4 absolute inset-0 m-auto" />
                                </div>
                            </motion.div>
                            <motion.img
                                style={{ y: medium }}
                                initial={{ opacity: 0, filter: "blur(5px)", scale: 0.8 }}
                                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                transition={{ duration: 0.5, delay: 4.6, ease: 'easeInOut' }}
                                src={assets.svg3} className='absolute w-12 -bottom-4 md:bottom-36 lg:-bottom-4 right-40 md:right-20 lg:right-40' alt="" />

                            <motion.div
                                style={{ y: fast }}
                                initial={{ opacity: 0, filter: "blur(5px)", scale: 0.8 }}
                                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                transition={{ duration: 0.5, delay: 4.3, ease: 'easeInOut' }}
                                className='p-2 md:p-4 rounded-md bg-white shadow absolute top-4 left-52 md:-left-12'>
                                <div className='flex items-center gap-4 md:gap-12 justify-between border-b border-zinc-200'>
                                    <div className='flex flex-col'>
                                        <p className='text-[8px] md:text-sm text-zinc-400'>Enter amount</p>
                                        <p className='text-sm md:text-md text-zinc-800'>$450.00</p>
                                    </div>
                                    <button className='px-2 md:px-4 py-1 text-xs md:text-base bg-[#10B981] rounded-full text-white'>Send</button>
                                </div>
                            </motion.div>

                            <motion.div
                                style={{ y: fast }}
                                initial={{ opacity: 0, filter: "blur(5px)", scale: 0.8 }}
                                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                transition={{ duration: 0.5, delay: 4.8, ease: 'easeInOut' }}
                                className='p-2 md:p-4 rounded-md bg-white shadow absolute bottom-12 md:bottom-32 lg:bottom-12 -left-2 md:left-2 lg:left-8'>
                                <div className='flex items-center gap-2 md:gap-4 justify-between'>
                                    <div className='flex flex-col'>
                                        <p className='text-[8px] md:text-sm text-zinc-400'>Total Income</p>
                                        <p className='text-sm md:text-md text-zinc-800'>$245.00</p>
                                    </div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 16.6666V8.33325" stroke="#52BD94" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 16.6666V3.33325" stroke="#52BD94" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 16.6667V11.6667" stroke="#52BD94" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                            </motion.div>

                        </motion.div>

                    </motion.div>
                </div>


                <div ref={ref2} className='mt-16 md:mt-36 py-8 md:py-16 flex flex-col items-center'>
                    <div className='flex flex-wrap text-center items-center justify-center'>
                        {
                            section2_words.map((word, indx) => {
                                const isLastTwo = indx >= lastTwoIndex;
                                return <motion.h2 key={indx}
                                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                    animate={controls}
                                    variants={{
                                        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, delay: indx * 0.1, ease: 'easeOut' } },
                                        hidden: { opacity: 0, y: 20, filter: 'blur(10px)' }
                                    }}
                                    className={`text-3xl mr-1.5 md:text-4xl font-medium text-center ${isLastTwo ? 'text-(--primary)' : 'text-(--text)'}`}>{word}</motion.h2>
                            })
                        }
                    </div>
                    <div className='relative flex max-w-7xl w-full mt-8 md:mt-16 overflow-hidden'>
                        <div className='flex bg-linear-to-r from-white z-2 to-transparent w-[50px] lg:w-[100px] h-[50px] absolute left-0'></div>
                        <div className='flex bg-linear-to-l from-white z-2 to-transparent w-[50px] lg:w-[100px] h-[50px] absolute right-0'></div>


                        <motion.div
                            animate={{ x: '-50%' }}
                            transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
                            className='flex flex-none gap-24 pr-24'>
                            {
                                Array.from({ length: 2 }).map((_, i) => (
                                    <React.Fragment key={i}>

                                        {companies.map((item, indx) => (
                                            <img key={indx} src={item} className='h-8' alt="" />
                                        ))}

                                    </React.Fragment>
                                ))
                            }
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero