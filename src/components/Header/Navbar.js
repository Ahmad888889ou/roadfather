import React, { useState } from 'react'
import './navbar.scss'
import {Link as ScrollLink} from 'react-scroll'

export default function Navbar() {
  const [color, setColor] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <nav class={`navbar navbar-expand-lg navbar-dark ${color?'bg-danger position-fixed py-3':'bg-transparent my-2'}`}>
      <div className="container-fluid">
        <img className='image__logo' src="data:image/png;base64,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" alt="" />
        <ScrollLink className="navbar-brand ms-2 fw-bold text-white" style={{fontFamily: 'Roboto Slab, sans-serif',}} to='home-section'>ROAD FATHER <br /> <span>DISPATCHING</span></ScrollLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto px-5 mb-2 mb-lg-0 fs-5 ">
            <li className="nav-item">
              <ScrollLink className="nav-link active text-white " aria-current="page" to='home-section'>Home</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link text-white" to='services-section'>Services</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link text-white "to='about-section'>About Us</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link text-white " to='contact-section'>Contact Us</ScrollLink>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link text-white" href='tel:+923066560065'>+92 306 6560065</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
