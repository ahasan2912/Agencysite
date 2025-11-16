import About from '@/component/AboutUs/About'
import Blog from '@/component/Blog/Blog'
import Footer from '@/component/Footer'
import HeroBanner from '@/component/HeroBanner'
import LogoSlider from '@/component/LogoSlider/LogoSlider'
import MarqueeSection from '@/component/Marque/Marque'
import HeaderMenu from '@/component/Navbar'
import OurService from '@/component/OurService/OurService'
import OurWorks from '@/component/OurWorks/OurWorks'
import ProjectInMind from '@/component/ProjectMind/ProjectMind'
import PromotionVideoBanner from '@/component/PromotionVideo/PromotionVideoBanner'
import OurTeam from '@/component/Team/OurTeam'
import Testimonial from '@/component/Testimonial/Testimonial'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeaderMenu />
      <HeroBanner />
      <About />
      <OurService />
      <OurWorks />
      <OurTeam />
      <PromotionVideoBanner />
      <MarqueeSection/>
      <Testimonial />
      <LogoSlider />
      <Blog />
      <ProjectInMind/>
      <Footer/>
    </div>
  )
}
