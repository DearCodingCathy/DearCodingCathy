import React, {useState} from 'react'
import Navigation from '../Navigation/Navigation'
import './Header.css'

export default function Header() {

  const [isOpen, setOpen] = useState(false)


  return (
    <header>
      <div className={isOpen ? "menu-toggler open": 'menu-toggler'}
        isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <div className="bar half start"></div>
        <div className="bar"></div>
        <div className="bar half end"></div>
      </div>

      <nav className={isOpen ? 'top-nav open': 'top-nav'}>
      <Navigation />
      </nav>
      

      <div className="landing-text">
      <h1>Catherine Balogun</h1>
      <h6>Software Engineer | Solutions Engineer | Web Developer</h6>
    </div>
    </header>
  )
}
