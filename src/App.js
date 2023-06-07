import "./App.scss";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <br />
      <Home />
      <About />
      <Projects />
      <Blog />
    </div>
  );
}

export default App;
