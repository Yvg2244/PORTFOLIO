import MainComponent from "./Components/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Work from "./Components/Work";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainComponent />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About/>} />
      <Route path="/work" element={<Work/>}/>
    </Routes>
  );
}

export default App;
