import React from 'react'
import './Plans.css'

import '../../assets/box.svg'
import '../../assets/check.png'

const Plans = () => {
  return (
    <div className='plans-container'>

      <div className='plans-title'>
        <h2 className='plans-header'>
        Choose Your Plan
        </h2>

        <p className='plans-paragraph'>
        Let's choose the package that is best for you and explore it happily and <br />cheerfully.
        </p>
      </div>

      <div className='plans-packages'>

        <div className='plans'>
          <img src='/src/assets/box.svg' alt='plans image'/>

          <h3>Free plan</h3>

          <ul>
            <li><span className='plans-checkmark'>&#10003;</span>Unlimited Bandwitch</li>
            <li><span className='plans-checkmark'>&#10003;</span>Encrypted Connection</li>
            <li><span className='plans-checkmark'>&#10003;</span>No Traffic Logs</li>
            <li><span className='plans-checkmark'>&#10003;</span>Works on All Devices</li>
          </ul>

          <h4 className='plans-price'>Free</h4>

          <button className='plans-button'>Select</button>
        </div>

        <div className='plans'>
          <img src='/src/assets/box.svg' alt='plans image'/>

          <h3>Standard plan</h3>

          <ul>
            <li><span className='plans-checkmark'>&#10003;</span>Unlimited Bandwitch</li>
            <li><span className='plans-checkmark'>&#10003;</span>Encrypted Connection</li>
            <li><span className='plans-checkmark'>&#10003;</span>No Traffic Logs</li>
            <li><span className='plans-checkmark'>&#10003;</span>Works on All Devices</li>
            <li><span className='plans-checkmark'>&#10003;</span>Connect Anywhere</li>
          </ul>

          <h4 className='plans-price'>$9 <span>/mo</span></h4>

          <button className='plans-button'>Select</button>
        </div>

        <div className='plans premium'>
          <img src='/src/assets/box.svg' alt='plans image'/>

          <h3>Premium plan</h3>

          <ul>
            <li><span className='plans-checkmark'>&#10003;</span>Unlimited Bandwitch</li>
            <li><span className='plans-checkmark'>&#10003;</span>Encrypted Connection</li>
            <li><span className='plans-checkmark'>&#10003;</span>No Traffic Logs</li>
            <li><span className='plans-checkmark'>&#10003;</span>Works on All Devices</li>
            <li><span className='plans-checkmark'>&#10003;</span>Connect Anywhere</li>
            <li><span className='plans-checkmark'>&#10003;</span>Get New Features</li>
          </ul>

          <h4 className='plans-price'>$12 <span>/mo</span></h4>

          <button className='plans-button'>Select</button>
        </div>
      </div>
    </div>
  )
}

export default Plans