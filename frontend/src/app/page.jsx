import Hero from "../components/Hero.jsx"
import Navbar from "../components/Navbar.jsx"
import AboutUs from "../components/AboutUs.jsx"
import WhyUS from "../components/WhyUs.jsx"
import Footer from "../components/Footer.jsx"
import TestimonialCarousel from "@/components/Testimonial.jsx"
import MentorCarousel from "../components/Mentor.jsx"
import LearningResources from "../components/Session.jsx"
import Testing from "../components/Testing.jsx"
export default function Home() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <WhyUS/>
    <LearningResources/>
    <MentorCarousel/>
    <TestimonialCarousel/>
    <Footer/>
    <Testing/>
  </>
  );
}
