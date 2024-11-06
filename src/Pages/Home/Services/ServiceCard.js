// ServiceCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import carwash from '../../../assets/images/services/carc wash.png'
import oilchange from '../../../assets/images/services/1.jpg'
import tireservice from '../../../assets/images/services/download.png'
import carservice from'../../../assets/images/services/5.jpg'
import batteryservice from '../../../assets/images/services/2.jpg'
import allservicve from '../../../assets/images/services/all services.jpg'


const ServiceCard = () => {
  // Array of service details
  const serviceDetails = [
    {
      _id: '0',
      img: carwash, // Replace with the actual image path
      price: 449,
      title: 'CAR WASH'
    },
    {
      _id: '1',
      img: oilchange, // Replace with the actual image path
      price: 999,
      title: 'OIL CHANGE'
    },
    {
      _id: '2',
      img: tireservice,
      price: 200,
      title: 'Wheel Alignment'
    },
    {
      _id: '3',
      img: carservice,
      price: 250,
      title: 'CAR SERVICING'
    },
    {
      _id: '4',
      img:batteryservice ,
      price: 300,
      title: 'BATTERY SERVICE'
    },
    {
      _id: '5',
      img: allservicve, // Add the actual image path
      price: 10000,
      title: 'ALL SERVICE PACK' // Add the desired service title
    }
    // Add more services here...
  ];

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-20 mt-20" style={{justifyContent:'space-around'}}>
      {serviceDetails.map((service) => (
        <div key={service._id} className="card card-compact w-72 bg-base-100 shadow-xl">
          <figure>
            <img
              src={service.img}
              className="rounded-3xl"
              alt={`${service.title || 'Service'} Image`}
            />
          </figure>
          <div className="card-body flex-row justify-between items-center">
            <div>
              <h2 className="card-title">{service.title || 'Service Title'}</h2>
              <p className="text-red-500 font-bold">
                Price: <span aria-label="Price">{service.price || 'N/A'} RS</span>
              </p>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/checkout/${service._id || ''}`}>
                <button className="btn btn-sm btn-primary mt-3">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
