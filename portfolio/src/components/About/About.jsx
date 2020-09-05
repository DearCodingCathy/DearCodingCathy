import React from 'react'
import { TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti'
import { FiInstagram } from 'react-icons/fi'

import './About.css'

export default function About() {
  return (

<section className='about' id='about'>
<div className="container">
<div className="profile-img">
  <img src='https://i.imgur.com/0r76R0h.jpg' alt='Catherine Balogun'/>
</div>
<div className="about-details">
<div className="about-heading">
<h2>About</h2>
<h6>Catherine</h6>
</div>
<p>
  I am people-centric and highly organized Web Developer who holds over five year experience in the Customer Success and Operations space. 
  Between developing customized, user-centric applications and solving complex supply-chain issues I have developed a data-driven approach in understanding the needs of diverse types of businesses and organizations. 
  I seek the opportunity to work at a technology organization that leverages data to create highly efficient processes that advance the bottom line.
</p>
<div className="social-media">
<ul class='nav-list'>
  <li>
      <a
        target='_blank'
        rel="noopener noreferrer"
        href='https://www.linkedin.com/in/catherinebalogun/' className='icon-link'>
    <TiSocialLinkedin className='icon'/>
    </a>
  </li>

    <li>
        <a
          target='_blank'
          rel="noopener noreferrer"
          href='https://github.com/DearCodingCathy' className='icon-link'>
      <TiSocialGithub className='icon'/>
      </a>
    </li>
    <li>
        <a
          target='_blank'
          rel="noopener noreferrer"
          href='https://www.instagram.com/codingcathy/' className='icon-link'>
      <FiInstagram className='icon'/>
      </a>
    </li>
  </ul>
</div>
</div>

</div>

</section>
  )
}
