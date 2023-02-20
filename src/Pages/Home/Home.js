import React from "react";
import "./Home.css";
import Avatar from "../../images/profile-pic-portfolio.png";
function Home() {
  return (
    <main className="homepage-section">
      <div className="text-section">
        <h3>
          Olá! Me chamo <br />
          <span className="name">Everton BENATI,</span>
          <br />
          e transformar idéias em código <br />é o que AMO FAZER.
        </h3>
      </div>
      <div className="avatar">
        <img src={Avatar} alt="avatar" />
      </div>
    </main>
  );
}

export default Home;
