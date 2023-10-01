import TrustedClient from '@/components/Clients/page'
import Hero from '@/components/Hero/page'
import Navbar from '@/components/Navbar/page'
import React from 'react'

const Home = () => {
  return (
    <div>
      <header className=''>
        <Navbar />
        <main className='w-full mt-[80px] md:mt-[100px] px-[20px] sm:px-[40px] lg:px-[70px]'>
          <Hero />
          <TrustedClient />
        </main>
      </header>
    </div>
  )
}

export default Home