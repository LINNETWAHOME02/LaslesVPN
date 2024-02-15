import React from 'react'
import './Features.css'

import '../../assets/features.svg'

const Features = () => {
  return (
    <div  className='features-container'>

      <div className='features-image'>
        <img src='/src/assets/features.svg' alt='Features clip bit'/>
      </div>

      <div>
        <h2 className='features-title'>We Provide Many <br />Features You Can Use</h2>

        <p className='features-text'>You can explore the features that we provide with fun and 
          have their own functions each feature.</p>
        
        <ul className='features-list'>
          <li>
            <img src='/src/assets/checkmark.png' alt='Checkmark' />
            Powerfull online protection.
          </li>
          <li>
            <img src='/src/assets/checkmark.png' alt='Checkmark' />
            Internet without borders.
          </li>
          <li>
            <img src='/src/assets/checkmark.png' alt='Checkmark' />
            Supercharged VPN
          </li>
          <li>
            <img src='/src/assets/checkmark.png' alt='Checkmark' />
            No specific time limits.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Features