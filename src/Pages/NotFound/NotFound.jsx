import React from 'react';
import { useNavigate } from 'react-router-dom';

import notfound from '../../assets/NotFound.webp'

import './NotFound.css';

const NotFound = () => {

    const navigate = useNavigate();

  return (
    <div className='notfound-container'>
        <p>Page Not Found</p>
        <img src={notfound} alt="not found"/>
        <button onClick={() => navigate('/')}>Home Page</button>
    </div>
  )
}

export default NotFound