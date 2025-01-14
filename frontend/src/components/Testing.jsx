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
//quantum leap

export default function QuantumLeapTheme() {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
  
    return (
      <section ref={ref} className="pt-24 bg-[#E3F2FD] py-16 px-4 sm:px-6 lg:px-8" id='session'>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-[#4A0E4E] text-center mb-8"
          >
            Quantum Leap Learning Sessions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto"
          >
            Accelerate your NEET preparation with our cutting-edge learning resources. 
            From immersive video lessons to advanced practice tests, we provide the tools for your success.
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
                className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex-shrink-0">
                  <resource.icon className="h-10 w-10 text-[#00A896]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#4A0E4E] mb-2">{resource.name}</h3>
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
            <button className="bg-[#FFC300] text-[#4A0E4E] font-bold py-3 px-8 rounded-full hover:bg-[#4A0E4E] hover:text-[#FFC300] transition-colors duration-300 text-lg shadow-md hover:shadow-lg transform hover:scale-105">
              Explore Our Quantum Resources
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

//Nature Wisdom

// export default function NaturesWisdomTheme() {
//     const ref = React.useRef(null)
//     const isInView = useInView(ref, { once: true, amount: 0.2 })
  
//     return (
//       <section ref={ref} className="bg-[#F0F4F8] py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl font-extrabold text-[#2C5F2D] text-center mb-8"
//           >
//             Nature's Wisdom Learning Path
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto"
//           >
//             Embark on a natural journey of discovery. Our resources blend the wisdom of nature 
//             with cutting-edge science to create a unique NEET preparation experience.
//           </motion.p>
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
//           >
//             {resources.map((resource, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 border-l-4 border-[#97BC62] transition duration-300 hover:shadow-lg"
//               >
//                 <div className="flex-shrink-0">
//                   <resource.icon className="h-10 w-10 text-[#2C5F2D]" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#2C5F2D] mb-2">{resource.name}</h3>
//                   <p className="text-gray-600">{resource.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             className="text-center"
//           >
//             <button className="bg-[#97BC62] text-white font-bold py-3 px-8 rounded-md hover:bg-[#2C5F2D] transition-colors duration-300 text-lg shadow-md hover:shadow-lg">
//               Explore Nature's Learning Resources
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     )
//   }

// Theme 3: Cosmic Intellect

// export default function CosmicIntellectTheme() {
//     const ref = React.useRef(null)
//     const isInView = useInView(ref, { once: true, amount: 0.2 })
  
//     return (
//       <section ref={ref} className="bg-[#0F172A] py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl font-extrabold text-[#60A5FA] text-center mb-8"
//           >
//             Cosmic Intellect Resources
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
//           >
//             Expand your mind to cosmic proportions. Our stellar learning resources 
//             will guide you through the vast universe of NEET knowledge.
//           </motion.p>
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
//           >
//             {resources.map((resource, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-[#1E293B] rounded-lg p-6 flex items-start space-x-4 transition duration-300 hover:bg-[#2C3E50]"
//               >
//                 <div className="flex-shrink-0">
//                   <resource.icon className="h-10 w-10 text-[#60A5FA]" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#60A5FA] mb-2">{resource.name}</h3>
//                   <p className="text-gray-300">{resource.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             className="text-center"
//           >
//             <button className="bg-[#60A5FA] text-[#0F172A] font-bold py-3 px-8 rounded-full hover:bg-[#3B82F6] transition-colors duration-300 text-lg shadow-md hover:shadow-lg">
//               Explore Cosmic Learning Resources
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     )
//   }
  
  // Theme 4: Elemental Mastery
  
//   export default function ElementalMasteryTheme() {
//     const ref = React.useRef(null)
//     const isInView = useInView(ref, { once: true, amount: 0.2 })
  
//     return (
//       <section ref={ref} className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl font-extrabold text-[#E65100] text-center mb-8"
//           >
//             Elemental Mastery Learning
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-xl text-[#795548] text-center mb-12 max-w-3xl mx-auto"
//           >
//             Master the elements of NEET success. Our resources combine the fundamental 
//             building blocks of knowledge to forge your path to excellence.
//           </motion.p>
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
//           >
//             {resources.map((resource, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 flex items-start space-x-4 transition duration-300 hover:shadow-xl"
//               >
//                 <div className="flex-shrink-0">
//                   <resource.icon className="h-10 w-10 text-[#FF6D00]" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#E65100] mb-2">{resource.name}</h3>
//                   <p className="text-[#795548]">{resource.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             className="text-center"
//           >
//             <button className="bg-gradient-to-r from-[#FF6D00] to-[#FF9100] text-white font-bold py-3 px-8 rounded-md hover:from-[#E65100] hover:to-[#FF6D00] transition-all duration-300 text-lg shadow-md hover:shadow-lg">
//               Explore Elemental Resources
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     )
//   }