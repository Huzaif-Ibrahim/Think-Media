import React, { useEffect, useRef, useState } from 'react'
import { assets, navItems } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react'

const Navbar = () => {

  const [currentMenu, setCurrentMenu] = useState('home')
  const [isScroll, setIsScroll] = useState(false)

  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    menuRef.current.style.transform = 'translateX(16rem)'
  }


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <>
      <motion.nav
        className={`z-10 w-full px-2 lg:px-4 py-2 fixed top-0 right-0 left-0 bg-transparent ${isScroll && 'bg-white/20 backdrop-blur-lg'} transition-all duration-500`}>
        <div className='flex items-center justify-between'>
          <img src={assets.logo3} alt="" className='h-8' />

          <ul className='hidden lg:flex items-center justify-center gap-8 text-back uppercase text-sm font-medium'>
            {
              navItems.map((item, indx) => {
                return <li key={indx} className='relative group'>
                  <a className={`${currentMenu == item ? 'text-black' : 'text-gray-500'} transition-all duration-500`} onClick={() => setCurrentMenu(item)} href={ item === 'home' ? '#top' : ('#'+item)}>{item}</a>
                  <span className={`h-px w-0 absolute left-0 -bottom-1 bg-[#10B981] transition-all duration-500 group-hover:w-full`}></span>
                </li>
              })
            }
          </ul>

          <div>
            <button onClick={() => {
              document.getElementById('contact')?.scrollIntoView();
            }} className='cursor-pointer hidden lg:block px-8 py-2 bg-[#10B981] text-white rounded-full'>Get a Quote</button>
          </div>

          <div className='block lg:hidden' onClick={openMenu}>
            <svg width="25" height="18" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.5 15.5L13.5 15.5" stroke="#141B34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M33.5 1.5L1.5 1.5" stroke="#141B34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M33.5 29.5L1.5 29.5" stroke="#141B34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>


      </motion.nav>
      <ul ref={menuRef} className={`shadow flex lg:hidden bg-white/20 backdrop-blur-2xl flex-col py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen text-black transition-all duration-500 ease-in-out gap-8`}>
        <div className='absolute right-2 top-2' onClick={closeMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="currentColor" fill="none" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" />
          </svg>
        </div>
        {
          navItems.map((item, indx) => {
            return <li key={indx} className='relative group' onClick={closeMenu}>
              <a className={`${currentMenu == item ? 'text-black' : 'text-gray-500'} font-medium uppercase transition-all duration-500`} onClick={() => setCurrentMenu(item)} href={ item === 'home' ? '#top' : ('#'+item)}>{item}</a>
            </li>
          })
        }
      </ul>
    </>
  )
}

export default Navbar