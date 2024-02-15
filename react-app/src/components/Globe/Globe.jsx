import React from 'react'
import './Globe.css'

import '../../assets/globe.png'
import '../../assets/sponsored.png'

const Globe = () => {
  return (
    <div className='locations-container'>
      <div className='locations-title'>
        <h2 className='locations-header'>Huge Global Network <br />of Fast VPN</h2>
        <p className='locations-paragraph'>See LaslesVPN everywhere to make it easier for you when you move <br />locations.</p>
      </div>
      <img src='/src/assets/globe.png' alt='Locations' className='locations-image'/>

      <div className='sponsored'>
        <img src='/src/assets/sponsored.png' alt='Sponsors logo' />
      </div>
    </div>
  )
}

export default Globe