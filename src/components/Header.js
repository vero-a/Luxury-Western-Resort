import React, {useState, useEffect} from 'react';
import Logo from '../assets/ResortLogo.png';
import LogoWhite from '../assets/logowhite.png';
import {HiOutlineMenu} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

function Header() {
  const [header, setHeader] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setHeader(true): setHeader(false);
    });
  });

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={`${header ? 'bg-white py-0 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-300`}>
      <div className='container mx-auto flex  items-center gap-y-6 lg:flex-row justify-between lg:gap-y-0'>
        <a href='/'>
          {header? (
            <img className='w-[200px] my-[-1rem]' alt='' src={Logo}/>
          ):(
            <img className='w-[200px] my-[-1rem]' alt='' src={LogoWhite}/>
          )}
        </a>
        <nav className={`${header? 'text-primary':'text-white'} `}>
          <section className='flex lg:hidden'>
            <div
              className="space-y-2 cursor-pointer text-xl"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              {header? (
                <HiOutlineMenu color='black'/>
              ):(
                <HiOutlineMenu color='white'/>
              )}
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8 cursor-pointer hover:scale-130"
                onClick={() => setIsNavOpen(false)}
              >
                <AiOutlineClose color='black'/>
              </div>
              <ul className="flex flex-col gap-y-6 items-center text-black py-10 mt-8">
                <li>
                  <a href='/' className='hover:text-accent uppercase transition'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/#rooms' className='hover:text-accent uppercase transition'>
                     Accommodations
                  </a>
                </li>
                <li>
                  <a href='/Restaurant' className='hover:text-accent uppercase transition'>
                    Restaurant
                  </a>
                </li>
                <li>
                  <a href='/Spa' className='hover:text-accent uppercase transition'>
                    Spa
                  </a>
                </li>
                <li>
                  <a href='/' className='hover:text-accent uppercase transition'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <ul className='hidden lg:flex  font-tertiary tracking-[3px] text-xs items-center uppercase lg:gap-x-8'>
            <li>
              <a href='/' className='hover:text-accent transition'>
                Home
              </a>
            </li>
            <li>
              <a href='/#rooms' className='hover:text-accent transition'>
                Accommodations
              </a>
            </li>
            <li>
              <a href='/Restaurant' className='hover:text-accent transition'>
                Restaurant
              </a>
            </li>
            <li>
              <a href='/Spa' className='hover:text-accent transition'>
                Spa
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-accent transition'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: full;
            top: 0;
            right: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            opacity:.98;
          }
        `}</style>
      </div>
    </header>
  )
}

export default Header