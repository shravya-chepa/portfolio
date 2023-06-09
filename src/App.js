import "./App.scss";
import "animate.css";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
// import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="home">
        <NavigationBar />
        <br />
        <Home />
      </div>
      <About />
      <Projects />
      <Gallery />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
