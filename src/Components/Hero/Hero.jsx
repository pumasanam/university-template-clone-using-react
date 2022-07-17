import React from 'react';
import "./Hero.css";

const Hero = (props) => {
  return (
    <>
    
      <div className="hero">
        <div className="hero_list">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
