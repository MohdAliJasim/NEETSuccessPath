'use client'
import React from 'react'
import dynamic from 'next/dynamic'
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false })

const WhyUs = () => {
  return (
    <div className="flex flex-col sm:p-10 lg:h-[80vh] sm:h-min sm:space-y-10 lg:flex-row lg:space-x-10" id="whychooseus">
      {/* Left Section */}
      <MotionDiv
        className="text-center sm:w-[90%] sm:mx-auto lg:w-[45%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/images/Why.png"
          alt="why choose us"
          className="h-[55%] mx-auto mb-9 sm:h-[30%]"
        />
        <h1 className="text-3xl font-bold mb-4">Why Choose Us?</h1>
        <p className="text-xl text-gray-600 px-4">
          Join us for expert mentorship, structured study plans, and proven success stories that will help you achieve your goals.
        </p>
      </MotionDiv>

      {/* Right Section */}
      <MotionDiv
        className="bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden rounded-lg lg:w-[45%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7"></div>
        <div className="w-24 h-24 bg-violet-500 rounded-full absolute -left-5 -bottom-7"></div>
        
        <h1 className="font-bold text-xl mb-4">All You Need to Know</h1>

        <ul className="text-gray-600 list-disc mx-10 space-y-4">
          <li className="flex items-center">
            <img src="/icons/award.png" alt="mentor" className="w-6 h-6 mr-4" />
            <span className='font-semibold'>Expert Mentors with Industry Experience</span>
          </li>
          <li className="flex items-center">
            <img src="/icons/git-fork.png" alt="study plan" className="w-6 h-6 mr-4" />
            <span className='font-semibold'>Structured Study Plans for Every Learner</span>
          </li>
          <li className="flex items-center">
            <img src="/icons/prooven.png" alt="success" className="w-6 h-6 mr-4" />
            <span className='font-semibold'>Proven Success Stories from Our Students</span>
          </li>
        </ul>
      </MotionDiv>
    </div>
  )
}

export default WhyUs