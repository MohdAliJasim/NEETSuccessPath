import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#4A0E4E] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#FFC300]">NEET Success Path</h2>
            <p className="text-sm">Empowering students to achieve their NEET dreams through comprehensive resources and expert guidance.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFC300]">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Learning Resources', 'Contact Us', 'Terms & Privacy'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#00A896] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFC300]">Contact Us</h3>
            <p className="text-sm">123 Education Street, Learning City, 12345</p>
            <p className="text-sm">Email: info@neetsuccesspath.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFC300]">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href={`https://${label.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00A896] transition-colors duration-300"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm">&copy; 2024 NEET Success Path. All Rights Reserved By Integral University.</p>
          <p>Designed & Developed By: INTACT Lab Department of CSE, Integral University, INDIA</p>
        </div>
      </div>
    </footer>
  )
}