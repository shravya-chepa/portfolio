import "./App.scss";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <br />
      <Home />
      <About />
    </div>
  );
}

export default App;
