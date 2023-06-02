import React from 'react'
import './service.scss'
import req from '../../assets/req11.png'
export default function Services() {
  return (
    <>
      <section className='mb-5 ' id='services-section'>
        <div className="container  ">
          <div className="row mb-5 ">
            <div className="col-12 col-md-8 ">
              <div className='service__heading'>
                <h5 className='fw-normal text-danger' style={{fontFamily: 'Roboto Slab, sans-serif'}} > We Solve Real Problems</h5>
                <h1 className='text-warning' style={{ fontSize: 40, fontFamily: 'Roboto Slab, sans-serif' }} >Find Best Independent <br />Dispatch Services For Owner <br /> Operators</h1>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-4 mt-md-0 d-flex align-items-center justify-content-end">
              <div className='service__button'>
                <button className='btn px-5 text-white bg-warning ' style={{  borderRadius: 20 }}>More Services <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
                </button>
              </div>
            </div>
          </div> <br /><br /><br />
          <div className="row mb-5 ">
            <div className="col-12 col-md-6 col-lg-4 mb-2">
              <div class="card py-4 services-card " style={{ borderRadius: 15 }}  >
                <div class="card-body ms-3">
                  <img src={req} alt="" height='100px' />
                  <h5 class="card-title my-3 fw-bold" style={{ color: '#001d3d', }}>Auto Liability</h5>
                  <p class="card-text text-secondary border-0">$1,000,000 in Auto-Liability <br /> Coverage Proof of Insurance..</p>
                  <a className='text-decoration-none link' >Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-2">
              <div class="card py-4 services-card " style={{ borderRadius: 15 }} >
                <div class="card-body  ms-3 ">
                  <img src={req} alt="" height='100px' />
                  <h5 class="card-title my-3 fw-bold" style={{ color: '#001d3d', }}>Cargo Insurance</h5>
                  <p class="card-text text-secondary border-0">$100,000 in Cargo Coverage Proof of Insurance..</p>
                  <a className='text-decoration-none' >Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-2">
              <div class="card py-4 services-card" style={{ borderRadius: 15 }} >
                <div class="card-body  ms-3">
                  <img src={req} alt="" height='100px' />
                  <h5 class="card-title my-3 fw-bold" style={{ color: '#001d3d', }}>MC Permit</h5>
                  <p class="card-text text-secondary border-0">Motor Carrier Authority Letter provided by DOT..</p>
                  <a className='text-decoration-none' >Learn More</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-2">
              <div class="card py-4 services-card" style={{ borderRadius: 15, }} >
                <div class="card-body  ms-3">
                  <img src={req} alt="" height='100px' />
                  <h5 class="card-title my-3 fw-bold" style={{ color: '#001d3d', }}>Copy Of CDL</h5>
                  <p class="card-text text-secondary border-0">Copy of Driver's License of the assigned driver.</p>
                  <a className='text-decoration-none' >Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-2">
              <div class="card py-4 services-card  " style={{ borderRadius: 15, }} >
                <div class="card-body  ms-3">
                  <img src={req} alt="" height='100px' />
                  <h5 class="card-title my-3 fw-bold" style={{ color: '#001d3d', }}>Broker References</h5>
                  <p class="card-text text-secondary border-0">Company Names of 3 brokers you worked with..</p>
                  <a className='text-decoration-none' >Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-2">
              <div class="card py-4 services-card" style={{ borderRadius: 15, }} >
                <div class="card-body  ms-3 ">
                  <img src={req} alt="" height='100px' />
                  <h5 class="card-title my-3 fw-bold" style={{ color: '#001d3d', }}>Signed W9</h5>
                  <p class="card-text text-secondary border-0">Filled and Signed W9 Form with Federal Id mentioned..</p>
                  <a className='text-decoration-none' >Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
