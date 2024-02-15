import React from 'react'
import './Reviews.css'

import '../../assets/customer-1.png'
import '../../assets/customer-2.png'
import '../../assets/customer-3.png'
import '../../assets/arrow-left.svg'
import '../../assets/arrow-right.svg'

const Reviews = () => {
  return (
    <div className='reviews-container'>

      <div className='reviews-title'>
        <h2 className='reviews-header'>Trusted by Thousands of Happy <br />Customers</h2>
        <p className='reviews-paragraph'>These are the stories of our customers who have joined us 
          with great <br />pleasure when using this crazy feature.</p>
      </div>

      <div className='customer-container'>

        <div className='customer'>
          <div className='customer-details active-customer'>
            <img src='/src/assets/customer-1.png' alt='customer-image' />
            <div className='customer-id'>
              <p className='customer-name'>Viezh Robert</p>
              <p className='customer-location'>Warsaw, Poland</p>
            </div>
            <p className='rating'>4.5 <span>&#9733;</span></p>
          </div>

          <p className='customer-review'>
            "Wow... I am ver happy to use this VPN, it turned out to be more than my
            expectations and so far there have been no problems. LaslesVPN always the best."
          </p>
        </div>

        <div className='customer'>
          <div className='customer-details'>
            <img src='/src/assets/customer-2.png' alt='customer-image' />
            <div className='customer-id'>
              <p className='customer-name'>Yessica Christy</p>
              <p className='customer-location'>Shanxi, China</p>
            </div>
            <p className='rating'>4.5 <span>&#9733;</span></p>
          </div>

          <p className='customer-review'>
            "I like it because I like to travel far and still can connect with high speed."
          </p>
        </div>

        <div className='customer'>
          <div className='customer-details'>
            <img src='/src/assets/customer-3.png' alt='customer-image' />
            <div className='customer-id'>
              <p className='customer-name'>Kim Young Jou </p>
              <p className='customer-location'>Seoul, South Korea</p>
            </div>
            <p className='rating'>4.5 <span>&#9733;</span></p>
          </div>

          <p className='customer-review'>
            "This is very unusual for my business that currently requires a virtual private network
            that has high security."
          </p>
        </div>

      </div>

      <div className='reviews-toggle'>

        <div className='toggle-dots'>
          <div className='dot active'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>

        <div className='toggle-arrows'>

          <div className='left-arrow'>
            <img src='/src/assets/arrow-left.svg' alt='Left arrow' />
          </div>

          <div className='right-arrow'>
            <img src='/src/assets/arrow-right.svg' alt='Right arrow' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Reviews