import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import ScrollToTop from '../components/ScrollToTop';
import { RoomContext } from '../context/RoomContext';
import { FaCheck } from 'react-icons/fa';
import {BsArrowsFullscreen, BsPeople} from 'react-icons/bs'


function RoomDetails() {
  const {rooms} = useContext(RoomContext)
  const{id} = useParams()

  const room = rooms.find((room)=> {
    return room.id === Number(id);
  });

  const {name, description, facilities, image, price, size, maxPerson} = room
  return (
    <section>
      <ScrollToTop/>
      <div className='bg-room bg-cover bg-center h-[500px] pt-5 '>
        <div className='relative bg-black/50 w-full h-[500px] mt-[-20px] flex justify-center items-center'>
          <h1 className='text-6xl text-white z-20 font-primary text-center'>{name} Details</h1>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row w-full h-full gap-2 py-24'>
          <div className='w-full h-full lg:w-[65%] px-6'>
            <h2 className='h2'>{name}</h2>
            <p className='mb-2'>{description}</p>
            <div className='mb-2 max-w-[300px] h-[60px] flex items-center uppercase font-tertiary tracking-[1px] font-semibold text-sm'>
              <div className='flex justify-between w-[90%]'>

                <div className='flex items-center gap-x-2'>
                  <div className='text-accent'>
                    <BsArrowsFullscreen className='text-md'/>
                  </div>
                  <div className='flex gap-x-1'>
                    <div>Size:</div>
                    <div>{size}m2</div>
                  </div>
                </div>

                <div className='flex items-center gap-x-2'>
                  <div className='text-accent'>
                    <BsPeople className='text-md'/>
                  </div>
                  <div className='flex gap-x-1'>
                    <div>Max People:</div>
                    <div>{maxPerson}</div>
                  </div>
                </div>
              </div>
            </div>
            <img className='mb-8' src={image} alt='Hotel Room.'/>
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Room Facilities</h3>
              <p className='mb-12'>
              </p>
              <div className='grid grid-cols-3 w-full gap-6 mb-12'>
                {facilities.map((item, index)=>{
                  const{name, icon} = item
                  return(
                    <div className='flex items-center gap-x-3 flex-1' key={index}>
                      <div className='text-3xl text-accent'>{icon}</div>
                      <div className='text-base'>{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='w-full h-full lg:w-[35%]'>
            <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4'>
                <h3>Your Reservation</h3>
                <div className='h-[60px]'>
                  <CheckIn/>
                </div>
                <div className='h-[60px]'>
                  <CheckOut/>
                </div>
                <div className='h-[60px]'>
                  <AdultsDropdown/>
                </div>
                <div className='h-[60px]'>
                  <KidsDropdown/>
                </div>
                <button className='btn btn-lg btn-primary w-full py-4 '>
                  Book now for ${price}
                </button>
              </div>
            </div>
            <div>
              <h3 className='h3'>Hotel Rules</h3>
              <p className='mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className='flex flex-col gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent'/>
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent'/>
                  Check-out: 11:00 AM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent'/>
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomDetails