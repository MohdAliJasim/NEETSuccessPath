'use client'

import React from 'react'
import { Video, BookOpen, FileQuestion, Microscope, Atom, Calculator } from "lucide-react"
import { motion, useInView } from "framer-motion"

const resources = [
  { name: "Video Lessons", icon: Video, description: "Engaging video tutorials covering all NEET topics" },
  { name: "Study Material", icon: BookOpen, description: "Comprehensive study notes and reference materials" },
  { name: "Practice Tests", icon: FileQuestion, description: "Extensive question banks and mock exams" },
  { name: "Biology Lab", icon: Microscope, description: "Virtual biology experiments and simulations" },
  { name: "Chemistry Interactive", icon: Atom, description: "Interactive periodic table and chemical reactions" },
  { name: "Math Problem Solver", icon: Calculator, description: "Step-by-step solutions for complex math problems" },
]

export default function LearningResources() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section ref={ref} className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-gray-900 text-center mb-8"
        >
          Learning Sessions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
        >
          Explore our wide range of learning resources designed to help you excel in your NEET preparation. 
          From engaging video lessons to comprehensive study materials and practice tests, we've got you covered.
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <resource.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.name}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <button className="bg-primary text-white font-semibold py-3 px-8 rounded-md hover:bg-primary-dark transition-colors duration-300 text-lg">
            Explore Our Learning Resources
          </button>
        </motion.div>
      </div>
    </section>
  )
}