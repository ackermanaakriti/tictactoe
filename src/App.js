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
  };
  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  

  
 
  
  return (
    <div className="App">
      <Board  board={board} onClick={updateValue}></Board>
      
    </div>
  );
}

export default App;
