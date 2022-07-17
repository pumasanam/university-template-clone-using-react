import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import AboutList from './AboutList/AboutList';
import Footer from './Footer/Footer';

const About = () => {
  return (
    <>
      <Navbar/>
      <Hero title="About Us" text="We Are Friendly Front End Developer"/>
      <AboutList/>
      <Footer/>
    </>
  );
};

export default About;
