import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import {EffectFade, Autoplay} from 'swiper/modules';
import Horses from '../assets/slider/horses.jpg';
import Forest from '../assets/slider/forest.jpg';
import Creek from '../assets/slider/creek.jpg';
import Lobby from '../assets/lobby.jpg';
import Pool from '../assets/pool.jpg';

const slides = [
  {
    title: 'Your Luxurious Adventure Awaits',
    bg: Horses,
    btnText: 'View Our Rooms & Suites',
  },
  {
    title: 'Your Luxurious Adventure Awaits',
    bg: Pool,
    btnText: 'View Our Rooms & Suites',
  },
  {
    title: 'Your Luxurious Adventure Awaits',
    bg: Forest,
    btnText: 'View Our Rooms & Suites',
  },
  {
    title: 'Your Luxurious Adventure Awaits',
    bg: Lobby,
    btnText: 'View Our Rooms & Suites',
  },
  {
    title: 'Your Luxurious Adventure Awaits',
    bg: Creek,
    btnText: 'View Our Rooms & Suites',
  },
]


function HeroSlider() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      className='heroSlider h-[600px] lg:h-[860px]'
    >
      {slides.map((slide, index) => {
        const {title, bg, btnText} = slide;
        return (
          <SwiperSlide
            className='h-full'
            key={index}
          >
            <div className='relative z-20 text-white text-center h-full flex flex-col items-center justify-center'>
              <div className='uppercase font-tertiary tracking-[6px] mb-5'>
                Relax And Enjoy
              </div>
              <h1 className='text-3xl font-primary uppercase tracking-[2px] max-w-[920px] lg:text-4xl leading-tight mb-6'>
                {title}
              </h1>
              <a href='/#rooms'>
                <button className='btn btn-lg btn-primary mx-auto mt-2 px-4 py-2'>
                  {btnText}
                </button>
              </a>
            </div>
            <div className='absolute top-0 w-full h-full'>
              <img
                className='object-cover h-full w-full'
                src={bg}
                alt='Luxury Western Resort Property Pictures.'/>
            </div>
            <div className='absolute top-0 w-full h-full bg-black/70 '>

            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider