import React from "react";
import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import CV from './components/CV';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
