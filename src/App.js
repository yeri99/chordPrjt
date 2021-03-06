import React, {useState} from 'react';
import './App.css';
import { Staves } from './staff';
import { CompoMenu } from './autoCompositionMenu';
import { writeFile } from './midi/midiFileWrite';
import { ChordMenu } from './chordMenu';

function App() {
  const testStaves = [
    {num: 0,
    chord: "C",
    octave:'c3'
    },
    {num: 1,
    chord: "D7",
    octave: 'c3'
    }
  ];
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
  var staffNum = 0;

  const renderStaff = staves.map(staff=>{
    staffNum++;
    
    return (
      <div>
        <Staves staff={staff} key={staff.num}/>
        <div className="staffButton"><ChordMenu /></div>
      </div>
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
        <div className="App-info">
          <div className="info-fst">
            <div>
              <p>tempo :</p>
              <input type="text" name="tempo" placeholder="100"/>
            </div>
            <div>
              <p>meter :</p>
              <input type="text" name="nume" placeholder="4"/>
              <p>/</p>
              <input type="text" name="deno" placeholder="4"/>
            </div>
            <div>
              <p>octave :</p>
              <input type="text" name="octave" placeholder="C3"/>
            </div>
          </div>
          <div className="info-sec">
            < CompoMenu />
          </div>
        </div>
      </header>

      <div className = "App-body">
        <div className="App-staff">
          {renderStaff}
        </div>
        <div className="App-addStaff">
          <button onClick={addstaff}>+</button>
        </div>
        <div className="App-playMid">
          <button onClick={playMidi}>play</button>
          <audio src='/Instrument.mid'></audio>
            <audio
              controls
              src="../Instrument.mid">
                Your browser does not support the
                <code>audio</code> element.
              </audio>
        </div>
        <div>
          <button onClick={()=>writeFile(testStaves)}>export</button>
        </div>
      </div>
     
    </div>
  );
}

function playMidi() {
  console.log("good");
  var MidiPlayer = require('midi-player-js');
  
  var Player = new MidiPlayer.Player(function(event){
    console.log(event);
  });

  Player.loadFile('./Instrument.mid');
  
  Player.play();
}


export default App;
