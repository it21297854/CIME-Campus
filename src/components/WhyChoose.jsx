import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Clock, Users, Zap } from 'lucide-react'

const WhyChoose = () => {
  const features = [
    {
      icon: <DollarSign className='h-8 w-8 text-blue-400' />,
      title: 'Affordable Pricing',
      description:
        'High-quality education that doesn’t break the bank, with clear, upfront costs.',
    },
    {
      icon: <Clock className='h-8 w-8 text-blue-400' />,
      title: 'Flexible Payment Plans',
      description:
        'We offer installment plans to make our programs accessible to everyone.',
    },
    {
      icon: <Users className='h-8 w-8 text-blue-400' />,
      title: 'Expert-Led Training',
      description:
        'Learn from seasoned professionals with years of hands-on industry experience.',
    },
    {
      icon: <Zap className='h-8 w-8 text-blue-400' />,
      title: 'Strong Industry Connections',
      description:
        'Leverage our network for internships, job placements, and career guidance.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  return (
    <section id='why-cime' className='py-20 sm:py-32 bg-slate-900/50 '>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-white'>
              Why Choose CIME?
            </h2>
            <p className='mt-4 text-lg text-slate-300'>
              We are committed to your success. Our unique approach combines
              affordability, flexibility, and industry relevance to give you the
              ultimate competitive edge.
            </p>
            <div className='mt-8'>
              <img
                class='rounded-xl shadow-2xl w-full h-auto object-cover'
                alt='A group of students collaborating in a modern classroom'
                src='https://images.unsplash.com/photo-1679316481049-4f6549df499f'
              />
            </div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            className='space-y-8'
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='flex items-start space-x-4'
              >
                <div className='flex-shrink-0 bg-slate-800 p-3 rounded-full'>
                  {feature.icon}
                </div>
                <div>
                  <h3 className='text-xl font-bold text-white'>
                    {feature.title}
                  </h3>
                  <p className='mt-1 text-slate-300'>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
