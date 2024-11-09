'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from "lucide-react"

const mentors = [
  {
    name: "Dr. Rina Sharma",
    photo: "/images/teacher_img.avif?height=200&width=200",
    expertise: "Biology Expert",
    qualifications: "M.Sc. in Biology, 10+ years exp.",
    bio: "Specializes in making complex biology concepts easy to understand and apply."
  },
  {
    name: "Mr. Amit Kumar",
    photo: "/images/teacher_img.avif?height=200&width=200",
    expertise: "Physics Guru",
    qualifications: "B.Tech, 8+ years exp.",
    bio: "Builds strong foundational knowledge and problem-solving techniques."
  },
  {
    name: "Dr. Priya Patel",
    photo: "/images/teacher_img.avif?height=200&width=200",
    expertise: "Chemistry Specialist",
    qualifications: "Ph.D. in Chemistry, 12+ years exp.",
    bio: "Known for innovative teaching methods that make chemistry engaging."
  },
  {
    name: "Prof. Rajesh Gupta",
    photo: "/images/teacher_img.avif?height=200&width=200",
    expertise: "Mathematics Wizard",
    qualifications: "M.Sc. in Mathematics, 15+ years exp.",
    bio: "Transforms complex math problems into simple, solvable steps."
  },
  {
    name: "Dr. Anita Desai",
    photo: "/images/teacher_img.avif?height=200&width=200",
    expertise: "Biology Specialist",
    qualifications: "Ph.D. in Microbiology, 8+ years exp.",
    bio: "Passionate about making biology relatable to everyday life for students."
  },
  {
    name: "Mr. Vikram Singh",
    photo: "/images/teacher_img.avif?height=200&width=200",
    expertise: "Chemistry Expert",
    qualifications: "M.Sc. in Organic Chemistry, 12+ years exp.",
    bio: "Skilled at breaking down complex chemical concepts into manageable parts."
  }
]

export default function MentorCarousel() {
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
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Meet Our Expert Mentors
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Our mentors are experienced educators with years of experience in NEET preparation. 
          They are passionate about helping students achieve their dreams and provide personalized guidance every step of the way.
        </p>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {getVisibleMentors().map((mentor, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden ${index >= 1 ? 'hidden md:block' : ''} ${index >= 3 ? 'md:hidden lg:block' : ''}`}>
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
                  <p className="text-primary text-sm mb-1 text-center">{mentor.expertise}</p>
                  <p className="text-xs text-gray-600 mb-2 text-center">{mentor.qualifications}</p>
                  <p className="text-sm text-gray-700 text-center">{mentor.bio}</p>
                </div>
              </div>
            ))}
          </div>
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
        <div className="text-center mt-12">
          <button className="bg-primary text-white font-semibold py-2 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300">
            Meet All Our Mentors
          </button>
        </div>
      </div>
    </div>
  )
}