import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Teachers from './Teachers/Teachers';
import Features from './Features/Features';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Teachers/>
      <Features/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
