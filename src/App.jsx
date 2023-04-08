import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import pages from components folder
import NavigationBar from "./components/NavigationBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      {/* <Main /> */}
      <Router>
        <NavigationBar />
        <Route exact path="/" component={Main} />
        <Route path="/menue" component={Menu} />
        {/* <Route path="/packages" component={Packages} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </Router>
      <h3>Home</h3>
        <h3>Menu</h3>
        <h3>Pakete</h3>
        <h3>Kontakt</h3>
    </div>
  );
}

export default App;
