'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, BookOpen, Users, TrendingUp, Lightbulb, Clock } from 'lucide-react'

export default function WhyChooseUs() {
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

  const reasons = [
    { icon: <Award className="w-12 h-12 text-[#FFC300]" />, title: 'Expert Mentors', description: 'Learn from industry-experienced professionals dedicated to your success.' },
    { icon: <BookOpen className="w-12 h-12 text-[#FFC300]" />, title: 'Comprehensive Materials', description: 'Access a wide range of study resources tailored for NEET preparation.' },
    { icon: <Users className="w-12 h-12 text-[#FFC300]" />, title: 'Personalized Approach', description: 'Benefit from individualized attention and customized study plans.' },
    { icon: <TrendingUp className="w-12 h-12 text-[#FFC300]" />, title: 'Proven Track Record', description: 'Join thousands of successful students who have achieved their NEET goals with us.' },
    { icon: <Lightbulb className="w-12 h-12 text-[#FFC300]" />, title: 'Innovative Teaching', description: 'Experience cutting-edge teaching methods that make learning effective and engaging.' },
    { icon: <Clock className="w-12 h-12 text-[#FFC300]" />, title: 'Flexible Schedule', description: 'Choose from various time slots that fit your study routine and preferences.' },
  ]

  return (
    <section className="py-24 bg-[#4A0E4E] text-white" id="whychooseus">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">Why Choose Us?</motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-[#FFC300] max-w-2xl mx-auto">
            Discover the NEET Coaching Excellence difference and set yourself up for success.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto"
        >
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 bg-[#00A896] p-6 rounded-lg shadow-lg">
            <Image
              src="/images/whychooseus.jpeg"
              alt="Why choose NEET Coaching Excellence"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
          {reasons.slice(0, 2).map((reason, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-[#E3F2FD] text-[#4A0E4E] p-4 rounded-lg shadow-lg">
              <div className="mb-2">{reason.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm">{reason.description}</p>
            </motion.div>
          ))}
          <motion.div variants={itemVariants} className="md:col-span-2 bg-[#E3F2FD] text-[#4A0E4E] p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-4">
                <div className="mb-2">{reasons[2].icon}</div>
                <h3 className="text-lg font-semibold mb-2">{reasons[2].title}</h3>
                <p className="text-sm">{reasons[2].description}</p>
              </div>
              <div>
                <div className="mb-2">{reasons[3].icon}</div>
                <h3 className="text-lg font-semibold mb-2">{reasons[3].title}</h3>
                <p className="text-sm">{reasons[3].description}</p>
              </div>
            </div>
          </motion.div>
          {reasons.slice(4).map((reason, index) => (
            <motion.div key={index + 4} variants={itemVariants} className="bg-[#E3F2FD] text-[#4A0E4E] p-4 rounded-lg shadow-lg">
              <div className="mb-2">{reason.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm">{reason.description}</p>
            </motion.div>
          ))}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-[#E3F2FD] text-[#4A0E4E] p-6 rounded-lg shadow-lg flex flex-col justify-center"
          >
            <p className="text-lg mb-6">
              At NEET Coaching Excellence, we&apos;re committed to your success. Our comprehensive approach ensures you&apos;re well-prepared for NEET and your future medical career.
            </p>
            <button className="self-start px-6 py-3 bg-[#FFC300] text-[#4A0E4E] rounded-lg hover:bg-[#00A896] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFC300] focus:ring-opacity-50 font-semibold">
              Start Your NEET Journey
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}