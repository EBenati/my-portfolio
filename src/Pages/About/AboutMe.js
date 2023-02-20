import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutme-section">
      <div className="aboutme-text">
        <h1>Sobre Mim</h1>
        <p>
          Sempre fui um entusiasta da programação, mas nunca havia pensado em{" "}
          <br />
          ser um profissional da área, e há quase um ano passei a me dedicar
          <br />
          ao aprendizado de modo a me tornar um programador front-end.
        </p>
        <p>
          Sempre fui autodidata, então comecei fazendo o curso CS50 da Harvard,
          <br />
          depois passei para o curso completo de Web Developer da Mozilla,
          <br />
          em seguida fiz alguns cursos de JavaScript e ReactJS da plataformas{" "}
          <br />
          Udemy, Scrimba e DIO, e li bons livros de programação.
        </p>

        <p>
          Estou feliz com tudo que aprendi, tenho aprendido e <br />
          ainda vou aprender. Mais satisfatório ainda é ver todas as <br />
          coisas que já criei e ainda vou poder criar, pois parar de <br />
          aprender nunca será uma opção para mim!
        </p>
      </div>
      <div className="aboutme-image"></div>
    </div>
  );
}

export default AboutMe;
