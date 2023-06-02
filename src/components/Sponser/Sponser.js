import React from 'react'
import brand1 from "../../assets/brand1.png"
import brand2 from "../../assets/brand2.png"
import brand3 from "../../assets/brand3.png"
import brand4 from "../../assets/brand4.png"
import brand5 from "../../assets/brand5.png"
import brand6 from "../../assets/brand6.png"
import brand7 from "../../assets/brand7.png"
// import brand8 from "../../assets/brand8.jpg"
import brand10 from "../../assets/brand10.png"
export default function Sponser() {
    return (
        <div className='my-5 ' style={{ backgroundColor: '#f6fff8', }}>
            <h5 className='text-center text-danger' style={{fontFamily: 'Roboto Slab, sans-serif'}}>Meet Our Clients</h5>
            <h1 className='text-center text-warning' style={{ fontSize: 40,  fontFamily: 'Roboto Slab, sans-serif' }}>They Believe In Us</h1> <br /><br />
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active text-center">
                        <img src={brand1} className="" alt="..." />
                        <img src={brand2} className="" alt="..." />
                        <img src={brand3} className="" alt="..." />
                        <img src={brand4} className="" alt="..." />
                    </div>
                    <div className="carousel-item text-center">
                        <img src={brand5} className="" alt="..." />
                        <img src={brand6} className="" alt="..." />
                        <img src={brand7} className="" alt="..." />
                        <img src={brand10} className="" alt="..."  />
                    </div>
                  
                </div>
            </div>

        </div>
    )
}
