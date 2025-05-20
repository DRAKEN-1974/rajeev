'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import './Navbar.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${['/contact', '/shop', '/services'].includes(pathname) ? 'inner-page' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <Image
            src="/satishgaragewhite[1].png"
            alt="Sateesh Garage Logo"
            width={150}
            height={50}
            priority
            className="logo-image"
          />
        </Link>
        <div className="desktop-menu">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={item.href} 
                className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <div className="auth-buttons">
            <Link href="/login">
              <motion.button 
                className="login-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-user"></i> Login
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}