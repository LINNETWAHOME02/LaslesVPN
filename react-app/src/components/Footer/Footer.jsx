import React from 'react'
import './Footer.css'

import '../../assets/logo.svg'
import '../../assets/facebook.svg'
import '../../assets/twitter.svg'
import '../../assets/instagram.svg'

const Footer = () => {
  return (
    <div className='footer-container'>

      <div className='footer-left'>

        <div className='footer-logo'>
          <img src='/src/assets/logo.svg' alt='Logo' />
        </div>

        <div className='footer-p'>
          <p>LaslesVPN is a private virtual network that <br />has unique features and has high security.</p>
        </div>

        <div className='footer-brands'>
          <img src='/src/assets/facebook.svg' alt='facebook' />
          <img src='/src/assets/twitter.svg' alt='twitter' />
          <img src='/src/assets/instagram.svg' alt='instagram'/>
        </div>

        <div className='footer-copyright'>&#169; 2020 LaslesVPN</div>
      </div>

      <div className='footer-right'>

        <div className='footer-content'>
          <ul>
            <h5 className='font'>Products</h5>
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className='footer-content'>
          <ul>
            <h5 className='font'>Engage</h5>
            <li>LaslesVPN?</li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
          </ul>
        </div>

        <div className='footer-content'>
          <ul>
            <h5 className='font'>Earn Money</h5>
            <li>Affiliate</li>
            <li>Become Partner</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Footer