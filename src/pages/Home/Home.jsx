import React from 'react';
import AboutSection from '../../components/HomeSections/AboutSection';
import Hero from '../../components/HomeSections/Hero';
import PopularFoodSection from '../../components/HomeSections/PopularFood/PopularFoodSection';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AboutSection id="about"/>
            <PopularFoodSection/>
            
        </div>
    );
};

export default Home;