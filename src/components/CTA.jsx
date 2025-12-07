import React, { useState } from 'react'
import { assets, testimonials } from '../assets/assets'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const heading = 'Grow Your Presence in Social Media 😍'
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

const CTA = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setDesc('')
        toast.success("We will contact you soon!")
    }

    return (
        <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{once: true, margin: '-150px'}}
        variants={containerVariants}
        className='w-full h-fit relative py-6 lg:py-12'
        id='contact'
        >
            <img src={assets.cta_bg} className='-z-1 h-full w-full absolute inset-0' alt="" />
            <div className='px-4 lg:px-0 flex flex-col text-(--text) gap-16 lg:gap-16 lg:grid lg:grid-cols-2 items-center w-full max-w-7xl mx-auto py-16'>
                <div className='flex flex-col gap-4'>
                    <div className="flex flex-wrap items-center justify-start">
                        {
                            headingWords.map((word,indx) => {
                                return <motion.h2 variants={blockVariants} key={indx} className='text-5xl font-medium mr-1.5'>{word}</motion.h2>
                            })
                        }
                    </div>
                    <motion.p variants={blockVariants}>Join with more than 200 happy customers</motion.p>
                    <motion.div variants={blockVariants} className='flex items-center gap-1'>
                        <div className='flex items-center -space-x-4'>
                            {
                                testimonials.map((item, indx) => {
                                    return <img key={indx} src={item.img} className='h-8 w-8 rounded-full border border-white' alt="" />
                                })
                            }
                        </div>
                        <p>and others</p>
                    </motion.div>
                </div>

                <form onSubmit={(e) => handleSubmit(e)} className='h-fit w-full flex flex-col items-center justify-center gap-4' action="">
                    <motion.h5 variants={blockVariants} className='text-xl text-(--text)'>Contact Us:</motion.h5>
                    <div className='grid grid-cols-2 gap-4 w-full'>
                        <motion.input variants={blockVariants} required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter your Name' className='rounded border border-(--primary) bg-(--primary)/20 p-2 outline-0' />
                        <motion.input variants={blockVariants} required value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter your Email' className='rounded border border-(--primary) bg-(--primary)/20 p-2 outline-0'/>
                    </div>
                    <motion.textarea variants={blockVariants} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Description(optional)' className='w-full rounded border border-(--primary) bg-(--primary)/20 p-2 outline-0' ></motion.textarea>
                    <motion.button variants={blockVariants} type='submit' className='cursor-pointer px-8 py-2 rounded-full bg-(--primary) text-white outline-0'>Submit</motion.button>
                </form>
            </div>
        </motion.div>
    )
}

export default CTA