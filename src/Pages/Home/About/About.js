import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import useTitle from '../../../hooks/useTitle';

const About = () => {
  useTitle('About')
  
  return (
    <div className='hero my-20'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='relative w-1/2' style={{height:'400px'}}>
          <img
            src={person}
            alt=''
            className='w-1/2 ml-32  rounded-lg shadow-2xl'
          />
        </div>
        <div className='w-1/2'>
          <p className='text-2xl font-bold text-blue-600'>About Us</p>
          <h1 className='my-5 text-5xl font-bold'>
            We are qualified <br />
            & of experience <br />
            in this field
          </h1>
          <p className='py-6'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{' '}
          </p>
          <p className='py-6'>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{' '}
          </p>
          <button className='btn btn-primary'>Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
