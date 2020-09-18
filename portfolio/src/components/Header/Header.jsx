import React, {useState} from 'react'
import './Header.css'
import { Link } from "react-scroll";


export default function Header() {

  const [isOpen, setOpen] = useState(false)


  const handleClick = () => {
  setOpen(false)
}

  return (
    <header>
      <div className={isOpen ? "menu-toggler open": 'menu-toggler'}
        isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <div className="bar half start"></div>
        <div className="bar"></div>
        <div className="bar half end"></div>
      </div>

      <nav className={isOpen ? 'top-nav open': 'top-nav'}>
        <ul className='nav-list'>

          
    <Link
    class='nav-link'
    activeClass="active"
    to="about"
    spy={false}
    smooth={true}
    offset={0}
    duration={500}
    onClick={handleClick}
    >About</Link>

      {/* <li>
            <a
            onClick={handleClick}
          href="#about" class='nav-link'>About</a>
      </li> */}

          



      {/* <li>
        <a
          onClick={handleClick}
          href="#services" class='nav-link'>Services</a>
          </li> */}
          
    <Link
    class='nav-link'
    activeClass="active"
    to="services"
    spy={false}
    smooth={true}
    offset={0}
    duration={500}
    onClick={handleClick}>
    Services</Link>

      {/* <li>
        <a
          onClick={handleClick}
          href="#projects" class='nav-link'>Projects</a>
      </li> */}

    <Link
    class='nav-link'
    activeClass="active"
    to="projects"
    spy={false}
    smooth={true}
    offset={0}
    duration={500}
    onClick={handleClick}>
    Projects</Link>



      {/* <li>
        <a
          onClick={handleClick}
          href="#experience" class='nav-link'>Experience</a>
          </li> */}

    <Link
    class='nav-link'
    activeClass="active"
    to="experience"
    spy={false}
    smooth={true}
    offset={0}
    duration={750}
    onClick={handleClick}>
    Experience</Link>
          


      {/* <li>
        <a
          onClick={handleClick}
          href="#contact" class='nav-link'>Contact</a>
          </li> */}
          

    <Link
    class='nav-link'
    activeClass="active"
    to="contact"
    spy={false}
    smooth={true}
    offset={0}
    duration={1000}
    onClick={handleClick}>
    Contact</Link>
      </ul>
      </nav>

      <div className="landing-text">
      <h1>Catherine Balogun</h1>
      <h6>Software Engineer | Solutions Engineer | Web Developer</h6>
    </div>
    </header>
  )
}
