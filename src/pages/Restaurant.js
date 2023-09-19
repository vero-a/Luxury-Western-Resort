import React from 'react';
import Food from '../assets/restaurant.jpg';
import Header from '../components/Header';

function Restaurant() {
  return (
    <div>
      <Header/>
      <div className='bg-pages bg-cover bg-center h-[130px] pt-5 '>
      </div>
      <div className='container mt-24 mb-10 mx-auto lg:px-0 flex flex-col lg:flex-row lg:gap-20'>
          <div className='lg:w-[65%]'>
            <div className='text-center lg:text-start'>
              <h2 className='font-primary text-[45px]'>Restaurant</h2>
              <div className='font-tertiary uppercase text-[15px] tracking-[6px] mb-8'>
                Luxury Western Resort
              </div>
            </div>
            <p className='leading-8'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex gap-4 mt-8 mb-8 py-4'>
              <button className='btn btn-lg btn-primary mx-auto mt-2 px-4 py-2'>View Menu</button>
              <button className='btn btn-lg btn-primary mx-auto mt-2 px-4 py-2'>Make Reservation</button>
            </div>
          </div>
          <div className='justify-center mx-auto lg:w-[45%]'>
            <img
              src={Food}
              alt='Dish at the Luxury Western Resort restaurant.'
              className='relative w-[500px] h-auto max-h-[400px] rounded-sm shadow-sm'
            />
          </div>
      </div>
    </div>
  )
}

export default Restaurant