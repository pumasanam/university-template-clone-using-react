import React from 'react'

const TeacherList = ({list}) => {
  return (
    <>
      <div className="teacherlist">
             <img src={list.img} alt="" /> 
             <div className="teacher_div">
              <h3>{list.name}</h3>
              <p>{list.detail}</p>
            </div>
      </div>
    </>
  );
};

export default TeacherList;
