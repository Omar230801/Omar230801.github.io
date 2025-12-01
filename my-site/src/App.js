import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import CV from "./components/CV";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <CV />
      <Footer />
    </div>
  );
}

export default App;
