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
          <Hamburger color='rgb(49, 235, 179)' size={45} onToggle={handleToggle} />
         </div>      
        <div className={ isOpen ? 'show-links' : 'hide-links'}>
          <Link className='menu-item' to=''>HOME</Link>
          <Link className='menu-item' to='/AboutMe'>SOBRE MIM</Link>
          <Link className='menu-item' to='/HardSkills'>HARD SKILLS</Link>
          <Link className='menu-item' to='/Projects'>PROJETOS</Link>
          <Link className='menu-item' to='/Contact'>CONTATOS</Link>
        </div>
    </div>
  )
}

export default Navbar