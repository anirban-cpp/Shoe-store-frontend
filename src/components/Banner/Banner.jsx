import React from 'react'

import './Banner.css';

const Banner = () => {
  return (
      <div className="banner">
          <p className='banner-title'>Do you want your fashion statement to stay updated ?</p>
          <p className='banner-subtitle'>Sign up for free and stay updated with every new trend in the market.</p>
          <div>
            <input type="email" placeholder='Your email'/>
            <button>Subscribe</button>
          </div>
      </div>
  )
}

export default Banner