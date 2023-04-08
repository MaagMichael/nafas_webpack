import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import pages from components folder
import NavigationBar from "./components/NavigationBar";
import Main from "./components/Main";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" component={Main} />
          <Route path="/menu" component={Menu} />
          {/* <Route path="/packages" component={Packages} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
