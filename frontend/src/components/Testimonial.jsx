'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "I cleared NEET with the help of this platform. Their study materials are excellent!",
    name: "Priya Sharma",
    city: "Mumbai"
  },
  {
    quote: "The mentors here are incredibly supportive. They helped me overcome my weak areas in physics.",
    name: "Rahul Verma",
    city: "Delhi"
  },
  {
    quote: "The practice tests were a game changer for me. They really prepared me for the actual exam.",
    name: "Anita Desai",
    city: "Bangalore"
  },
  {
    quote: "I improved my rank significantly after joining this coaching. Highly recommended!",
    name: "Arjun Reddy",
    city: "Hyderabad"
  },
  {
    quote: "The biology modules here are top-notch. They made complex concepts so easy to understand.",
    name: "Sneha Patel",
    city: "Ahmedabad"
  }
]

export default function TestimonialCarousel() {
  const [startIndex, setStartIndex] = useState(0)

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    return [
      testimonials[startIndex],
      testimonials[(startIndex + 1) % testimonials.length],
      testimonials[(startIndex + 2) % testimonials.length],
    ]
  }

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          What Our Students Say
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden ${index >= 1 ? 'hidden md:block' : ''} ${index >= 2 ? 'md:hidden lg:block' : ''}`}>
                <div className="p-6 relative">
                  <Quote className="absolute top-4 left-4 w-8 h-8 text-primary opacity-20" />
                  <blockquote className="mt-4 text-lg text-gray-700 italic">
                    {testimonial.quote}
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <div>
                      <p className="text-base font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}
