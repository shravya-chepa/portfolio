import "./App.scss";
import "animate.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SpaceInvader from "./components/Invader";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Badges from "./components/Badges";
import { useNavigate } from "react-router-dom";


function MainContent() {
  const navigate = useNavigate();

  const handlePlayGame = () => {
    navigate("/game");
  };
  return (
    <>
      <div className="home">
        <NavigationBar />
        <br />
        <Home />
      </div>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Badges />
      <button onClick={handlePlayGame} className="play-spaceinvaders">
        Play Space Invaders
      </button>
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/game" element={<SpaceInvader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;