'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from "lucide-react"
import { LoginForm } from './LoginForm' // Adjust the import path if needed

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState([])
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isLoginOpen, setIsLoginOpen] = useState(false) // New state for login form visibility
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleExpanded = (itemName) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(item => item !== itemName)
        : [...prev, itemName]
    )
  }

  const handleDropdownOpen = (itemName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown(itemName)
  }

  const handleDropdownClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 300)
  }

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#aboutus' },
    { name: 'Why Choose Us', href: '#whychooseus' },
    { 
      name: 'Learning Sessions', 
      href: '#session',
      dropdown: [
        { name: 'Live Classes', href: '/live-classes' },
        { name: 'Recorded Sessions', href: '/recorded-sessions' },
        { name: 'Study Materials', href: '/study-materials' },
      ]
    },
    { name: 'Mentors', href: '#mentor' },
    { name: 'Doubt Clearing', href: '/doubt-clearing' },
    { name: 'Testimonials', href: '#testimonial' },
    { name: 'Contact Us', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sections = ['hero', 'mentor', 'whychooseus', 'session', 'testimonial', 'aboutus']
      
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            const link = document.querySelector(`a[href="#${section}"]`)
            if (link) link.classList.add('text-[#FFC300]')
          } else {
            const link = document.querySelector(`a[href="#${section}"]`)
            if (link) link.classList.remove('text-[#FFC300]')
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-[#4A0E4E] text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden" onClick={toggleSidebar} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
          <Link href='/'>
            <Image src="/images/neet-logo.png" alt="NEET Preparation Logo" width={61} height={40} />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => handleDropdownOpen(item.name)}
              onMouseLeave={handleDropdownClose}
            >
              <Link href={item.href} className="hover:text-[#FFC300] transition duration-300">
                {item.name}
                {item.dropdown && <ChevronDown className="inline-block h-4 w-4 ml-1" />}
              </Link>
              {item.dropdown && (
                <div 
                  ref={dropdownRef}
                  className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ${
                    openDropdown === item.name ? 'block' : 'hidden'
                  } z-50`}
                  onMouseEnter={() => handleDropdownOpen(item.name)}
                  onMouseLeave={handleDropdownClose}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link 
                      key={subIndex} 
                      href={subItem.href} 
                      className="block px-4 py-2 text-sm text-[#4A0E4E] hover:bg-[#E3F2FD] hover:text-[#00A896]"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button 
            className="bg-[#FFC300] text-[#4A0E4E] hover:bg-[#00A896] hover:text-white font-semibold py-2 px-4 rounded transition duration-300"
            onClick={() => setIsLoginOpen(true)} // Open login form
          >
            Login
          </button>
        </nav>
      </div>

      {/* Login Form Popup */}
      <LoginForm 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} // Close login form
      />

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#4A0E4E] transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex justify-between items-center p-4 border-b border-[#00A896]">
          <Image src="/images/neet-logo.png" alt="NEET Preparation Logo" width={80} height={40} />
          <button onClick={toggleSidebar} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          {navItems.map((item, index) => (
            <div key={index}>
              <button 
                onClick={() => item.dropdown ? toggleExpanded(item.name) : null}
                className="flex items-center justify-between w-full text-left hover:text-[#FFC300] transition duration-300"
              >
                <Link href={item.href} onClick={toggleSidebar} className="block">
                  {item.name}
                </Link>
                {item.dropdown && <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedItems.includes(item.name) ? 'rotate-180' : ''}`} />}
              </button>
              {item.dropdown && expandedItems.includes(item.name) && (
                <div className="pl-4 mt-2 space-y-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.href} onClick={toggleSidebar} className="block text-sm hover:text-[#FFC300] transition duration-300">
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button 
            className="w-full bg-[#FFC300] text-[#4A0E4E] hover:bg-[#00A896] hover:text-white font-semibold py-2 px-4 rounded transition duration-300"
            onClick={() => setIsLoginOpen(true)} // Open login form from sidebar
          >
            Login
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </header>
  )
}
