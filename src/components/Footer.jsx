import React from 'react'
import { assets, navItems } from '../assets/assets'
import { ArrowBigUp, ArrowUp, ArrowUpAZ, Github, Linkedin, TwitchIcon, Twitter, TwitterIcon } from 'lucide-react'


    const legal = ['Policy Privacy', 'Terms & Services']
    const contact = ['+91 96068 94825', 'i.huzaif.ibrahim@gmail.com']

const Footer = () => {
  return (
    <div className='w-full h-fit bg-white text-(--text)'>
        <div className='w-full h-full px-4 max-w-7xl mx-auto lg:px-0 py-8 lg:py-16 flex flex-col gap-12 items-start lg:grid grid-cols-[2fr_1fr_1fr_1fr]'>

            <div className='flex flex-col gap-4'>
                <img src={assets.logo3} className='w-56' alt="" />
                <p className='px-2'>A creative digital studio building websites, apps, and brand experiences that drive results.</p>
                <div className='flex items-center gap-3 px-2'>
                    <a href="" target='_blank'><img src={assets.x_icon} className='w-6 cursor-pointer' alt="" /></a>
                    <a href="" target='_blank'><img src={assets.instagram_icon} className='w-6 cursor-pointer' alt="" /></a>
                    <a href="" target='_blank'><img src={assets.github_icon} className='w-6 cursor-pointer' alt="" /></a>
                </div>
                <a href="#top" className='flex items-center gap-2 p-4 border border-(--text) w-fit cursor-pointer mt-0 lg:mt-4 ml-2'>Back to top <ArrowUp size={20} color='var(--text)' /> </a>
            </div>

            <div className='flex flex-col gap-2 text-(--text) pl-2 lg:pl-0'>
                <p className='font-medium'>Site Map</p>
                <div className='flex flex-col gap-1 '>
                    {
                        navItems.map((item,indx) => {
                            return <a href={'#'+item} className='opacity-70 hover:opacity-100 transition-all duration-100 w-fit' key={indx}>{item}</a>
                        })
                    }
                </div>
            </div>

            <div className='flex flex-col gap-2 text-(--text) pl-2 lg:pl-0'>
                <p className='font-medium'>Legal</p>
                <div className='flex flex-col gap-1 '>
                    {
                        legal.map((item,indx) => {
                            return <p className='opacity-70 hover:opacity-100 transition-all duration-100 w-fit' key={indx}>{item}</p>
                        })
                    }
                </div>
            </div>

            <div className='flex flex-col gap-2 text-(--text) pl-2 lg:pl-0'>
                <p className='font-medium'>Contact</p>
                <div className='flex flex-col gap-1 '>
                    {
                        contact.map((item,indx) => {
                            return <p className='opacity-70 hover:opacity-100 transition-all duration-100 w-fit' key={indx}>{item}</p>
                        })
                    }
                </div>
            </div>

        </div>

        <div className='w-full h-fit p-4 flex items-center justify-center border-t border-(--primary)'>
            2025 All rights reserved. 
        </div>
    </div>
  )
}

export default Footer