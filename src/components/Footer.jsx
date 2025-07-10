import React from 'react'
import { GraduationCap, Mail, Linkedin, MessageSquare } from 'lucide-react'

const Footer = () => {
  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#courses', label: 'Courses' },
    { href: '#why-cime', label: 'Why CIME' },
    { href: '#success', label: 'Success Stories' },
    { href: '#contact', label: 'Contact' },
  ]

  const socialLinks = [
    { href: 'cimecampuslk@gmail.com', icon: <Mail className='h-6 w-6' /> },
    {
      href: 'https://www.linkedin.com/company/cime-college-of-innovative-management-and-engineering',
      icon: <Linkedin className='h-6 w-6' />,
    },
    {
      href: 'https://wa.me/94778386861',
      icon: <MessageSquare className='h-6 w-6' />,
    },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const headerOffset = 100 // adjust based on your header height (in px)
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      setIsOpen(false) // close mobile nav if open
    }
  }

  return (
    <footer className='bg-slate-900 border-t border-slate-800'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='flex flex-col items-center md:items-start'>
            <a
              href='#home'
              className='flex items-center space-x-2 mb-4'
              onClick={(e) => scrollToSection(e, '#home')}
            >
              <GraduationCap className='h-8 w-8 text-blue-400' />
              <span className='text-2xl font-bold text-white'>CIME</span>
            </a>
            <p className='text-slate-400 text-center md:text-left max-w-xs'>
              College of Innovative Management and Engineering, Colombo, Sri
              Lanka.
            </p>
          </div>

          <div className='text-center'>
            <p className='font-semibold text-white mb-4'>Quick Links</p>
            <ul className='space-y-2'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className='text-slate-400 hover:text-white transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col items-center md:items-end'>
            <p className='font-semibold text-white mb-4'>Connect With Us</p>
            <div className='flex space-x-4'>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 hover:text-white transition-colors'
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-slate-800 pt-8 text-center text-slate-500 space-y-2'>
          <p>&copy; {new Date().getFullYear()} CIME. All Rights Reserved.</p>
          <p>
            Developed by{' '}
            <span className='text-white font-medium'>S3 Developments</span> —
            Contact:{' '}
            <a
              href='tel:+94768800398'
              className='text-blue-400 hover:underline'
            >
              +94 768 800 398
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
