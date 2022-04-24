import {useState} from 'react'
import './App.css';
import Square from './Square';
import Board from './Board'

function App(props) {
  
  const arr= new Array(9).fill("hello");
  const [square, setSquare] = useState(arr);
  const [xValue, updateXvalue]= useState(false);
  const updateValue=(index)=>
  {
     
  };
 
  
  return (
    <div className="App">
      <Board>
      
   {square.map((curElm,i)=><Square onClick={updateValue(i)}/>)}
    </Board>
    </div>
  );
}

export default App;
