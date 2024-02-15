import React from 'react'
import './GetStarted.css'

import '../../assets/getstarted.svg'

const GetStarted = () => {
  return (
  <div className='getstarted-container'>
    <div className='getstarted-left'>
      <h1>
      Want anything to be <br/>easy with <span className='h1-span'>LaslesVPN.</span>
      </h1>

      <p>
      Provide a network for all your needs with ease and fun using
      <span className='p-span'> LaslesVPN</span><br/>
      discover interesting features from us.
      </p>

      <button className='getstarted-btn'>Get Started</button>
    </div>

    <div className='getstarted-right'>
      <img src='/src/assets/getstarted.svg' alt='GetStarted clip bit' />
    </div>
  </div>
  )
}

export default GetStarted