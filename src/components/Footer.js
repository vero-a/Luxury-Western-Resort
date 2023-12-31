import React from 'react';
import LogoWhite from '../assets/logowhite.png';

function Footer() {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex justify-between gap-4 items-center'>
        <a href='/'>
          <img className='w-[200px]' src={LogoWhite} alt=''/>
        </a>
        <p className='text-xs text-center'>Copyright &copy; 2023. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer