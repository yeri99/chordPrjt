import './menuStyle.css';
import React, { useRef } from 'react';
import { useDetectOutsideClick  } from './useDetectOutsideClick';

export const OctaveMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
  
   
    return (
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Select Octave</span>
        </button>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li><button>C1</button></li>
            <li><button>C2</button></li>
            <li><button>C3</button></li>
          </ul>
        </nav>
      </div>
    );
  };

  