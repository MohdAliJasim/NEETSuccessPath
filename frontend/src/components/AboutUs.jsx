'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

export default function AboutUs() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const gridItems = [
    { type: 'image', src: '/images/neet-lab.jpeg', alt: 'NEET student studying', className: 'col-span-2 row-span-2' },
    { type: 'image', src: '/images/neet-study.jpeg', alt: 'NEET laboratory session', className: 'col-span-1 row-span-1' },
    { type: 'image', src: '/images/neet-classroom.jpeg', alt: 'NEET classroom', className: 'col-span-1 row-span-1' },
    { type: 'image', src: '/images/neet-preparation.jpg', alt: 'Successful NEET students', className: 'col-span-2 row-span-1' },
  ]

  return (
    <section className="py-24 bg-gray-50" id='aboutus'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
        <div className="flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-4 gap-4 auto-rows-[minmax(100px,auto)]">
              {gridItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${item.className} rounded-lg overflow-hidden shadow-md`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="w-full lg:w-1/2 space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg">
              At NEET Coaching Excellence, we are dedicated to empowering aspiring medical professionals with cutting-edge education and personalized support. Our comprehensive program is designed to help you achieve your dreams of becoming a successful medical practitioner.
            </motion.p>
            <motion.ul variants={itemVariants} className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Expert faculty with years of experience in NEET preparation</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Comprehensive study materials and regular mock tests</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Interactive online classes and doubt-clearing sessions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Personalized mentoring and performance tracking</span>
              </li>
            </motion.ul>
            {/* <motion.p variants={itemVariants} className="text-lg">
              Our proven methodology and dedicated team of educators have helped thousands of students achieve their goals. We focus not just on exam preparation, but on building a strong foundation in medical sciences that will serve you throughout your career.
            </motion.p> */}
            <motion.p variants={itemVariants} className="text-lg">
              Join us at NEET Coaching Excellence and take the first step towards your successful medical career.
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="self-start px-6 py-3 bg-[#FFC300] text-[#4A0E4E] rounded-lg hover:bg-[#00A896] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFC300] focus:ring-opacity-50 font-semibold inline-flex items-center">
                Learn More About Our Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 text-center"
        >
          <motion.p variants={itemVariants} className="text-lg max-w-4xl mx-auto">
            At NEET Coaching Excellence, we believe in nurturing not just exam-takers, but future medical professionals. Our holistic approach to NEET preparation ensures that you&apos;re well-equipped for the challenges of both the examination and your future medical career. Join us and be part of a community that&apos;s dedicated to excellence in medical education.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}