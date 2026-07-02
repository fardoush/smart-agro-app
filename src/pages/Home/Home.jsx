import React from "react";
import AboutSection from "../../components/HomeSections/AboutSection";
import Hero from "../../components/HomeSections/Hero";
import PopularFoodSection from "../../components/HomeSections/PopularFood/PopularFoodSection";
import VideoBanner from "../../components/VideoBanner";
import OurProjects from "../../components/OurProjects/OurProjects";
import Testimonial from "../../components/Testimonial";
import BrandSlider from "../../components/BrandSlider";
import Contact from "../../components/Contact";
import Cta from "../../components/Cta";
import NewsArticles from "../../components/Blog/NewsArticles";
import ProvidingProducts from "../../components/ProvidingProducts";

const Home = () => {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="services">
        <PopularFoodSection />
        <VideoBanner />
      </div>

      <div id="projects">
        <OurProjects />
      </div>

      <Testimonial />

      <div id="products">
        <ProvidingProducts />
      </div>

      <div id="news">
        <NewsArticles />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <BrandSlider />
      <Cta />
    </div>
  );
};

export default Home;
