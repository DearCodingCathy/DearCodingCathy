import React from 'react'
import './Navigation.css'

export default function Navigation() {


  return (

      <ul className='nav-list'>
      <li>
        <a
          // onClick={handleClick}
          href="#home" class='nav-link'>Home</a>
      </li>

      <li>
        <a
          href="#about" class='nav-link'>About</a>
      </li>

      <li>
        <a
          // onClick={handleClick}

          href="#services" class='nav-link'>Services</a>
      </li>

      <li>
        <a
          // onClick={handleClick}

          href="#projects" class='nav-link'>Projects</a>
      </li>

      <li>
        <a
          // onClick={handleClick}
          href="#experience" class='nav-link'>Experience</a>
      </li>

      <li>
        <a
          // onClick={handleClick}
          href="#contact" class='nav-link'>Contact</a>
      </li>
      </ul>
      
  )
}
