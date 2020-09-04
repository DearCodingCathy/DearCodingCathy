import React, { useState } from 'react'
import './Contact.css'
import {FiMail} from 'react-icons/fi'

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })


  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));
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
          target='_blank'
          href='mailto: catherineobalogun@gmail.com'
          >
          <FiMail className='icon'/>
          </a>
          <a
            className='email-heading'
            target='_blank'
            href='mailto: catherineobalogun@gmail.com'>
            catherineobalogun@gmail.com </a>
        </div>

        <div className='or-div'>
        <h5 className='or-text'>Or feel free to send a message below!</h5>
      </div>

        <form
          name="contact"
          data-netlify="true"
          onSubmit={handleSubmit}
          autoComplete='off'
        >
          <label
            name='name'
          >
            Name:
            </label>
          <input
            type='text'
            value={formData.name}
            name='name'
            placeholder='Name'
            onChange={handleChange}
          />

          <label
          name='email'
          >
            Email:
            </label>
          <input
            type='email'
            value={formData.email}
            name='email'
            placeholder='Email'
            onChange={handleChange}

          />

          <label
            name='message'
          >
            Message:
            </label>
          <textarea
            name='message'
            value={formData.message}
            placeholder='Message'
            onChange={handleChange}

          />
          <button
            type='submit'
            className='btn'>Send</button>
        </form>
        </div>
        </section>
  )
}
