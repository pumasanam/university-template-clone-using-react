import React from 'react';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import CourseList from "./CourseList/CourseList";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Courses = () => {
  return (
    <>
    <Navbar/>
      <Hero title="Courses" text="What Courses We Offer?"/>
      <CourseList/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Courses;
