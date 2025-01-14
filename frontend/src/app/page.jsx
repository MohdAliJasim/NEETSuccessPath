
import Navbar from "../components/Navbar.jsx"
import AboutUs from "../components/AboutUs.jsx"
import WhyUS from "../components/WhyUs.jsx"

import TestimonialCarousel from "@/components/Testimonial.jsx"
import MentorCarousel from "../components/Mentor.jsx"
import LearningResources from "../components/Session.jsx"
import Testing from "../components/Testing.jsx"
import Hero from "@/components/Hero2.jsx"
import Footer from "@/components/Footer.jsx"
import WhyChooseUs from "@/components/WhyChooseUs2.jsx"
import SuccessStories from "@/components/SuccessStories.jsx"
import Hero3 from "@/components/Hero3.jsx"
import ResultsPopup from "@/components/Popup.jsx"
export default function Home() {
  
  return (
  <>
    <Navbar/>
    <ResultsPopup/>
    <Hero3/>
    <Hero/>
    <AboutUs/>
    <WhyChooseUs/>
    {/* <WhyUS/> */}
    {/* <LearningResources/> */}
    <Testing/>
    <MentorCarousel/>
    <TestimonialCarousel/>

    <SuccessStories/>
    <Footer/>
    
  </>
  );
}
