import React from 'react';
import teachersData from './TeachersData';
import TeacherList from './TeacherList';
import "./Teachers.css"

const Teachers = () => {
  return (
    <>
      <div className="teachers">
        <h1>Our Teachers</h1>
            <div className="teachers_list">
                <div className="teachers_data">
                    {teachersData.map((list, index)=>{
                        return <TeacherList key={index} list={list}/>
                    })}
                </div>
            </div>
      </div>
    </>
  );
};

export default Teachers;
