import "./App.scss";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <br />
      <Home />
      <About />
      <Projects />

      <Blog />
      <Resume />
    </div>
  );
}

export default App;
