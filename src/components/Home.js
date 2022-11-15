import React from 'react'
import './Home.css'
import '../App.css';

function Home({time}) {
  return (
    <main className='homepage-section'>               
        <div className='home-section'>
            <h3>Olá! Me chamo <br />
            <span className='name'>Everton BENATI,</span><br />
              e transformar idéias em código <br />
              é o que AMO FAZER.
            </h3>
        </div>
    </main>     
  )
}

export default Home