import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {

  const [fruits, setFruits] = useState([
  { name: "banana", color: "yellow", price: 2 },
  { name: "cherry", color: "red", price: 3 },
  { name: "strawberry", color: "red", price: 4 },
    ]);
  const justRed =() =>{
    setFruits(fruits.filter((fruit)=>fruit.color=="red"))
  }
  
  return (
    <div className="App">
      <header className="App-header">
      {console.log(fruits)}
        <p>{fruits.reduce((total,item)=>{return(total+item.price)},0)}</p>
        <p>{fruits.map((fruit)=><li>{fruit.name}</li>)}</p>
        <button onClick={()=>justRed()}>Filtrar Vermelhas</button>
      </header>
    </div>
  );
}

export default App;
