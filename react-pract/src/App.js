import React, { useState } from 'react';
import './App.css';
import MultiCounter from './components/Multicounter';
import RandomList from './components/Randomlist';
import Room from './components/Room';
import StepTracker from './components/Steptracker';

function App() {

  const [text, setText] = useState('');

  const handleChange = event => {
    let text = event.target.value;
    setText(
    text.replace(/[0-9]/g, '')
    );
    };
    

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
      />

      <StepTracker />

      <RandomList/>

      <MultiCounter/>

      <Room/>

    </div>
  );
}



export default App;
