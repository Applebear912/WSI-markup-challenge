import logo from "./logo.png";
import "./App.css";
import Navbar from "./Navbar.js";
import BreadcrumbList from "./BreadcrumbList.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
        <BreadcrumbList />
      </header>
    </div>
  );
}

export default App;
