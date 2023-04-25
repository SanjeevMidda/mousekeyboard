import { useState } from 'react';
import './index.css';

function App() {

  let area ={
    x: 0,
    y: 0
  }

  window.addEventListener('keydown', movement);

  const[location, setLocation] = useState(area);

 

 function movement(e){
  if(e.key === "ArrowUp"){
    setLocation({...area, y:`${area.y - 50}px`});
  }else if(e.key === "ArrowRight"){
    setLocation({...area, x: `${area.x - 50}px`});
  }else if(e.key === "ArrowDown"){
    setLocation({...area, y: `${area.y - 50}px`});
  }else if(e.key === "ArrowLeft"){
    setLocation({...area, x: `${area.x - 50}px`});
  }

  console.log(location);
 } 

  return (
    <div className="App">
    <div className='mouse' style={area}>🐭</div>

    </div>
  );
}

export default App;
