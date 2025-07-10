import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Globe } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: <Award className='h-10 w-10 text-blue-400' />,
      value: '4+',
      label: 'Years of Excellence',
    },
    {
      icon: <Users className='h-10 w-10 text-blue-400' />,
      value: '250+',
      label: 'Successful Students',
    },
    {
      icon: <Globe className='h-10 w-10 text-blue-400' />,
      value: 'Global',
      label: 'Career Placements',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  return (
    <section id='about' className='py-20 sm:py-32 bg-slate-900/50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className='text-center max-w-3xl mx-auto'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-white'>
            Pioneering Professional Education in Sri Lanka
          </h2>
          <p className='mt-4 text-lg text-slate-300'>
            The College of Innovative Management and Engineering (CIME) is
            dedicated to shaping the next generation of industry leaders. We
            provide practical, expert-led training that bridges the gap between
            academic knowledge and real-world application.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='glassmorphism p-8 rounded-xl flex flex-col items-center'
            >
              <div className='mb-4'>{stat.icon}</div>
              <p className='text-4xl font-extrabold text-white'>{stat.value}</p>
              <p className='mt-2 text-slate-300 font-medium'>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
