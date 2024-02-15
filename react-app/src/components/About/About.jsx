import React from 'react'
import './About.css'

import '../../assets/location-icon.svg'
import '../../assets/server-icon.svg'
import '../../assets/user-icon.svg'

const About = () => {
  return (
    <div className='about-container'>
      <div className='location-container'>
        <img src="/src/assets/location-icon.svg" alt="Location"/>
        <div>
          <b>30+</b>
          <p>Locations</p>
        </div>
      </div>

      <div className='server-container'>
        <img src="/src/assets/server-icon.svg" alt="Server" />
        <div>
          <b>50+</b>
          <p>Servers</p>
        </div>
      </div>

      <div className='user-container'>
        <img src="/src/assets/user-icon.svg" alt="User" />
        <div>
          <b>90+</b>
          <p>Users</p>
        </div>
      </div>
    </div>
  );
}

export default About