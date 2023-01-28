import './App.css';
import Navbar from './Components/Navbar';
import Main from './Main'

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

        <div className="searchBar">
          <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Type words to generate your scary story!"/>
          <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit"></button>
        </div>
      </div>
      <Main/>
      <div className="generator-container">
     
      </div>

    </div>
  );
}
export default App;
