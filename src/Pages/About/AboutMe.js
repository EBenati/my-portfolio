import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutme-section">
      <div className="aboutme-text">
        <h1>Sobre Mim</h1>
        <p>
          Estou cursando Análise e Desenvolvimento de Sistemas, mas sempre fui
          um entusiasta da tecnologia, portanto bem antes de começar a faculdade
          já me dedicava ao aprendizado da área, de modo a me tornar um
          programador front-end.
        </p>
        <p>
          Como sempre fui autodidata, comecei fazendo o curso CS50,
          disponibilizado pela Harvard, depois passei para o curso completo de
          Web Developer da Mozilla, em seguida fiz alguns cursos de JavaScript e
          ReactJS da plataformas Udemy, Scrimba e DIO, e li bons livros de
          programação.
        </p>

        <p>
          Estou feliz com tudo que aprendi, tenho aprendido e <br />
          ainda vou aprender. Mais satisfatório ainda é ver todas as coisas que
          já criei e ainda vou poder criar, pois parar de aprender nunca será
          uma opção para mim!
        </p>
      </div>
      <div className="aboutme-image"></div>
    </div>
  );
}

export default AboutMe;
