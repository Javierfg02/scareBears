import Navbar from './Components/Navbar';
import Main from './Main'
import { useState } from 'react';
import Popup from './Components/Popup'
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


function App() {

  const gangImg = require("/Users/javier/Library/Mobile Documents/com~apple~CloudDocs/Coding/Hack@Brown/scareBears/scare-the-bears/src/media/gang.png");

  const [instructionsVisibility, setInstructionsVisibility] = useState(false);
  const [aboutVisibility, setAboutVisibility] = useState(false);

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
          <Navbar 
            setInstructionsVisibility={setInstructionsVisibility}
            setAboutVisibility={setAboutVisibility}>
          </Navbar>
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
              <h2> Use your wildest imagination to type in a scary story and wait 10-15 seconds for it to generate</h2>
            </Popup>
            <Popup trigger={aboutVisibility}>
            <h1 className="instructions-title">About us</h1>
            <FontAwesomeIcon onClick={() => {

              setAboutVisibility(false)}
              } 
              icon={faXmark} 
              className="x-mark fa-2x"/>
              <div className="row">
                <div className='column'>
                <h2> We are the Scare Bears and completed the project "Scare the Bears" for 
                Hack@Brown. We hope you enjoy your stories :)</h2>
                </div>
                {/* <div className="about-img">
                  <img className="gang-img" width='10px' height='10px' src={gangImg}></img>
                </div> */}
              </div>
              
            </Popup>
        </div>
  
        <div className="generator-container">
          <Main></Main>
        </div>
      </div>
    );
}
export default App;
