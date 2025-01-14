'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const results = [
  { name: "Dhruv Krishnaa", category: "NEET 2024", air: 429, score: 686, image: "/images/teacher2.jpg" },
  { name: "Supratik Chattopadhyay", category: "NEET 2024", air: 675, score: 681, image: "/images/teacher3.jpg" },
  { name: "Dhruv Nigam", category: "NEET 2024", air: 816, score: 679, image: "/images/teacher4.jpg" },
  { name: "Aryan Pandey", category: "NEET 2024", air: 1013, score: 673, image: "/placeholder.svg?height=100&width=100" },
  { name: "Gautham Sankar K", category: "NEET 2024", air: 1028, score: 673, image: "/placeholder.svg?height=100&width=100" },
  { name: "Rishita Patel", category: "NEET 2024", air: 1156, score: 670, image: "/placeholder.svg?height=100&width=100" },
]

export default function ResultsPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-[#4A0E4E] max-h-[90vh]">
        <div className="relative p-3 sm:p-4 h-full flex flex-col">
          <Button 
            className="absolute top-2 right-2 text-white hover:bg-[#00A896] hover:text-[#4A0E4E] z-10" 
            variant="ghost" 
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="text-center mb-2 sm:mb-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#FFC300] mb-1">
              NEET Success Path
            </h2>
            <h1 className="text-lg sm:text-xl font-bold text-white">
              Over 1000 Students Qualify NEET 2024
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-2 sm:mb-3 flex-grow overflow-hidden">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col ${index < 3 ? 'order-first' : 'order-last'}`}
              >
                <div className="relative w-full pt-[40%]">
                  <Image
                    src={result.image}
                    alt={`${result.name}'s photo`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-2 text-center flex-grow flex flex-col justify-between" style={{ minHeight: '60%' }}>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#4A0E4E] mb-1 truncate">{result.name}</h3>
                  <p className="text-xs text-[#00A896] font-medium mb-1">{result.category}</p>
                  <div className="grid grid-cols-2 gap-1 text-center text-xs mt-auto">
                    <div className="bg-[#E3F2FD] p-1 rounded">
                      <p className="text-gray-600 text-[10px] sm:text-xs">AIR</p>
                      <p className="font-bold text-[#4A0E4E]">{result.air}</p>
                    </div>
                    <div className="bg-[#E3F2FD] p-1 rounded">
                      <p className="text-gray-600 text-[10px] sm:text-xs">SCORE</p>
                      <p className="font-bold text-[#4A0E4E]">{result.score}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-auto">
            <h3 className="text-base sm:text-lg font-bold text-[#FFC300] mb-2">
              Padhai Dumdaar. Results Shaandar.
            </h3>
            <Button className="bg-[#FFC300] text-[#4A0E4E] hover:bg-[#00A896] hover:text-white font-semibold py-1 px-3 rounded transition duration-300 text-xs sm:text-sm">
              Explore Our Quantum Resources
            </Button>
          </div>

          {[...Array(10)].map((_, i) => (
            <Star
              key={i}
              className="absolute text-[#FFC300] animate-pulse pointer-events-none"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `scale(${Math.random() * 0.2 + 0.1})`,
                opacity: 0.2,
                zIndex: 0,
              }}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}