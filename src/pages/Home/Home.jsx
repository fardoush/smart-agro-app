import React from 'react';
import AboutSection from '../../components/HomeSections/AboutSection';
import Hero from '../../components/HomeSections/Hero';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AboutSection id="about"/>
            
        </div>
    );
};

export default Home;