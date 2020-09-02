import React from 'react'
import './Contact.css'
import {FiMail} from 'react-icons/fi'

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Sent!')
  }
  return (
      <section className='contact' id='contact'>
      
      <div className='container'>
        <div className="section-heading">
          <h2>Contact Me</h2>
          <h6>Let's work together!</h6>
        </div>

        <div className='email-me'>
          <a
          href='mailto: catherineobalogun@gmail.com'
          >
          <FiMail className='icon'/>
          </a>
          <a
            className='email-heading'
            href='mailto: catherineobalogun@gmail.com'>
            catherineobalogun@gmail.com </a>
        </div>

        <div className='or-div'>
        <h5 className='or-text'>Or feel free to send a message below!</h5>
      </div>

        <form
          name='contact'
          method='POST'
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <label>Name:</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
          />

          <label>Email:</label>
          <input
            type='email'
            name='email'
          placeholder='Email'
          />

          <label>Message:</label>
          <textarea
            name='message'
            placeholder='Message'
          />
          <button
            type='submit'
            className='btn'>Send</button>
        </form>
        </div>
        </section>
  )
}
