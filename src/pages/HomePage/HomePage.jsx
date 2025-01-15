import { createElement } from 'react';
import { HeroSection, Navbar, AboutUs, Services, Test, Project, AcceptingProjects, Testimonial, Cta, Footer} from '../../components';
import "./homepage.css"
// import Calendely from '@/components/Calendely/Calendely';
// import Calendely1 from '@/components/Calendely/Calendely1';
// import Calendely2 from '@/components/Calendely/Calendely2';

const HomePage = () => {
  return (
    <div>
        <Navbar />
    
    <section className='w-full px-[60px] max-sm:px-[30px]'>
      <HeroSection />
    </section>
    <section>
        <div className=" pointer-events-none mt-7 flex justify-center items-start video-wrapper overflow-hidden">
          <video autoPlay src="https://omaeva.s3.eu-north-1.amazonaws.com/Landing+Video+.mp4" oncontextmenu="return false;" className="hero-video rounded-xl" muted loop playsInline />
        </div>
    </section>
    <section id='about' className='w-full pt-1 px-[60px] max-sm:px-[30px]'>
      <AboutUs />
    </section>
    <section id='services' className='w-full pt-1 px-[60px] max-sm:px-[30px]'>
      <Services />
    </section>
    <section id='projects' className='w-full pt-1 px-[60px] max-sm:px-[30px]'>
      <Project />
    </section>
    <section className='w-full px-[60px] max-sm:px-[30px] my-[100px] md:mt-[180px] max-sm:mb-[220px]'>
      <AcceptingProjects />
    </section>
    {/* <section className='w-full px-[60px] max-sm:px-[30px] my-[100px] md:mt-[180px] max-sm:mb-[220px]'>
      <Calendely1 />
      <Calendely2 />
    </section> */}
    <section className='w-full pt-1 px-[80px] testimonial-sizing max-sm:px-[30px]'>
      <Testimonial />
    </section>
    <section id='cta' className='w-full lg:h-[100vh] mt-[100px] pt-1 px-[60px] max-sm:px-[30px]'>
      <Cta />
    </section>
    <footer className='w-full px-[60px] max-sm:px-[30px]'>
      <Footer />
    </footer>
    </div>
  )
}

export default HomePage;