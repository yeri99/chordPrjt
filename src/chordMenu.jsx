import './menuStyle.css';
import React, { useRef } from 'react';
import { useDetectOutsideClick  } from './useDetectOutsideClick';

const chordList = ['C', 'Cm', 'C7', 'D', 'Dm', 'D7', 'E', 'Em', 'E7', 'F', 'Fm', 'F7', 'G', 'Gm', 'G7', 'A', 'Am', 'A7', 'B', 'Bm', 'B7'];

export const ChordMenu = () => {
  const dropdownRef = useRef([]);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const renderBtn = chordList.map((chord, i)=>{
    return (
      <button className="menu-drop-button" onClick={()=>{onChordBtn(chordList[i])}} chord={chord} key={i}>{chordList[i]}</button>
    );
  });

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger"  id='btn'>
        <span>Select Chord</span>
      </button>
      <nav ref={(elem) => (dropdownRef.current[0] = elem)} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li>{renderBtn}</li>
        </ul>
      </nav>
    </div>
  );
};

function onChordBtn(text, event) {
  const btnElement = document.getElementById('btn');
  var j;
  for(j=0; j<chordList.length; j++){
    if(text === chordList[j]){
      btnElement.innerText = chordList[j];
      console.log(chordList[j]+' is clicked');
    }
  }
}

