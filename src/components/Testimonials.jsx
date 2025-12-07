import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowRight, ArrowLeft, Star } from 'lucide-react';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { testimonials } from '../assets/assets';

const heading = 'Hear From Our Happy Clients'
const headingWords = heading.split(' ')
const lastTwoIndex = headingWords.length - 2

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

const Testimonials = () => {

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const breakpointsResponsive = {
    '@0.00': {
      slidesPerView: 1,
      spaceBetween: 10
    },
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 20
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 10
    },
    '@1.50': {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }

  const handleSwiperEvents = (swiper) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <div className='bg-[#F9F8FE] relative overflow-hidden' id='testimonials'>
      <div className="z-0 absolute -top-10 lg:top-80 -left-20 w-[600px] h-[600px] rounded-full bg-linear-to-br from-[#10B981]/50 to-transparent opacity-40 blur-3xl"></div>
      <div className="z-0 absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-linear-to-tr from-yellow-100 to-transparent opacity-40 blur-3xl"></div>

      <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{once: true, margin: '-150px'}}
      variants={containerVariants}
      className='px-4 lg:px-0 py-24 lg:py-32 max-w-7xl w-full mx-auto flex flex-col gap-16 lg:gap-28'>

        <div className='flex flex-col justify-center items-center gap-1 lg:gap-4 text-(--text) text-center lg:text-left'>
          <div className="flex flex-wrap items-center justify-center">
            {
              headingWords.map((word, indx) => {
                const isLastTwo = indx>= lastTwoIndex
                return <motion.h2 variants={blockVariants} key={indx} className={`mr-1.5 text-3xl lg:text-4xl font-medium ${isLastTwo ? 'text-(--primary)' : 'text-(--text)'}`}>{word}</motion.h2>
                
              })
            }
          </div>
          <motion.p variants={blockVariants} className='opacity-50'>Real stories from people who trusted us with their projects.</motion.p>
        </div>

        <div className='flex flex-col gap-4 w-full'>
          <div className='flex items-center justify-end gap-2'>
            <button className={`custom-prev p-2 rounded-full bg-(--primary) ${isBeginning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} disabled={isBeginning}>
              <ArrowLeft size={20} color='var(--text)' />
            </button>

            <button className={`custom-next p-2 rounded-full bg-(--primary) ${isEnd ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} disabled={isEnd}>
              <ArrowRight size={20} color='var(--text)' />
            </button>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev'
            }}
            breakpoints={breakpointsResponsive}
            onInit={handleSwiperEvents}
            onSlideChange={handleSwiperEvents}
            modules={[Navigation]}
            className="mySwiper w-full"
          >
            {testimonials.map((item, indx) => {
              return <SwiperSlide key={indx}>
                <div className='bg-white/50 p-6 rounded-xl border border-(--primary) text-(--text) flex flex-col gap-10'>
                  <p className='opacity-80 italic'>"{item.msg}"</p>

                  <div className='flex justify-between items-center'>
                    <div className='flex items-center justify-center gap-2'>
                      <img src={item.img} className='h-12 w-12 rounded-full' alt="" />
                      <div className='flex flex-col object-cover'>
                        <p className=''>{item.name}</p>
                        <p className='opacity-80 text-sm'>{item.role}</p>
                      </div>
                    </div>

                    <div className='flex items-center justify-center gap-1 px-2 py-1 rounded bg-yellow-100'>
                      <Star size={15} color='yellow' fill='yellow' />
                      <p className='text-sm text-yellow-500'>{item.rating}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </motion.section>
    </div>
  )
}

export default Testimonials