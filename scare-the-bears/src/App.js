import Navbar from './Components/Navbar';
import Main from './Main'
import { useState } from 'react';
import Popup from './Components/Popup'
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


function App() {

  const [instructionsVisibility, setInstructionsVisibility] = useState(false);

  const backgroundImg = require("/Users/javier/Library/Mobile Documents/com~apple~CloudDocs/Coding/Hack@Brown/scareBears/scare-the-bears/src/media/My project.png");
  const backgroundImgElem = document.getElementsByTagName('img'); // returns a collection

  // Handling image animation against mouse
  function moveImage(e) {
    const positions = [];

    const x = -(e.pageX + backgroundImgElem[0].offsetLeft) / 50;
    const y = -(e.pageY + backgroundImgElem[0].offsetTop) / 50;
    positions.push({ x, y });
    const averageCount = 10;
    if (positions.length > averageCount)
      positions.splice(0, 1);
      
    const current = positions.reduce((acc, e) => { acc.x += e.x; acc.y += e.y; return acc }, { x: 0, y: 0 });
    current.x /= positions.length;
    current.y /= positions.length;
    
    backgroundImgElem[0].style.transform = `translateX(${current.x}px) translateY(${current.y}px)`;
  }

    return (
      <div className="grid-container">
  
        <div className="navbar-container">
          <Navbar setInstructionsVisibility={setInstructionsVisibility}></Navbar>
        </div>
        
        <div 
          className="image-container"
          onMouseMove={(e) => moveImage(e)}
        >
          <img src={backgroundImg}></img>
          <h1>Scare The Bears</h1>
          <Popup trigger={instructionsVisibility}>
            <h1 className="instructions-title">Intructions</h1>
            <FontAwesomeIcon onClick={() => {

              setInstructionsVisibility(false)}
              } 
              icon={faXmark} 
              className="x-mark fa-2x"/>
            </Popup>
        </div>
  
        <div className="generator-container">
          <Main></Main>
        </div>
      </div>
    );
}
export default App;
