import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/images/logo_big.png'
import insta_logo from '../Assets/images/instagram_icon.png'
import pinterest from '../Assets/images/pintester_icon.png'
import whatsapp from '../Assets/images/whatsapp_icon.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={insta_logo} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All RIght Reserved.</p>
            </div>
        </div>
    )
}

export default Footer