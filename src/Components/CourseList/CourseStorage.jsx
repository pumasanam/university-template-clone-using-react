import React from 'react'

const CourseStorage = ({list}) => {
  return (
    <>
      <div className="courseStorage">
          <img src={list.img} alt="" />
          <div className="courseStorage_list">
            <h4>{list.title}</h4>
            <p>{list.text}</p>
          </div>
      </div>
    </>
  );
};

export default CourseStorage;
