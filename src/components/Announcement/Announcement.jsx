import React from 'react';
import { ImFacebook, ImInstagram, ImLinkedin2, ImTwitter, ImYoutube } from 'react-icons/im';

import './Announcement.css';

const Announcement = () => {
  return (
      <div className="Announcement">
          <p className='contact-no'>+91 9804158828</p>
          <p className='contact-email'>anirbanbanerjee844@gmail.com</p>
          <div className='social'>
              <ImFacebook/>
              <ImInstagram/>
              <ImLinkedin2/>
              <ImYoutube/>
              <ImTwitter/>
          </div>
      </div>
  )
}

export default React.memo(Announcement)