import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import PageNotFound from "./Components/PageNotFound";
import { Route, Routes } from "react-router";
import Contact from "./Components/Contact";
import Update from "./Components/Update";
// import NavBar from "./NavBar";
function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
