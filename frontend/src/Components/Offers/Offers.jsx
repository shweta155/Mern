import React from 'react'
import './offer.css'
import exclusice_image from '../Assets/images/exclusive_image.png'
const Offers = () => {
    return (
        <div className='offers'>
            <div className="offer-left">
                <h1>EXCLUSIVE</h1>
                <h1>offers for you</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>
                    Check Now
                </button>
            </div>
            <div className="offer-right">
                <img src={exclusice_image} alt="" />
            </div>
        </div>
    )
}

export default Offers