import {useState} from 'react'
import './App.css';
import Square from './Square';
import Board from './Board'

function App() {
  
  const arr= new Array(9).fill("");
  const [square, setSquare] = useState(arr);
  const [xValue, updateXvalue]= useState(false);
  const updateValue=(index)=>
  {
     const strings= Array.from(square);
     strings[index]= xValue?"X":"O";
     setSquare(strings);
     console.log('hello world');
     
  };
  
  return (
    <div className="App">
      <Board>
      
   {square.map((squares,index)=><Square onClick={()=>updateValue(index)}/>)}
    </Board>
    </div>
  );
}

export default App;
