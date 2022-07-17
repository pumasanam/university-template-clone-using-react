import React from 'react';
import "./Features.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import featureImg from "./../img/img7.jpg"

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="features_list">
            <h3>Why You Should Join With Us</h3>
            <div className="inner_Feature">
                <FiberManualRecordIcon style={{marginRight:"10px", color:"white"}}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, placeat?</p>
            </div>

            <div className="inner_Feature">
                <FiberManualRecordIcon style={{marginRight:"10px", color:"white"}}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, placeat?</p>
            </div>


            <div className="inner_Feature">
                <FiberManualRecordIcon style={{marginRight:"10px", color:"white"}}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, placeat?</p>
            </div>


            <div className="inner_Feature">
                <FiberManualRecordIcon style={{marginRight:"10px", color:"white"}}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, placeat?</p>
            </div>


            <div className="inner_Feature">
                <FiberManualRecordIcon style={{marginRight:"10px", color:"white"}}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, placeat?</p>
            </div>

            <div className="inner_Feature">
                <FiberManualRecordIcon style={{marginRight:"10px", color:"white"}}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, placeat?</p>
            </div>
        </div>

        <div className="feature_img">
          <img src={featureImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Features;
