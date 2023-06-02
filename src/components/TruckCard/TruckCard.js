import React from 'react'
import './truck.scss';
import truck from '../../assets/truck.jpg'
export default function TruckCard() {
    return (
        <div className="container mb-5" id='about-section'>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <h1 className='text-warning ' style={{ fontFamily: 'Roboto Slab, sans-serif', fontSize: 45,    wordSpacing: 3 }}>Benefits Of Working <br /> With Our Best Truck <br /> Dispatching Services <br /> Agency</h1>
                    <ul className='ms-3 mt-4'>
                        <li className=' fw-bold ' style={{ fontSize: 17 }}>A dedicated dispatching service <span className='fw-normal'>(Dedicated dispatcher will on be provided).</span> </li>
                        <li className='fw-bold ' style={{ fontSize: 17 }}>No hidden fees</li>
                        <li className='fw-bold ' style={{ fontSize: 17 }}>Weekend Support <span className='fw-normal'>if you are on a load.</span> </li>
                        <li className='fw-bold ' style={{ fontSize: 17 }}>You pick the areas <span className='fw-normal'>you want to service!</span></li>
                        <li className='fw-bold ' style={{ fontSize: 17 }}>Reasonable <span className='fw-normal'>& best freight rates.</span></li>
                        <li className='fw-bold ' style={{ fontSize: 17 }}>Free invoice submission  <span className='fw-normal'>to your factoring company.</span></li>
                    </ul>
                    <button className='btn px-5 text-white bg-warning  ' style={{ borderRadius: 20 }}>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg> </button>

                </div>
                <div className="col col-md-6 col-lg-6 my-5 my-md-0 px-2 px-md-5  d-flex align-items-center">
                    <div className='mt-3'>
                        <img className='img__container w-100' src={truck} alt="image" width='570px' height='410px' />
                    </div>
                </div>
            </div>
        </div>

    )
}
