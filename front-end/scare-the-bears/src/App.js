import './App.css';
import Navbar from './Components/Navbar';
import Main from './Main'

function App() {

  const backgroundImg = require("./media/My project.png");
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
        <Navbar></Navbar>
      </div>
      
      <div 
        className="image-container"
        onMouseMove={(e) => moveImage(e)}
      >
        <img src={backgroundImg}></img>
        <h1>Scare <span>The</span> Bears</h1>
      
        <Main></Main>
      </div>


      <div className="generator-container">
      </div>
    </div>
  );
}
export default App;
