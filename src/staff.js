import React from 'react';
import './staff.css';
import clefImg from './img/trebleClef.png';

const HorizonLine = () => {
    return (
      <div
        style={{
          width: "100%",
          borderBottom: "1px solid #aaa",
          lineHeight: "0.1em",
          margin: "10px 0 10px 0",
        }}
      ></div>
    );
};

const VerticalLine = () => {
    return (
        <div
            style = {{
                height: "44px",
                borderRight: "1px solid #aaa",
                position: "absolute",
                marginTop: "1px",
                marginLeft: "10px",
            }}
        ></div>
    );
};

export const drawStaff = () => {
    console.log("clicked");
    return (
      <div className="oneStaff">
        <img className="clefImg" src={ clefImg } alt={ clefImg }/>
        <div className="fstVerti"><VerticalLine/></div>
        <div className="sndVerti"><VerticalLine/></div>
        <div className="thirdVerti"><VerticalLine/></div>
        <HorizonLine/>
        <HorizonLine/>
        <HorizonLine/>
        <HorizonLine/>
        <HorizonLine/>
      </div>
    );
  }