import React from 'react'
import './Services.css'
import {VscEditorLayout, VscOrganization, VscServer} from 'react-icons/vsc'

export default function Services() {
  return (
    <section className='services' id='services'>
      <div className='container'>
        <div className="section-heading">
          <h2>Services</h2>
          <h6>What I can do for you</h6>
        </div>
        <div className="my-skills">
          <div className="skill">
            <div className="icon-container">
              {/* <i className='fas fa-layer-group'></i> */}
              <VscServer className='icon-container-i'/>
            </div>
            <h1>Web Design</h1>
            <p>
              words blahhh words blahhh words blahhh words blahhh words blahhh
              words blahhh words blahhh words blahhh words blahhh words blahhh
            </p>
          </div>
          <div className="skill">
            <div className="icon-container">
              <VscEditorLayout className='icon-container-i'/>
            {/* <i className='fas fa-code'></i> */}
            </div>
            <h1>Web Developement</h1>
            <p>
              words blahhh words blahhh words blahhh words blahhh words blahhh
              words blahhh words blahhh words blahhh words blahhh words blahhh
            </p>
          </div>
          <div className="skill">
            <div className="icon-container">
              {/* <i className='fas fa-chart-bar'></i> */}
              <VscOrganization className='icon-container-i' />
            </div>
            <h1>Solutions Engineer</h1>
            <p>
              words blahhh words blahhh words blahhh words blahhh words blahhh
              words blahhh words blahhh words blahhh words blahhh words blahhh
            </p>
          </div>
        </div>
      </div>
      
    </section>
  )
}
