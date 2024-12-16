import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';


function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Testimonials />
        <Contact />
    </div>
  )
}

export default Home;