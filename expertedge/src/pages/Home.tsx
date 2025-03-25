import React from 'react'
import Hero from '../components/Hero'
import FeaturedMentors from '../components/FeaturedMentor'
import CategorySection from '../components/CategorySection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
       <Hero />
       <FeaturedMentors />
       <CategorySection />
       <Footer />
    </main>
  )
}

export default Home