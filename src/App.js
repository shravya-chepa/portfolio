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

function MainContent() {
  return (
    <>
      <div className="home">
        <NavigationBar />
        <br />
        <Home />
      </div>
      <About />
      <Projects />
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