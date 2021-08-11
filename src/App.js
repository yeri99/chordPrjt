import React, {useState} from 'react';
import './App.css';
import { OctaveMenu } from './octaveMenu';
import { Staves } from './staff';

function App() {
  const [staves, setStaves] = useState([
    {
      num: 0,
      chord : 'none',
      otave : 'c3'
    },
    {
      num: 1,
      chord : 'none',
      otave : 'c3'
    },
    {
      num: 2,
      chord : 'none',
      otave : 'c3'
    },
    {
      num: 3,
      chord : 'none',
      otave : 'c3'
    },
  ]);
  var staffNum = 3;

  const renderStaff = staves.map(staff=>{
    staffNum++;
    return (
      <Staves staff={staff} key={staff.num}/>
    );
  });
  const addstaff = (event) => {
    event.preventDefault();
    setStaves([
      ...staves,
      {
        num: staffNum,
        chord: 'none',
        octave: 'c3',
      }
    ]);
  };

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
          {renderStaff}
        </div>
        <div className="App-addStaff">
          <button onClick={addstaff}>+</button>
        </div>
      </div>
     
    </div>
  );
}


export default App;
