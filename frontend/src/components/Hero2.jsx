'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative bg-gray-50" id="hero">
      <div className="container mx-auto px-4 pt-20 pb-4 sm:pt-28 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Journey to NEET Success Starts Here
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Prepare with expert-curated resources, personalized mentorship, and a supportive community of aspiring medical professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#FFC300] hover:bg-[#00A896] text-[#4A0E4E] hover:text-white transition-colors duration-300"
              >
                Start Your Preparation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#4A0E4E] text-[#4A0E4E] hover:bg-[#4A0E4E] hover:text-white transition-colors duration-300"
              >
                Explore Our Programs
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/neet-lab.jpeg"
              alt="Students preparing for NEET exam"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent"></div>
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Expert Mentors", description: "Learn from experienced NEET professionals" },
            { title: "Comprehensive Materials", description: "Access a wide range of study resources" },
            { title: "Interactive Learning", description: "Engage in live classes and discussions" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-[#4A0E4E]/10">
              <h3 className="text-lg font-semibold mb-2 text-[#4A0E4E]">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  )
}