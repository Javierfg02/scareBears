import './App.css';
import Navbar from './Components/Navbar';

function App() {

  const backgroundImg = require("./media/My project.png");
  return (
    <div className="grid-container">
      <div className="navbar-container">
        <Navbar></Navbar>
      </div>
      <div className="image-container">
        <img src={backgroundImg}></img>
        <h1>Scare <span>The</span> Bears</h1>
      </div>

      <div className="generator-container">
     
      </div>

    </div>
  );
}
export default App;
