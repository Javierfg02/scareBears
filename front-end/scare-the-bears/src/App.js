import './App.css';
import Navbar from './Components/Navbar';

function App() {

  const backgroundImg = require("./media/My project.png");
  const backgroundImgElem = document.getElementsByTagName('img'); // returns a collection

  // Handling image animation against mouse
  function moveImage(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let imageCenterX = backgroundImgElem[0].getBoundingClientRect().x;
    let imageCenterY = backgroundImgElem[0].getBoundingClientRect().y;

    let dx = (Math.sqrt(mouseX**2 - imageCenterX**2))/30;
    let dy = (Math.sqrt(mouseY**2 - imageCenterY**2))/30;
    console.log(dx)

    // if ()
    backgroundImgElem[0].style.right = imageCenterX + dx + "px";
    // backgroundImgElem[0].style.top = imageCenterY + dy + "px";
  }

  return (
    <div className="grid-container">
      <div className="navbar-container">
        <Navbar></Navbar>
      </div>
      <div 
        className="image-container"
        onMouseMove={(e) => moveImage(e)}
      >
        <img src={backgroundImg}></img>
        <h1>Scare <span>The</span> Bears</h1>
        
        <div className="searchBar">
          <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Type words to generate your scary story!"/>
          <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit"></button>
        </div>
      </div>

      <div className="generator-container">
     
      </div>

    </div>
  );
}
export default App;
