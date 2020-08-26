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
            <img src='https://i.imgur.com/z5hHlzy.png' alt='Lipsync Desktop'/>
          </div>
          <div className="project-description">
            <h6>Web Development</h6>
            <h2>Lipsync for your life</h2>
            <p>
              A one player Rupauls drag race trivia game, 
              <br />
            Vanilla Javascript | NodeJS | Drag Race API 

            </p>
            <a href='https://dearcodingcathy.github.io/Lipsync-for-your-life/' className='cta'>View Details</a>
            <br />
            <a href='https://github.com/DearCodingCathy/Lipsync-for-your-life/blob/master/README.md' className='cta'>See on Github</a>

          </div>
          </div>

          <div className="project-item">
            <div className="project-description has-margin-right">
            <h6>Web Design</h6>
            <h2>Sephoney</h2>
            <p>
              A makeup and beauty eccomerce website,
            <br />
              where you can buy all your beauty needs. 
              <br /> 
              Who needs Sephora, when you have Sephoney?
              <br />
              React | React Bootstrap | NodeJS
            </p>
            <a href='https://sephoney.netlify.app/' className='cta'>View Details</a>
            <br />
            <a href='https://github.com/DearCodingCathy/SEPHONEY' className='cta'>See on Github</a>

            </div>
          <div className="project-img ">
            <img src='https://i.imgur.com/0z0bUfg.png' alt='Sephoney Laptop'/>
          </div>
            </div>

            <div className="project-item">
          <div className="project-img has-margin-right">
            <img src='https://i.imgur.com/oCziOGi.png' alt='Breathe Desktop'/>
          </div>
          <div className="project-description">
            <h6>Software Development</h6>
            <h2>Breathe</h2>
            <p>
              Created in collaboration with UX,
              <br />
              Breathe is a mental health match making application 
              <br />
              helping users find an app, or medical professional 
              <br />
              based on their filtered parameters.
              <br />
              React | Express | MongoDB | React Bootstrap

            </p>
            <a href='https://breathe-app-mcks.netlify.app/' className='cta'>View Details</a>
            <br />
            <a href='https://github.com/DearCodingCathy/Breathe' className='cta'>See on Github</a>

            </div>
            </div>

          <div className="project-item">
              <div className="project-description has-margin-right">
            <h6>Web Development</h6>
            <h2>Copped</h2>
            <p>
              Copped is a web application designed for sneaker heads. 
              <br />
              Allowing users to create an account, and create custom 
              <br />
              posts about their recent 'cops'
              <br />
              React | React Bootstrap | Ruby on Rails | PostgreSQL
            </p>
            <a href='https://coppedheat.netlify.app/' className='cta'>View Details</a>
            <br />
            <a href='https://github.com/DearCodingCathy/Copped' className='cta'>See on Github</a>
            </div>
          <div className="project-img ">
            <img src='https://i.imgur.com/8t7ipNi.png' alt='Copped laptop'/>
          </div>
            </div>
        </div>
        </section>
      
  )
}
