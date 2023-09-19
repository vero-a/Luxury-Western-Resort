import React from 'react';
import Header from '../components/Header';
import Sauna from '../assets/sauna.jpg';
import Pool from '../assets/pool.jpg';
import Wood from '../assets/wood.jpg';
import Seating from '../assets/spa.jpg';
import Drink from '../assets/spadrink.jpg';

function Spa() {
  return (
    <div>
      <Header/>
      <div className='bg-pages bg-cover bg-center h-[130px] pt-5 '>
      </div>
      <div className='container w-full justify-center mx-auto mt-24 mb-10'>
          <div>
            <div className='text-center lg:text-start'>
              <h2 className='font-primary text-[45px]'>Spa</h2>
              <div className='font-tertiary uppercase text-[15px] tracking-[6px] mb-8'>
                Luxury Western Resort
              </div>
            </div>
            <p className='leading-8 mb-7'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='grid grid-cols-2 w-full mx-auto my-10 gap-4 items-stretch justify-items-center md:justify-items-stretch md:grid-cols-3 md:grid-rows-2 '>
              <img
                    src={Sauna}
                    alt='Sauna area at the Luxury Western Resort.'
                    className='relative w-auto h-auto max-h-[400px] rounded-sm shadow-sm'
              />
              <img
                  src={Seating}
                  alt='Seating area at the Luxury Western Resort.'
                  className='relative w-auto h-auto max-h-[400px] rounded-sm shadow-sm'
              />
              <img
                    src={Drink}
                    alt='Refreshing Drink at the Luxury Western Resort.'
                    className='relative w-auto h-auto max-h-[400px] rounded-sm shadow-sm'
              />
              <img
                    src={Wood}
                    alt='Chopped wood at the Luxury Western Resort.'
                    className='relative w-auto h-auto max-h-[400px] rounded-sm shadow-sm'
              />
              <img
                    src={Pool}
                    alt='Pool at the Luxury Western Resort.'
                    className='relative h-auto rounded-sm shadow-sm max-h-[400px] col-span-2'
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Spa