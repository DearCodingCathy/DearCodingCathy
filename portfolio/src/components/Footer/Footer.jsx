import React from 'react'
import './Footer.css'
import { IoIosArrowUp } from 'react-icons/io'

export default function Footer() {
  return (
    <footer className='copyright'>
      <div className="up">
        {/* <i className="fas fa-chevron-up"></i> */}
        <IoIosArrowUp className="up-i" />
      </div>
      <p>&copy; 2020 Catherine Balogun</p>

    </footer>
  )
}
