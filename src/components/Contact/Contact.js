import React from 'react'
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.png'
import team4 from '../../assets/team4.png'
import team5 from '../../assets/team5.png'
import team6 from '../../assets/team6.png'
import './contact.scss'
export default function Contact() {
  return (
    <>
      <div className="container mb-3">
        <div className="row">
          <div className="col">
            <h4 className='text-center  text-danger ' style={{fontFamily: 'Roboto Slab, sans-serif'}} >We Love Them</h4>
            <h1 className='text-center text-warning ' style={{ fontFamily: 'Roboto Slab, sans-serif', fontSize: 35, wordSpacing: 3 }}>What Our Clients Say About US!</h1>
          </div>
        </div>

        <div id="carouselExampleFade" class="carousel slide carousel-fade carousel-new">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={team1} className=" " alt="..." width='170px' height='170px' style={{ borderRadius: 100 }} />
              <p className='text-center ' style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>
                As per my experience they are one of the best truck dispatching companies in the market</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
              <div className="details d-flex align-items-center flex-column">
                <span className="name text-warning" style={{ fontSize: 14, fontWeight: 700, }}>Alicia Paranova</span>
                <span className="job" style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Onwer Company</span>
              </div>
            </div>
            <div class="carousel-item">
              <img src={team2} className=" " alt="..." width='170px' height='170px' style={{ borderRadius: 100, }} />
              <p className='text-center' style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>
                I am taking Dispatching Services from RF Since 5 years now. I never had a complain about dispatchers or managers. They dispatch my truck very well.</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
              <div className="details d-flex align-items-center flex-column">
                <span className="name text-warning" style={{ fontSize: 14, fontWeight: 700, }}>Cena Doj</span>
                <span className="job" style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Owner Operator</span>
              </div>
            </div>
            <div class="carousel-item">
              <img src={team3} className=" " alt="..." width='170px' height='170px' style={{ borderRadius: 100, }} />
              <p className='text-center' style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>
                RF is Dispatching my trucks for almost 4 years. This is very affordable Truck Dispatch Company. I'm happy with their Dispatch Service</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
              <div className="details d-flex align-items-center flex-column">
                <span className="name text-warning" style={{ fontSize: 14, fontWeight: 700,  }}>Sophie Leonard</span>
                <span className="job" style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Administrative Non-Driver</span>
              </div>
            </div>
            <div class="carousel-item">
              <img src={team4} className=" " alt="..." width='170px' height='170px' style={{ borderRadius: 100, }} />
              <p className='text-center' style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>
                RF is the resonable and best truck dispatch company. I run 7 days a week and always have the load reday before I deliver one.</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
              <div className="details d-flex align-items-center flex-column">
                <span className="name text-warning" style={{ fontSize: 14, fontWeight: 700, }}>John Doe</span>
                <span className="job" style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Assistant Manager</span>
              </div>
            </div>
            <div class="carousel-item">
              <img src={team5} className=" " alt="..." width='170px' height='170px' style={{ borderRadius: 100, }} />
              <p className='text-center' style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>
                If you are a trucker and need Semi Truck Dispatch Services, I would definitely recommend RF for your Dispatching service needs and requirements.</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
              <div className="details d-flex align-items-center flex-column">
                <span className="name text-warning" style={{ fontSize: 14, fontWeight: 700,  }}>Michael Barnes</span>
                <span className="job" style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Company Driver</span>
              </div>
            </div>
            <div class="carousel-item">
              <img src={team6} className=" " alt="..." width='170px' height='170px' style={{ borderRadius: 100, }} />
              <p className='text-center' style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>
                There are many other Dispatcher Companies in the market but RF charge lower Then Others. I would recommend this Dispatching Company.</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
              <div className="details d-flex align-items-center flex-column">
                <span className="name text-warning" style={{ fontSize: 14, fontWeight: 700,  }}>Max Hood</span>
                <span className="job" style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Maitenance technician</span>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev  bg-warning" style={{ height: 50, width: 'auto', position: "absolute", top: "44%", left: "6%", borderRadius: 20, }} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button class="carousel-control-next bg-warning" style={{ height: 50, width: 'auto', position: "absolute", top: "44%", right: "6%", borderRadius: 20, }} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </>
  )
}
