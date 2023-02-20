import React from "react";
import GuessGame from "../../images/Game-Guees-Number.png";
import "./Projects.css";
import LandPage from "../../images/Landpage-Dropdown-Menu.png";
import Rating from "../../images/Rating-FeedBack.png";
import TipCalculator from "../../images/Tip-Calculator.png";
import LightDarkMode from "../../images/light-dark-landpage.png";

const Projects = () => {
  return (
    <div className="grid">
      <h1>Projetos</h1>
      <div className="project-section">
        <div className="project">
          <img src={GuessGame} alt="Guess Game" />
          <a href="https://github.com/EBenati/ebenati.github.io/tree/main/game-guess-my-number">
            <p>Jogo Adivinhe o Número</p>
          </a>
        </div>
        <div className="project">
          <img src={LandPage} alt="Guess Game" />
          <a href="https://github.com/EBenati/ebenati.github.io/tree/main/intro-section-with-dropdown-navigation-main">
            <p>Página com DropMenu</p>
          </a>
        </div>
        <div className="project">
          <img src={Rating} alt="Guess Game" />
          <a href="https://github.com/EBenati/ebenati.github.io/tree/main/interactive-rating-component-main">
            <p>Feedback Página</p>
          </a>
        </div>
        <div className="project">
          <img src={TipCalculator} alt="Guess Game" />
          <a href="https://github.com/EBenati/ebenati.github.io/tree/main/tip-calculator-app-main">
            <p>Calculadora de Gorjetas</p>
          </a>
        </div>
        <div className="project">
          <img src={LightDarkMode} alt="Guess Game" />
          <a href="https://github.com/EBenati/ebenati.github.io/tree/main/React-Project/light-dark-mode-page">
            <p>Página Light/Dark Mode</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
