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
        <h1>Scare The Bears</h1>
        
      </div>

    </div>
  );
}
export default App;
