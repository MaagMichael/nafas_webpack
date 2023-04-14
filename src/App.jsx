import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

// import pages from components folder
import NavigationBar from "./components/NavigationBar";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
