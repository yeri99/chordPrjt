import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { OctaveMenu } from './octaveMenu';
import { ChordMenu } from './chordMenu';
import { drawStaff } from './staff';

function App() {
  const [staves, setStaves] = useState([]);
  useEffect(()=>{
    console.log('render');
  });
  const staffButtonOnClick = staves.map(staff=>{
    return (
      {drawStaff}
    );
  });
  const addStaff = (event) =>{
    event.preventDefault();
    setStaves([
      ...staves, {}
    ]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-name">
          PLAY CHORD
        </p>
      </header>
      <div className = "App-body">
        <div>
          <OctaveMenu/>
        </div>
        <div className="App-staff">
          {drawStaff()}
        </div>
        <div className="App-select">
          <ChordMenu/>
        </div>
        <div className="App-addStaff">
          <button onClick={createStaff}>+</button>
        </div>
      </div>
     
    </div>
  );
}

function createStaff(event) {
  event.preventDefault();
  const newStaff = document.createElement('div');
  const newText = document.createTextNode('test');

  const newFunc = createContext('<drawStaff />');
  newStaff.append(newText);
  document.body.append(newFunc);
}


export default App;
