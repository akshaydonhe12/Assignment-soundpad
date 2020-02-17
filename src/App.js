import React from 'react';
import './App.css';

import Box from './Box';

import track1 from './tracks/1.wav';
import track2 from './tracks/2.wav';
import track3 from './tracks/3.wav';
import track4 from './tracks/4.wav';
import track5 from './tracks/5.wav';
import track6 from './tracks/6.wav';
import track7 from './tracks/7.wav';
import track8 from './tracks/8.wav';
import track9 from './tracks/9.wav';
import track10 from './tracks/10.wav';
import track11 from './tracks/11.wav';
import track12 from './tracks/12.wav';
import track13 from './tracks/13.wav';
import track14 from './tracks/14.wav';
import track15 from './tracks/15.wav';
import track16 from './tracks/16.wav';

const tracks = [

  {name:track1,text:1},
  {name:track2,text:2},
  {name:track3,text:3},
  {name:track4,text:4},
  {name:track5,text:5},
  {name:track6,text:6},
  {name:track7,text:7},
  {name:track8,text:8},
  {name:track9,text:9},
  {name:track10,text:10},
  {name:track11,text:11},
  {name:track12,text:12},
  {name:track13,text:13},
  {name:track14,text:14},
  {name:track15,text:15},
  {name:track16,text:16},
  
]

function App() {
  return (
    <div className="App">
        <h1 className ="text">Sound pad </h1>

      {tracks.map(track => {

        return <Box track={track}/>

      })}
    
    </div>
  );
}

export default App;
