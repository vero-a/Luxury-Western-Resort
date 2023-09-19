import React from 'react';
import LogoWhite from '../assets/logowhite.png';

function Footer() {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex justify-between items-center'>
        <a href='/'>
          <img className='w-[200px]' src={LogoWhite} alt=''/>
        </a>
        <p className='text-sm'>Copyright &copy; 2023. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer