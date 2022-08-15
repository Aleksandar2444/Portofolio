import "./App.css";
import Header from "./Layout/Header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import MySkills from "./Pages/MySkills/MySkills";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";
import HomePage from "./Pages/HomePage/HomePage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Portofolio" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-skills" element={<MySkills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
