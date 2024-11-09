'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    name: 'Zia',
    jobEn: 'Rust Developer',
    jobHi: 'रस्ट डेवलपर',
    imageUrl: '/testimonial/avatar1.jpg',
    quoteEn: 'Thanks to Health Harbour. Their online consultation bridge the gap for those in rural areas, offering expert medical advice without the hassle of travel. It\'s a service that truly understands and meets the needs of underserved communities, ensuring everyone has the opportunity to receive quality care from qualified doctors.',
   
    rating: 5
  },
  {
    name: 'Ali',
    jobEn: 'Web Designer',
    jobHi: 'वेब डिज़ाइनर',
    imageUrl: '/testimonial/avatar3.jpg',
    quoteEn: 'Health Harbour has been a game changer for remote communities. The convenience of accessing top-tier medical advice from home is invaluable, especially for those in rural areas. Their platform makes quality healthcare accessible, eliminating the barriers of distance and travel, and bringing peace of mind with every consultation.',
   
    rating: 5
  },
  {
    name: 'Tabish Khan',
    jobEn: 'Software Engineer',
    jobHi: 'सॉफ़्टवेयर इंजीनियर',
    imageUrl: '/testimonial/avatar2.jpg',
    quoteEn: 'Health Harbour has transformed the way we access healthcare in our community. Their reliable online consultations connect us with experienced doctors quickly and efficiently, eliminating the need for lengthy travel. This service not only saves time but also ensures that everyone receives personalized and high-quality medical care.',
   
    rating: 5
  }
]

const Testimonials = () => {
  const { language } = useLanguage()
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-[#ffe3f1] py-16 sm:py-24">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}
      ></div>
      <div className="relative z-10 mx-auto max-w-7xl font-serif px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#fd288d] sm:text-4xl mb-4">
            {language === 'en' ? 'What Our Users Say' : 'हमारे उपयोगकर्ता क्या कहते हैं'}
          </h2>
          <div className="w-24 h-1 bg-[#fd288d] mx-auto mb-4"></div>
          <p className="text-lg leading-8 text-gray-600">
            {language === 'en' ? 'Real stories from our satisfied users' : 'हमारे संतुष्ट उपयोगकर्ताओं की वास्तविक कहानियाँ'}
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <Slider {...settings} className="testimonials-carousel">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        className="rounded-full object-cover"
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        layout="fill"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                     
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-6">
                    <p className="text-base leading-relaxed">&quot;{language === 'en' ? testimonial.quoteEn : testimonial.quoteHi}&quot;</p>
                  </blockquote>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials