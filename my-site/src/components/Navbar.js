import React from "react";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "white", textAlign: "center" }}>
      <a href="#about" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Chi Sono</a>
      <a href="#projects" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Progetti</a>
      <a href="#cv" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>CV</a>
    </nav>
  );
}

export default Navbar;
