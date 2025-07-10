import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Phone, Mail, Linkedin, MessageSquare } from 'lucide-react'

const Contact = () => {
  const { toast } = useToast()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   toast({
  //     title: <span className='text-black'>'🚧 Feature in Progress!'</span>,
  //     description: (
  //       <span className='text-black'>
  //         This feature isn't implemented yet—but don't worry! You can request it
  //         in your next prompt! 🚀
  //       </span>
  //     ),
  //   })
  // }
  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value

    const subject = encodeURIComponent(`Inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )

    window.location.href = `mailto:cimecampuslk@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id='contact' className='py-20 sm:py-32 bg-slate-900/50 '>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-3xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white'>
            Start Your Journey Today
          </h2>
          <p className='mt-4 text-lg text-slate-300'>
            Have questions or ready to enroll? Get in touch with our admissions
            team. We're here to help you take the next step in your career.
          </p>
        </div>

        <div className='mt-16 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className='glassmorphism p-8 rounded-xl'
          >
            <h3 className='text-2xl font-bold text-white mb-6'>
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-slate-300'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='mt-1 block w-full bg-slate-800 border-slate-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-slate-300'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='mt-1 block w-full bg-slate-800 border-slate-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-slate-300'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  className='mt-1 block w-full bg-slate-800 border-slate-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                  required
                ></textarea>
              </div>
              <Button
                type='submit'
                className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3'
              >
                Submit Inquiry
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <h3 className='text-2xl font-bold text-white'>
              Other Ways to Connect
            </h3>
            <a
              href='https://wa.me/94778386861'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors'
            >
              <MessageSquare className='h-8 w-8 text-green-400' />
              <div className='ml-4'>
                <p className='font-semibold text-white'>WhatsApp</p>
                <p className='text-slate-300'>Tap to chat with us directly</p>
              </div>
            </a>
            <a
              href='mailto:cimecampuslk@gmail.com'
              className='flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors'
            >
              <Mail className='h-8 w-8 text-blue-400' />
              <div className='ml-4'>
                <p className='font-semibold text-white'>Email</p>
                <p className='text-slate-300'>cimecampuslk@gmail.com</p>
              </div>
            </a>
            <a
              href='https://www.linkedin.com/company/cime-college-of-innovative-management-and-engineering'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors'
            >
              <Linkedin className='h-8 w-8 text-sky-400' />
              <div className='ml-4'>
                <p className='font-semibold text-white'>LinkedIn</p>
                <p className='text-slate-300'>Follow our updates</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
