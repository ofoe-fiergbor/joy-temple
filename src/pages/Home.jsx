import React from 'react'
import Header from './../components/header/Header';
import Services from './../components/services/Services';
import About from './../components/about/About';
import Values from './../components/values/Values';
import MiniGallery from './../components/mini-gallery/MiniGallery';
import Testimonial from './../components/testimonial/Testimonial';
import Team from './../components/team/Team';
import Contact from './../components/contact/Contact';

function Home() {
    return (
        <div>
           <Header />
           <Services />
           <About />
           <Values/>
           <MiniGallery />
           <Testimonial />
           <Team />
           <Contact/>
        </div>
    )
}

export default Home
