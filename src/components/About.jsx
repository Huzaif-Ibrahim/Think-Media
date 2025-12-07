import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const headline = 'Great Digital Product Agency Since 2022'
const headlineWords = headline.split(' ')
const lastTwoIndex = headlineWords.length - 1

const About = () => {

    const videoRef = useRef()
    const [paused, setPaused] = useState(true)

    const togglePlay = () => {
        if (paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    };

    // word variants
    const wordVariants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } }
    };

    return (
        <div className='bg-[#F9F8FE]' id='about'>
            <div className='px-4 lg:px-0 py-16 lg:py-32 max-w-7xl w-full mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-8'>
                    <div className='relative w-full h-fit rounded-xl shadow overflow-hidden'>
                        <video
                            ref={videoRef}
                            className="w-full"
                            onPlay={() => setPaused(false)}
                            onPause={() => setPaused(true)}
                            onEnded={() => setPaused(true)}
                            src={assets.about_video}>
                            <source src={assets.about_video} type='video/mp4' />
                        </video>
                        {paused && (
                            <button
                                className="absolute inset-0 flex items-center justify-center bg-black/10 transition-all duration-500"
                                onClick={togglePlay}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#10B981" className="bi bi-play-fill cursor-pointer" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                </svg>
                            </button>
                        )}
                    </div>

                    <motion.div
                        initial='hidden'
                        variants={containerVariants}
                        whileInView='visible'
                        viewport={{ once: true, margin: '-100px' }}
                        className='flex flex-col justify-center items-start gap-4 lg:gap-8 text-(--text)'>
                        <div className='flex flex-wrap items-center justify-start'>
                            {
                                headlineWords.map((word, indx) => {
                                    const isLastTwo = indx >= lastTwoIndex;
                                    return <motion.h2 key={indx}
                                        variants={wordVariants}
                                        className={`text-3xl mr-1.5 lg:text-4xl font-medium ${isLastTwo ? 'text-(--primary)' : 'text-(--text)'}`}>{word}</motion.h2>
                                })
                            }
                        </div>
                        <motion.p
                            variants={wordVariants}
                        >Since 2022, we have been building meaningful digital products that help brands move faster, grow smarter, and deliver better experiences to their users.
                            What started as a small initiative has evolved into a dedicated digital product agency focused on solving real business problems with design, technology, and strategy.</motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About