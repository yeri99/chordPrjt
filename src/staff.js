import React from 'react';
import './staff.css';
import clefImg from './img/trebleClef.png';
import { ChordMenu } from './chordMenu';



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

const HorizonLineSec = () => {
  return (
    <div
      style={{
        width: "200px",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "5px 0 5px 0",
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
        marginTop: "5px",
        marginLeft: "200px",
      }}
    ></div>
  );
};

export const drawStaff = () => {
  console.log("clicked");
  return (
    <div>
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

export const Staves = ({ staff }) => {
  return(
    <div className="oneStaff">
      <VerticalLine/>
      <HorizonLineSec/>
      <HorizonLineSec/>
      <HorizonLineSec/>
      <HorizonLineSec/>
      <HorizonLineSec/>
      <div className="staffButton"><ChordMenu /></div>
    </div>
  );
};