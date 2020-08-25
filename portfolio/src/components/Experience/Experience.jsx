import React from 'react'
import './Experience.css'

export default function Experience() {
  return (
      <section className='experience' id='experience'>
      
      <div className='container'>
        <div className="section-heading">
          <h2>Work Experience</h2>
          <h6>Past and current jobs</h6>
        </div>
        <div className="timeline">
          <ul>
            <li className="date" data-date='2011 - present'>
              <h2>Job name</h2>
              <p>
                Some random text
              </p>
            </li>

            <li className="date" data-date='2008 - 2011'>
              <h2>Job name</h2>
              <p>
                Some random text
              </p>
            </li>

            <li className="date" data-date='2002 - 2007'>
              <h2>Job name</h2>
              <p>
                Some random text
              </p>
            </li>
            
          </ul>
        </div>
      </div>
      </section>
  )
}
