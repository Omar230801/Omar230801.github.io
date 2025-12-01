import React, { useState } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import CV from "./components/CV";
import Footer from "./components/Footer";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  if (!introFinished) {
  return <Intro onFinish={() => setIntroFinished(true)} />;
}


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
