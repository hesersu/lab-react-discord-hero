// src/App.jsx
import "./App.css";
import logoImg from "./assets/discord-logo-white.png";
import navImg from "./assets/menu-icon.png";
import bgImg from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <nav className="images">
        <img src={logoImg} className="logoImg" alt="logo img" />
        <img src={navImg} className="navImg" alt="nav img" />
      </nav>
      <h1>Imagine a place</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community.
      </p>
      <button className="download">Download for Mac</button>
      <button className="open">Open Discord in your browser</button>
      <img src={bgImg} className="bgImg" alt="background" />
    </div>
  );
}

export default App;
