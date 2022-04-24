import {useState} from 'react'
import './App.css';
import Square from './Square';
import Board from './Board'


function App() {
  
  const [board, setSquare] = useState(Array(9).fill(null));
  const [xValue, updateXvalue]= useState(false);
  const updateValue=(boxidx)=>
  {
    const updateBoard= board.map((value, idx)=>
    {
      if(idx===boxidx)
      {
        return xValue===true?'X':"O";
      }
      else{
        return value;
      }

    })
    setSquare(updateBoard);
    updateXvalue(!xValue);
 
  };
  
 
  
  return (
    <div className="App">
      <Board  board={board} onClick={updateValue}>
      
 
    </Board>
    </div>
  );
}

export default App;
