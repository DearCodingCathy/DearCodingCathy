import React from 'react'
import './Services.css'

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
            <i className='fas fa-layer-group'></i>
            </div>
            <h1>Web Design</h1>
            <p>
              words blahhh words blahhh words blahhh words blahhh words blahhh
              words blahhh words blahhh words blahhh words blahhh words blahhh
            </p>
          </div>
          <div className="skill">
            <div className="icon-container">
            <i className='fas fa-code'></i>
            </div>
            <h1>Web Developement</h1>
            <p>
              words blahhh words blahhh words blahhh words blahhh words blahhh
              words blahhh words blahhh words blahhh words blahhh words blahhh
            </p>
          </div>
          <div className="skill">
            <div className="icon-container">
            <i className='fas fa-chart-bar'></i>
            </div>
            <h1>Product Strategy</h1>
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
