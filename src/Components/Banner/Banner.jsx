import React from 'react';
import "./Banner.css"

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_list">
            <h1>THIS IS UNIVERSITY CLONE WEBSITE</h1>

            <div className="button">
                <button className='btn'>Contact Us</button>
                <button className='btn'>About Us</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
