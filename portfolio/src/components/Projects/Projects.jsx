import React from 'react'
import './Projects.css'

export default function Projects() {
  return (
    <section className='projects' id='projects'>
  
      <div className='container'>
        <div className="section-heading">
          <h2>Projects</h2>
          <h6>View some of my recent work</h6>
        </div>
        
        <div className="project-item">
          <div className="project-img has-margin-right">
            <img src='https://i.imgur.com/5WxCEpa.png' alt='Lipsync Desktop'/>
          </div>
          <div className="project-description">
            <h6>Web Development</h6>
            <h2>Lipsync for your life</h2>
            <p>
              ajdhiwnkwjfnifnksjnnfoifnskjnfdnoiafnkajn
            </p>
            <a href='https://dearcodingcathy.github.io/Lipsync-for-your-life/' className='cta'>View Details</a>
          </div>
          </div>

          <div className="project-item">
            <div className="project-description has-margin-right">
            <h6>Web Design</h6>
            <h2>Sephoney</h2>
            <p>
              ajdhiwnkwjfnifnksjnnfoifnskjnfdnoiafnkajn
            </p>
            <a href='https://sephoney.netlify.app/' className='cta'>View Details</a>
            </div>
          <div className="project-img ">
            <img src='https://i.imgur.com/HKhWOhD.png' alt='Sephoney Laptop'/>
          </div>
            </div>

            <div className="project-item">
          <div className="project-img has-margin-right">
            <img src='https://i.imgur.com/yLtUvAh.png' alt='Breathe Desktop'/>
          </div>
          <div className="project-description">
            <h6>Software Development</h6>
            <h2>Breathe</h2>
            <p>
              ajdhiwnkwjfnifnksjnnfoifnskjnfdnoiafnkajn
            </p>
            <a href='https://breathe-app-mcks.netlify.app/' className='cta'>View Details</a>
            </div>
            </div>

          <div className="project-item">
              <div className="project-description has-margin-right">
            <h6>Web Development</h6>
            <h2>Copped</h2>
            <p>
              ajdhiwnkwjfnifnksjnnfoifnskjnfdnoiafnkajn
            </p>
            <a href='https://coppedheat.netlify.app/' className='cta'>View Details</a>
            </div>
          <div className="project-img ">
            <img src='https://i.imgur.com/obsiEer.png' alt='Copped laptop'/>
          </div>
            </div>
        </div>
        </section>
      
  )
}
