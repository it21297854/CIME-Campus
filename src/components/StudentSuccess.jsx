import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const StudentSuccess = () => {
  const locations = [
    {
      name: 'Middle East',
      image: 'A skyline of Dubai with futuristic buildings',
    },
    { name: 'Europe', image: 'The Eiffel Tower in Paris at sunset' },
    { name: 'Asia', image: 'The Singapore skyline with Marina Bay Sands' },
  ]

  return (
    <section id='success' className='py-20 sm:py-32 '>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className='text-center max-w-3xl mx-auto'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-white'>
            Our Alumni, Our Pride
          </h2>
          <p className='mt-4 text-lg text-slate-300'>
            CIME graduates are making their mark across the globe, working with
            leading companies in key international markets. Their success is a
            testament to the quality and relevance of our programs.
          </p>
        </motion.div>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='relative rounded-xl overflow-hidden group'
          >
            <img
              class='w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500'
              alt='A skyline of Dubai with futuristic buildings'
              src='https://images.unsplash.com/photo-1638180940769-bc94c1ffc9cd'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
            <div className='absolute bottom-0 left-0 p-6'>
              <div className='flex items-center text-white'>
                <MapPin className='h-6 w-6 mr-2' />
                <h3 className='text-2xl font-bold'>Middle East</h3>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='relative rounded-xl overflow-hidden group'
          >
            <img
              class='w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500'
              alt='The Eiffel Tower in Paris at sunset'
              src='https://images.unsplash.com/photo-1679231926690-cb1e8abfcefd'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
            <div className='absolute bottom-0 left-0 p-6'>
              <div className='flex items-center text-white'>
                <MapPin className='h-6 w-6 mr-2' />
                <h3 className='text-2xl font-bold'>Europe</h3>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='relative rounded-xl overflow-hidden group'
          >
            <img
              class='w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500'
              alt='The Singapore skyline with Marina Bay Sands'
              src='https://images.unsplash.com/photo-1628620013145-c0547b16936a'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
            <div className='absolute bottom-0 left-0 p-6'>
              <div className='flex items-center text-white'>
                <MapPin className='h-6 w-6 mr-2' />
                <h3 className='text-2xl font-bold'>Asia</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StudentSuccess
