import logo from './logo.svg';
import useState from 'react'
import './App.css';
import Square from './Square';

function App() {
  
  const arr= new Array(9).fill('');
  const [square, setSquare] = useState(arr);
  
  return (
    <div className="App">
      
    {square.map(sqaures=><Square/>)}
    </div>
  );
}

export default App;
