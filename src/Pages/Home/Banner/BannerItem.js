import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className='carousel-item relative w-full overflow-hidden'>
      <div className='carousel-img'>
        <img src={image} alt='' className=' rounded-xl' />
      </div>
      <div className='absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4'>
        <h1 className='text-6xl font-bold text-white'>
          Reasonably
          <br />
          Priced for Motor <br />
          Servicing
        </h1>
      </div>
      <div className='absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2'>
        <p className='text-xl text-white'>
          We know we're the best independent garage in the country. Also, Helpful,
          friendly and reasonably priced.{' '}
        </p>
      </div>
      <div className='absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4'>
        <Link to='/services' className='btn btn-primary mr-5'>Book service</Link>
      </div>
      <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
        <a href={`#slide${prev}`} className='btn btn-circle  btn-primary  mr-5'>
          ❮
        </a>
        <a href={`#slide${next}`} className='btn btn-primary  btn-circle'>
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
