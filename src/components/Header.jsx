import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#courses', label: 'Courses' },
    { href: '#why-cime', label: 'Why CIME' },
    { href: '#success', label: 'Success Stories' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const headerOffset = 100
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      setIsOpen(false)
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-700'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <a
            href='#home'
            className='flex items-center space-x-2'
            onClick={(e) => scrollToSection(e, '#home')}
          >
            <a
              href='#home'
              className='flex items-center space-x-2'
              onClick={(e) => scrollToSection(e, '#home')}
            >
              <img src='./logo.png' alt='CIME Logo' className='h-20 w-auto' />
              <span className='text-2xl font-bold text-white'>CIME</span>
            </a>
          </a>

          <nav className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className='text-slate-300 hover:text-white transition-colors duration-300 font-medium'
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className='flex items-center'>
            <a href='#contact' onClick={(e) => scrollToSection(e, '#contact')}>
              <Button className='hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold'>
                Enroll Now
              </Button>
            </a>
            <div className='md:hidden ml-4'>
              <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='md:hidden bg-slate-900/95 pb-4'
        >
          <nav className='flex flex-col items-center space-y-4 pt-4'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className='text-slate-300 hover:text-white transition-colors duration-300 font-medium text-lg'
              >
                {link.label}
              </a>
            ))}
            <a href='#contact' onClick={(e) => scrollToSection(e, '#contact')}>
              <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold'>
                Enroll Now
              </Button>
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
