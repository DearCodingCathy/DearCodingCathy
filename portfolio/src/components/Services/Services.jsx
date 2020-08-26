import React from 'react'
import './Services.css'
import {VscEditorLayout, VscOrganization, VscServer} from 'react-icons/vsc'

export default function Services() {
  return (
<section className='services' id='services'>
  <div className='container'>
<div className="section-heading">
  <h2>Services</h2>
  
  
  <h6>Here's what I can do for you</h6>
</div>
<div className="my-skills">
  <div className="skill">
  <div className="icon-container">
  <VscServer className='icon-container-i'/>
</div>


<h1>Software Engineer</h1>
<p>
  A highly curious, and passionate software engineer with a 
  background in business, who is eager to join your organization, 
  and combine her knowledge of business and tech.
</p>
</div>
<div className="skill">
<div className="icon-container">
  <VscEditorLayout className='icon-container-i'/>
</div>


<h1>Web Developer</h1>
<p>
  A data driven web developer, who skills are proven to satisfy both customer 
  and business needs. Driven to work in a highly technical environment that 
  challenges my skill set and pushes me to further grow.
</p>
  </div>
  <div className="skill">
<div className="icon-container">
  <VscOrganization className='icon-container-i' />
</div>


<h1>Solutions Engineer</h1>
<p>
  With over 5 years of experience in customer success and 
  operations. I am eager to utilize my knowledge in tech to better problem solve.
</p>
  </div>
</div>
  </div>
  </section>
  )
}
