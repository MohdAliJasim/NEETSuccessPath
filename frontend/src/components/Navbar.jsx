'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from "lucide-react"


export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { 
      name: 'Learning Sessions', 
      href: '#',
      dropdown: [
        { name: 'Live Classes', href: '/live-classes' },
        { name: 'Recorded Sessions', href: '/recorded-sessions' },
        { name: 'Study Materials', href: '/study-materials' },
      ]
    },
    { name: 'Mentors', href: '/mentors' },
    { name: 'Doubt Clearing', href: '/doubt-clearing' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden" onClick={toggleSidebar} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
          <Link href='/'>
            <Image src="/images/neet-logo.png" alt="NEET Preparation Logo" width={80} height={40} />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link href={item.href} className="hover:text-blue-200 transition duration-300">
                {item.name}
                {item.dropdown && <ChevronDown className="inline-block h-4 w-4 ml-1" />}
              </Link>
              {item.dropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-2 px-4 rounded transition duration-300">
           Login
          </button>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-600 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex justify-between items-center p-4 border-b border-blue-500">
          <Image src="/images/neet-logo.png" alt="NEET Preparation Logo" width={80} height={40} />
          <button onClick={toggleSidebar} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          {navItems.map((item, index) => (
            <div key={index}>
              <Link href={item.href} className="block hover:text-blue-200 transition duration-300">
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.href} className="block text-sm hover:text-blue-200 transition duration-300">
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="w-full bg-white text-blue-600 hover:bg-blue-100 font-semibold py-2 px-4 rounded transition duration-300">
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