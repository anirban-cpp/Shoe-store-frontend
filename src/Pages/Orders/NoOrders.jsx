import React from 'react';
import { useNavigate } from 'react-router-dom';

import image from '../../assets/no-orders.webp';

import './NoOrders.css';

const NoOrders = () => {

  const navigate = useNavigate();

  return (
      <div className="no-orders">
          <img src={image} alt='No Orders'/>
          <p>No orders found</p>
          <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
  )
}

export default NoOrders