import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollToCourses = (e) => {
    e.preventDefault()
    document.querySelector('#courses').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 '
    >
      <div className='absolute inset-0 -z-10'>
        <img
          class='object-cover w-full h-full opacity-20'
          alt='Modern university campus with students walking'
          src='https://images.unsplash.com/photo-1677730277400-097e5da58a56'
        />
      </div>
      <div className='relative z-10 max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight'>
            <span className='block'>College of Innovative</span>
            <span className='block text-blue-400'>
              Management & Engineering
            </span>
          </h1>
          <p className='mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-300'>
            Delivering globally relevant education from Colombo, Sri Lanka. Your
            gateway to a successful international career in engineering and
            management.
          </p>
          <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button
              size='lg'
              className='bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg w-full sm:w-auto'
              onClick={scrollToCourses}
            >
              Explore Our Courses <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
            <a
              href='#contact'
              onClick={(e) => {
                e.preventDefault()
                document
                  .querySelector('#contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Button
                size='lg'
                variant='outline'
                className='border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold text-lg w-full sm:w-auto'
              >
                Contact Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
