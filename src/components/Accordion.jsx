import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Accordion = ({ title, desc, number, link, variants }) => {

    const [isAccordion, setIsAccordion] = useState(false)

    return (
        <motion.div variants={variants} onClick={() => setIsAccordion(!isAccordion)} className='px-4 py-8 border-b border-zinc-400 w-full h-fit'>
            <button className='outline-0 flex justify-between items-center w-full'>
                <div className='flex items-center justify-center gap-8 text-(--text) text-2xl'>
                    <p className='opacity-50'>{number}</p>
                    <p className=''>{title}</p>
                </div>
                <svg viewBox="0 0 24 24" className={`h-6 w-6 ${isAccordion ? '-rotate-180' : 'rotate-0'} transition-all duration-300`} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#052a47"></path> </g></svg>
            </button>

            <div className={`grid overflow-hidden transition-all duration-500 ${isAccordion ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className={`overflow-hidden pt-4 text-(--text) opacity-50`}><p>{desc}<a
                    href={link}
                    target="_blank"
                    className="text-sm text-(--primary) opacity-80 ml-1 underline"
                >
                    {link.substring(7,30)}
                </a></p></div>
            </div>
        </motion.div>
    )
}

export default Accordion