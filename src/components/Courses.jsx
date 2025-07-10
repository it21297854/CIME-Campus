import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Briefcase, Award, Target } from 'lucide-react'

const Courses = () => {
  const courseList = [
    {
      icon: <FileText className='h-8 w-8 text-blue-400' />,
      title: 'Certificate in Contract Administration',
      description:
        'Master the fundamentals of contract law, negotiation, and management for construction projects.',
    },
    {
      icon: <Briefcase className='h-8 w-8 text-blue-400' />,
      title: 'Professional Diploma in Contract Administration',
      description:
        'An advanced program for professionals seeking to deepen their expertise in complex contract scenarios.',
    },
    {
      icon: <Award className='h-8 w-8 text-blue-400' />,
      title: 'Quantity Surveying Practice Certificate',
      description:
        'Gain practical skills in cost estimation, tendering, and financial control of construction projects.',
    },
    {
      icon: <Target className='h-8 w-8 text-blue-400' />,
      title: 'RICS APC Preparation Program',
      description:
        'A specialized program to guide you through the Assessment of Professional Competence for RICS chartership.',
    },
  ]

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  return (
    <section id='courses' className='py-20 sm:py-32 '>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className='text-center max-w-3xl mx-auto'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-white'>
            Our Premier Programs
          </h2>
          <p className='mt-4 text-lg text-slate-300'>
            Designed by industry experts to provide you with the skills demanded
            by the global market.
          </p>
        </motion.div>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {courseList.map((course, index) => (
            <motion.div
              key={index}
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className='glassmorphism p-8 rounded-xl transition-all duration-300 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10'
            >
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>{course.icon}</div>
                <div>
                  <h3 className='text-xl font-bold text-white'>
                    {course.title}
                  </h3>
                  <p className='mt-2 text-slate-300'>{course.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
