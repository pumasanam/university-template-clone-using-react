import React from 'react';
import CourseData from "./CourseData";
import CourseStorage from "./CourseStorage";
import "./CourseList.css";

const CourseList = () => {
  return (
    <>
      <div className="Courselist">
        <div className="innercourselist">
          {CourseData.map((list,index)=>{
            return <CourseStorage key={index} list={list}/>
          })}
        </div>
      </div>
    </>
  );
};

export default CourseList;
