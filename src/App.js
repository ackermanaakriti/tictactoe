import {useState} from 'react'
import './App.css';

import Board from './Board'


function App() {
  
  const [board, setSquare] = useState(Array(9).fill(""));
  const [xValue, updateXvalue]= useState(true);
  const updateValue=(idx)=>
  {
   
   let strings= Array.from(board);
   strings[idx]=xValue?"X":"O";
   setSquare(strings);
   updateXvalue(!xValue);
 
    
    console.log('hello madafaka');
 
  };
  
 
  
  return (
    <div className="App">
      <Board  board={board} onClick={updateValue}>
      
 
    </Board>
    </div>
  );
}

export default App;
