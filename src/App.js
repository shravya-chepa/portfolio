import "./App.scss";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
// import Blog from "./components/Blog";
import Resume from "./components/Resume";
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
      {/* <Blog /> */}
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
