'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const mentors = [
  {
    name: "Dr. Rina Sharma",
    photo: "/images/teacher2.jpg?height=200&width=200",
    expertise: "Biology Expert",
    qualifications: "Ph.D. in Biology, 10+ years exp.",
    bio: "Specializes in quantum biology concepts for NEET preparation."
  },
  {
    name: "Mr. Amit Kumar",
    photo: "/images/teacher_img.avif?height=200&width=200",
    expertise: "Physics Guru",
    qualifications: "M.Sc. in Physics, 8+ years exp.",
    bio: "Explains quantum physics principles for NEET aspirants."
  },
  {
    name: "Dr. Priya Patel",
    photo: "/images/teacher3.jpg?height=200&width=200",
    expertise: "Chemistry Specialist",
    qualifications: "Ph.D. in Chemistry, 12+ years exp.",
    bio: "Focuses on quantum chemistry applications in NEET syllabus."
  },
  {
    name: "Prof. Rajesh Gupta",
    photo: "/images/teacher4.jpg?height=200&width=200",
    expertise: "Mathematics Wizard",
    qualifications: "Ph.D. in Mathematics, 15+ years exp.",
    bio: "Simplifies complex quantum math concepts for NEET students."
  },
  {
    name: "Dr. Anita Desai",
    photo: "/images/teacher6.jpg?height=200&width=200",
    expertise: "Biology Specialist",
    qualifications: "Ph.D. in Microbiology, 8+ years exp.",
    bio: "Explores quantum aspects of cellular biology for NEET."
  },
  {
    name: "Mr. Vikram Singh",
    photo: "/images/teacher5.jpg?height=200&width=200",
    expertise: "Chemistry Expert",
    qualifications: "M.Sc. in Chemistry, 12+ years exp.",
    bio: "Teaches quantum principles in chemical reactions for NEET."
  }
]

export default function QuantumLeapMentorCarousel() {
  const [startIndex, setStartIndex] = useState(0)

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % mentors.length)
  }

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + mentors.length) % mentors.length)
  }

  const getVisibleMentors = () => {
    return [
      mentors[startIndex],
      mentors[(startIndex + 1) % mentors.length],
      mentors[(startIndex + 2) % mentors.length],
      mentors[(startIndex + 3) % mentors.length],
    ]
  }

  return (
    <div className="bg-[#E3F2FD] py-16 px-4 sm:px-6 lg:px-8" id='mentor'>
      <motion.div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-[#4A0E4E] text-center mb-8"
        >
          Quantum Leap with Our Expert Mentors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto"
        >
          Our mentors are experienced educators specializing in quantum concepts for NEET preparation. 
          They provide personalized guidance to help you make a quantum leap in your learning journey.
        </motion.p>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {getVisibleMentors().map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${index >= 1 ? 'hidden md:block' : ''} ${index >= 3 ? 'md:hidden lg:block' : ''}`}
              >
                <div className="p-4">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={mentor.photo}
                      alt={mentor.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-center">{mentor.name}</h3>
                  <p className="text-[#00A896] text-sm mb-1 text-center">{mentor.expertise}</p>
                  <p className="text-xs text-gray-600 mb-2 text-center">{mentor.qualifications}</p>
                  <p className="text-sm text-gray-700 text-center">{mentor.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous mentor"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next mentor"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-[#FFC300] text-[#4A0E4E] font-bold py-3 px-8 rounded-full hover:bg-[#4A0E4E] hover:text-[#FFC300] transition-colors duration-300 text-lg shadow-md hover:shadow-lg transform hover:scale-105">
            Explore Our Quantum Mentorship
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}






















// 'use client'

// import React, { useState } from 'react'
// import Image from 'next/image'
// import { ChevronLeft, ChevronRight } from "lucide-react"

// const mentors = [
//   {
//     name: "Dr. Rina Sharma",
//     photo: "/images/teacher2.jpg?height=200&width=200",
//     expertise: "Biology Expert",
//     qualifications: "M.Sc. in Biology, 10+ years exp.",
//     bio: "Specializes in making complex biology concepts easy to understand and apply."
//   },
//   {
//     name: "Mr. Amit Kumar",
//     photo: "/images/teacher_img.avif?height=200&width=200",
//     expertise: "Physics Guru",
//     qualifications: "B.Tech, 8+ years exp.",
//     bio: "Builds strong foundational knowledge and problem-solving techniques."
//   },
//   {
//     name: "Dr. Priya Patel",
//     photo: "/images/teacher3.jpg?height=200&width=200",
//     expertise: "Chemistry Specialist",
//     qualifications: "Ph.D. in Chemistry, 12+ years exp.",
//     bio: "Known for innovative teaching methods that make chemistry engaging."
//   },
//   {
//     name: "Prof. Rajesh Gupta",
//     photo: "/images/teacher4.jpg?height=200&width=200",
//     expertise: "Mathematics Wizard",
//     qualifications: "M.Sc. in Mathematics, 15+ years exp.",
//     bio: "Transforms complex math problems into simple, solvable steps."
//   },
//   {
//     name: "Dr. Anita Desai",
//     photo: "/images/teacher6.jpg?height=200&width=200",
//     expertise: "Biology Specialist",
//     qualifications: "Ph.D. in Microbiology, 8+ years exp.",
//     bio: "Passionate about making biology relatable to everyday life for students."
//   },
//   {
//     name: "Mr. Vikram Singh",
//     photo: "/images/teacher5.jpg?height=200&width=200",
//     expertise: "Chemistry Expert",
//     qualifications: "M.Sc. in Organic Chemistry, 12+ years exp.",
//     bio: "Skilled at breaking down complex chemical concepts into manageable parts."
//   }
// ]

// export default function MentorCarousel() {
//   const [startIndex, setStartIndex] = useState(0)

//   const nextSlide = () => {
//     setStartIndex((prevIndex) => (prevIndex + 1) % mentors.length)
//   }

//   const prevSlide = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + mentors.length) % mentors.length)
//   }

//   const getVisibleMentors = () => {
//     return [
//       mentors[startIndex],
//       mentors[(startIndex + 1) % mentors.length],
//       mentors[(startIndex + 2) % mentors.length],
//       mentors[(startIndex + 3) % mentors.length],
//     ]
//   }

//   return (
//     <div className="bg-gray-100 py-12 pt-24 px-4 sm:px-6 lg:px-8" id='mentor'>
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
//           Meet Our Expert Mentors
//         </h2>
//         <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
//           Our mentors are experienced educators with years of experience in NEET preparation. 
//           They are passionate about helping students achieve their dreams and provide personalized guidance every step of the way.
//         </p>
//         <div className="relative">
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {getVisibleMentors().map((mentor, index) => (
//               <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden ${index >= 1 ? 'hidden md:block' : ''} ${index >= 3 ? 'md:hidden lg:block' : ''}`}>
//                 <div className="p-4">
//                   <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
//                     <Image
//                       src={mentor.photo}
//                       alt={mentor.name}
//                       width={96}
//                       height={96}
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   <h3 className="text-lg font-semibold mb-1 text-center">{mentor.name}</h3>
//                   <p className="text-primary text-sm mb-1 text-center">{mentor.expertise}</p>
//                   <p className="text-xs text-gray-600 mb-2 text-center">{mentor.qualifications}</p>
//                   <p className="text-sm text-gray-700 text-center">{mentor.bio}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
//             aria-label="Previous mentor"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-600" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
//             aria-label="Next mentor"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-600" />
//           </button>
//         </div>
//         <div className="text-center mt-12">
//           <button className="bg-primary text-white font-semibold py-2 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300">
//             Meet All Our Mentors
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }