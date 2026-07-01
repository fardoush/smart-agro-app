import React from 'react';
import AboutSection from '../../components/HomeSections/AboutSection';
import Hero from '../../components/HomeSections/Hero';
import PopularFoodSection from '../../components/HomeSections/PopularFood/PopularFoodSection';
import VideoBanner from '../../components/VideoBanner';
import OurProjects from '../../components/OurProjects/OurProjects';
import Testimonial from '../../components/Testimonial';
import BrandSlider from '../../components/BrandSlider';
import Contact from '../../components/Contact';
import Cta from '../../components/Cta';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AboutSection id="about"/>
            <PopularFoodSection/>
            <VideoBanner/>
            <OurProjects/>
            <Testimonial/>
            <Contact/>
            <BrandSlider/>
            <Cta/>
            
        </div>
    );
};

export default Home;