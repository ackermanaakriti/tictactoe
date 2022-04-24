import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Square from './Square';
import Board from './Board'

function App() {
  
  const arr= new Array(9).fill('');
  const [square, setSquare] = useState(arr);
  
  return (
    <div className="App">
      <Board>
      
   {square.map(square=><Square/>)}
    </Board>
    </div>
  );
}

export default App;
