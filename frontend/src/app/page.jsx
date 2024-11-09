import Hero from "../components/Hero.jsx"
import Navbar from "../components/Navbar.jsx"
import AboutUs from "../components/AboutUs.jsx"
import WhyUS from "../components/WhyUs.jsx"
import Session from "../components/Session.jsx"
import Mentor from "../components/Mentor.jsx"
import Testimonial from "../components/Testimonial.jsx"
import Footer from "../components/Footer.jsx"

export default function Home() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <WhyUS/>
    <Session/>
    <Mentor/>
    <Testimonial/>
    <Footer/>
  </>
  );
}
