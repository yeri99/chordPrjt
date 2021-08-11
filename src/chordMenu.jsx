import './menuStyle.css';
import React, { useRef } from 'react';
import { useDetectOutsideClick  } from './useDetectOutsideClick';

export const ChordMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return (
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Select Chord</span>
        </button>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li><button onClick={()=>{onChordBtn('None')}}>None</button></li>
            <li><button onClick={()=>{onChordBtn('C')}}>C</button></li>
            <li><button onClick={()=>{onChordBtn('Cm')}}>Cm</button></li>
            <li><button onClick={()=>{onChordBtn('C7')}}>C7</button></li>
            <li><button onClick={()=>{onChordBtn('Dm')}}>Dm</button></li>
            <li><button onClick={()=>{onChordBtn('E')}}>E</button></li>
            <li><button onClick={()=>{onChordBtn('D')}}>D</button></li>
            <li><button onClick={()=>{onChordBtn('Em')}}>Em</button></li>
            <li><button onClick={()=>{onChordBtn('E7')}}>E7</button></li>
            <li><button onClick={()=>{onChordBtn('F')}}>F</button></li>
            <li><button onClick={()=>{onChordBtn('Fm')}}>Fm</button></li>
            <li><button onClick={()=>{onChordBtn('F7')}}>F7</button></li>
            <li><button onClick={()=>{onChordBtn('G')}}>G</button></li>
          </ul>
        </nav>
      </div>
    );
};

function onChordBtn(text, event) {
  
  if(text === 'C'){
    return(console.log("It is C"));
  }else if(text === 'Cm'){
    return(console.log("It is Cm"));
  }else{
    return(console.log("none"));
  }
}
