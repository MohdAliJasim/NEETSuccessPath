'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    image: '/images/hero/neet-preparation.jpg',
    heading: 'Your Journey to NEET Success Starts Here',
    subheading: 'Prepare with the best resources, mentors, and a community of motivated learners.',
  },
  {
    image: '/images/hero/corosel1.jpeg',
    heading: 'Comprehensive Study Materials',
    subheading: 'Access top-notch resources tailored for NEET success.',
  },
  {
    image: '/images/hero/neet-preparation.jpg',
    heading: 'Learn from Expert Mentors',
    subheading: 'Get guidance from experienced professionals in the medical field.',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative  h-[80vh] lg:h-[calc(80vh-80px)] w-full overflow-hidden" id="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-300 opacity-80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{slide.heading}</h1>
            <p className="mb-8 max-w-2xl text-xl md:text-2xl">{slide.subheading}</p>
            <Button 
              size="lg" 
              className="text-lg bg-[#FFC300] text-[#4A0E4E] hover:bg-[#00A896] hover:text-white transition duration-300"
            >
              Start Your Preparation Today
            </Button>
          </div>
        </div>
      ))}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/20 text-white hover:bg-white/40 hover:text-[#4A0E4E] transition duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/20 text-white hover:bg-white/40 hover:text-[#4A0E4E] transition duration-300"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {slides.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className={`h-3 w-3 rounded-full p-0 ${
              index === currentSlide ? 'bg-[#FFC300]' : 'bg-white/50'
            } hover:bg-[#00A896] transition duration-300`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>
    </section>
  )
}