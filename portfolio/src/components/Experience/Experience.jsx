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
  <li className="date" data-date='2020 - present'>
  <h2>Software Engineering Fellow</h2>
  <p>
Participated in 500+ hours of applied training in software
engineering and web development concepts focusing on
frontend and backend development.
<br />
Collaborated with UX Designers and Software Engineers to
create full-stack web applications for clients              </p>
</li>

<li className="date" data-date='2019 - 2020'>
  <h2>Operations Assistant</h2>
  <p>
Managed enterprise data integration for over 100 thirdparty vendors leveraging Zola.com platform
<br />
Cdnated with external vendors to ensure accurate
inventory levels and order creations
<br />
Founded and led B.L.E.N.D Zola's Black employee ERG.              </p>
  </li>

  <li className="date" data-date='2018 - 2019'>
    <h2>Customer Service Representative</h2>
    <p>
Managed all incoming phone calls, emails, voicemails, and
follow-up contacts
<br />
Maintained a customer satisfaction score of 97% and above
<br />
Continuously brainstormed ways to improve the customers'
experience
<br />
Managed customer returns and replacement reporting.    </p>
  </li>
</ul>
<div className='resume'>
  <a
    className='resume-link'
    target='_blank'
    rel="noopener noreferrer"
    href='https://drive.google.com/file/d/1X4YEnJyz5ufHRM5nZi-yVUggOY8WuNjo/view?usp=sharing'>View full Resume Here</a>
</div>

    </div>
  </div>
  </section>
  )
}
