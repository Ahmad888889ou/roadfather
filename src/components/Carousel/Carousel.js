import React from 'react'
import './carousel.scss'
export default function Carousel() {
  

  return (
    <div id='home-section' className='mb-5'>
      <div className="container ">
        <div className="row">
          <div className="col text-center">
            <h1 style={{ marginTop: 250,marginBottom:20, letterSpacing: 2, fontFamily: 'Roboto Slab, sans-serif', fontSize: '60px', }} className=' text-white  fw-bold'>Pack It, Secure It, Ship It</h1>
            <h1 style={{ fontSize: '22px', color: 'white',fontFamily: 'Roboto Slab, sans-serif' }}>Be Part of the Professionals. Join our team! </h1>
            <button className='btn '>SERVICES</button>
          </div>
        </div>
      </div>
    </div>
  )
}
