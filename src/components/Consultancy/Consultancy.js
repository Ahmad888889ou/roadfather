import React from 'react'
import contact from '../../assets/contact4.jpg'
import './style.scss'
export default function Consultancy() {
    return (
        <div className='my-5' id='contact-section'>
            <div className="container-fluid bg-info  " >
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col col-md-6 col-lg-6">
                        <img src='https://media.istockphoto.com/id/483596833/photo/workers-with-clipboard-talking-next-to-stainless-steel-milk-tanker.webp?b=1&s=170667a&w=0&k=20&c=jAabKruMQkOrzLAtRA6H82srvgR7f3rosdUfxfVgkiQ=' alt=""  className='me-3 w-100 h-100' />
                    </div>
                    <div className="col col-md-6 col-lg-6 py-5" >
                        <h3 className='text-danger' style={{ fontFamily: 'Roboto Slab, sans-serif', fontWeight: 600 }}>Request</h3>
                        <h2 className='fw-bold text-warning' style={{fontFamily: 'Roboto Slab, sans-serif', fontSize: 30,  }}>A Free Consultation</h2>
                        <p style={{ fontSize: 13 }} >Thousands of projects have made our company a leader in construction area.We stand behind our promise to deliver timely and quality service.</p>
                        <div className="row g-3 ">
                            <div className="col ">
                                <input type="text" className='w-100 p-2' placeholder='Name' />
                            </div>
                            <div className="col ">
                                <input type="email" className='w-100 p-2' placeholder='Email' />
                            </div>
                        </div>
                        <div className="row g-3 mt-2">
                            <div className="col">
                                <input type="text" className='w-100 p-2 ' placeholder='Truck Type' />
                            </div>
                            <div className="col">
                                <input type="text" className='w-100 p-2 ' placeholder='Type of Freight' />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <textarea className='w-100 p-2' name="" id="" rows="4" placeholder='Message' ></textarea>
                            </div>
                        </div>
                        <button className='btn mt-3  px-5 text-white bg-warning  ' style={{ borderRadius: 20 }}>Request Quote <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
