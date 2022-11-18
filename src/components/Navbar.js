import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './Navbar.css'

function Navbar() {

  const [isOpen, setOpen] = useState(false)

  function handleToggle() {setOpen(!isOpen)}

  return (
    <div className='nav'>
        <div className='menu-icon'>
          <Hamburger size={48} onToggle={handleToggle} />
         </div>      
        <div className={ isOpen ? 'show-links' : 'hide-links'}>
          <Link className='menu-item' to=''>Home</Link>
          <Link className='menu-item' to='/AboutMe'>Sobre Mim</Link>
          <Link className='menu-item' to='/HardSkills'>Hard Skills</Link>
          <Link className='menu-item' to='/Projects'>Projetos</Link>
          <Link className='menu-item' to='/Contact'>Contatos</Link>
        </div>
    </div>
  )
}

export default Navbar