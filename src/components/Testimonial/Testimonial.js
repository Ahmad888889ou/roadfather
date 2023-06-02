import React from 'react'
import './testi.scss'
import team1 from '../../assets/team1.jpg'
export default function Testimonial() {
  return (

    <section className="container testinial">
      <div className="testimonial">
        <div className="testi-content ">
          <div className="slide ">
            <img src={team1} alt="" className="image" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia placeat incidunt eum adipisci perferendis. Hic dolorem, eveniet fuga architecto dolorum minus quas voluptate soluta ipsam perferendis eos voluptatem voluptatum odio?</p>
            <div className="details">
              <span className="name">Marnie Lotte</span>
              <span className="job">Web Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
