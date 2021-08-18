import './menuStyle.css';
import React, { useRef } from 'react';
import { useDetectOutsideClick  } from './useDetectOutsideClick';

export const CompoMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
  
   
    return (
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Composition</span>
        </button>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li><button>Happy</button></li>
            <li><button>Sad</button></li>
            <li><button>Comfortable</button></li>
          </ul>
        </nav>
      </div>
    );
  };

  