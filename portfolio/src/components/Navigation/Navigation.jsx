import React from 'react'
import './Navigation.css'

export default function Navigation() {


  return (

      <ul className='nav-list'>
      <li>
        <a href="#home" class='nav-link'>Home</a>
      </li>

      <li>
        <a href="#about" class='nav-link'>About</a>
      </li>

      <li>
        <a href="#services" class='nav-link'>Services</a>
      </li>

      <li>
        <a href="#projects" class='nav-link'>Projects</a>
      </li>

      <li>
        <a href="#experience" class='nav-link'>Experience</a>
      </li>

      <li>
        <a href="#contact" class='nav-link'>Contact</a>
      </li>
      </ul>
      
  )
}
