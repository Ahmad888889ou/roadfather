import React from 'react'
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
import './blog.scss'

export default function Blog() {
    return (
        <section className='mt-5 mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col ">
                        <h2 className='text-danger text-center' style={{fontFamily: 'Roboto Slab, sans-serif'}}>Blog Us</h2>
                        <h5 className=' text-warning text-center' style={{ fontSize: 27, fontFamily: 'Roboto Slab, sans-serif' }}>Awesome news and articles from us</h5>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 mt-4" >
                    <div className="col">
                        <div class="card border-0" style={{ borderRadius: 15, backgroundColor: '#f6fff8' }}  >
                            <div class="card-body " >
                                <img src={blog1} className='w-100' alt='events-images' />
                                <h5 className='card-title my-3 fw-bold' style={{ fontSize: 18, paddingRight: 33 }}>Recovery underway,logistics costs pressured</h5>
                                <p className='card-text text-secondary ' style={{ fontSize: 14, paddingRight: 25, }}>After some quality family time in Florida ,I am back to looking at where the economy is headed,after some.</p>
                                <button className='p-2 btn btn-outline-danger border-0 '>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card border-0  " style={{ borderRadius: 15, backgroundColor: '#f6fff8' }}  >
                            <div class="card-body " >
                                <img src={blog2} className='w-100' alt='events-images' />
                                <h5 className='card-title my-3  fw-bold' style={{ fontSize: 18, paddingRight: 33 }}>Hitting the pause button</h5>
                                <p className='card-text text-secondary' style={{ fontSize: 14, paddingRight: 25, }}>We are continuing to operate safely doing our part to keep the national supply chains fluid under the "essential business"</p>
                                <button className='p-2 btn btn-outline-danger border-0 '>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card border-0  " style={{ borderRadius: 15, backgroundColor: '#f6fff8' }}  >
                            <div class="card-body " >
                                <img src={blog3} className='w-100' alt='events-images' />
                                <h5 className='card-title my-3  fw-bold' style={{ fontSize: 18, paddingRight: 33 }}>Looking back and moving forward</h5>
                                <p className='card-text text-secondary ' style={{ fontSize: 14, paddingRight: 25 }}>After some quality family time in Florida ,I am back to looking at where the economy is headed,after some.</p>
                                <button className='p-2 btn btn-outline-danger border-0 '>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
