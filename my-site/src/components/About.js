import React from "react";
import './About.css';

function About() {
  return (
    <section id="about">
      <h2>Chi sono</h2>
      <div className="about-container">
        <img src="/assets/Foto.jpg" alt="Ndoye Omar" className="profile-photo" />
        <p>
          Salve e benvenuto nel mio sito! Sono Ndoye Omar, laureato in Ingegneria Informatica (LM-32) presso l’Università degli Studi di Brescia. Qui potrai scoprire i miei progetti e consultare il mio CV, se sei interessato.
        </p>
      </div>
    </section>
  );
}

export default About;
