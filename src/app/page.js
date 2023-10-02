import AnimateWrapper from '@/components/AnimateWrapper/page'
import TrustedClient from '@/components/Clients/page'
import Hero from '@/components/Hero/page'
import Navbar from '@/components/Navbar/page'
import ServicesSection from '@/components/Services/page'
import React from 'react'

const Home = () => {
  return (
    <div>

      {/* header | hero section */}

      <header className=''>
        <Navbar />
        <main className='w-full mt-[80px] md:mt-[90px] px-[20px] sm:px-[40px] lg:px-[70px]'>
          <AnimateWrapper>
            <Hero />
            <TrustedClient />
          </AnimateWrapper>
        </main>
      </header>

      <div className="light_line my-12"></div>

      {/* Services Section */}

      <section className='w-full px-[20px] sm:px-[40px] lg:px-[70px]' id={'service'}>
        <ServicesSection />
      </section>
    </div>
  )
}

export default Home