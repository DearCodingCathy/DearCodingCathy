import React from 'react'
import { TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti'
import { FiInstagram } from 'react-icons/fi'

import './About.css'

export default function About() {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="profile-img">
          <img src='https://i.imgur.com/00xd3pX.jpg' alt='Catherine Balogun'/>
        </div>
        <div className="about-details">
          <div className="about-heading">
          <h2>About</h2>
          <h6>Catherine</h6>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="social-media">
          <ul class='nav-list'>
            <li>
              <a href='' className='icon-link'>
              <TiSocialLinkedin className='icon'/>
              </a>
            </li>

            <li>
              <a href='' className='icon-link'>
              <TiSocialGithub className='icon'/>
              </a>
            </li>
            <li>
              <a href='' className='icon-link'>
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
