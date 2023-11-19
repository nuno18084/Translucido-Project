import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App" id="outer-container">
      <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      </div>
    </div>
  );
}

export default App;
