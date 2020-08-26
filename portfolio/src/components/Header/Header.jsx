import React, {useState} from 'react'
import './Header.css'

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
      {/* <li>
        <a
          onClick={handleClick}
          href="#home" class='nav-link'>Home</a>
      </li> */}

      <li>
            <a
            onClick={handleClick}
          href="#about" class='nav-link'>About</a>
      </li>

      <li>
        <a
          onClick={handleClick}
          href="#services" class='nav-link'>Services</a>
      </li>

      <li>
        <a
          onClick={handleClick}
          href="#projects" class='nav-link'>Projects</a>
      </li>

      <li>
        <a
          onClick={handleClick}
          href="#experience" class='nav-link'>Experience</a>
      </li>

      <li>
        <a
          onClick={handleClick}
          href="#contact" class='nav-link'>Contact</a>
      </li>
      </ul>
      </nav>

      <div className="landing-text">
      <h1>Catherine Balogun</h1>
      <h6>Software Engineer | Solutions Engineer | Web Developer</h6>
    </div>
    </header>
  )
}
