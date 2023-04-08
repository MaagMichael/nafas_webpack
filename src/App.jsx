import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

// import pages from components folder
import NavigationBar from "./components/NavigationBar";
import Main from "./components/Main";
import Menu from "./components/Menu";

import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/packages" element={<Packages />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <NavigationBar />
      </Router>
    </div>
  );
}

export default App;
