import React from 'react';
import AboutSection from '../../components/HomeSections/AboutSection';
import Hero from '../../components/HomeSections/Hero';
import PopularFoodSection from '../../components/HomeSections/PopularFood/PopularFoodSection';
import VideoBanner from '../../components/VideoBanner';
import OurProjects from '../../components/OurProjects/OurProjects';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AboutSection id="about"/>
            <PopularFoodSection/>
            <VideoBanner/>
            <OurProjects/>
            
        </div>
    );
};

export default Home;