import React from 'react'
import './hero.css'
import hand_icon from '../Assets/images/hand_icon.png'
import arrow from '../Assets/images/arrow.png'
import hero_image from '../Assets/images/hero_image.png'
const Herosection = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY  </h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-button">
          <div>latest collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Herosection