import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
        <Link to=''>Home</Link>
        <Link to='/AboutMe'>Sobre Mim</Link>
        <Link to='/HardSkills'>Hard Skills</Link>
        <Link to='/Projects'>Projetos</Link>
        <Link to='/Contact'>Contatos</Link>
    </div>
  )
}

export default Navbar