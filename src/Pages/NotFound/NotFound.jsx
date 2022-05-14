import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import notfound from '../../assets/NotFound.png'

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