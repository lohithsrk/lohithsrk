import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return <nav className=' fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='bg-black/20 p-1 backdrop-blur-2xl rounded-full mx-auto flex justify-center gap-5 items-center text-2xl a text-white/50 max-w-min'>
        <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
          <BiHomeAlt  className='cursor-pointer'/>
        </Link>
        <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
          <BiUser  className='cursor-pointer'/>
        </Link>
        {/* <Link to='services' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
          <BsClipboardData />
        </Link> */}
        <Link to='work' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
          <BsBriefcase className='cursor-pointer' />
        </Link>
        <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' >
          <BsChatSquareText className='cursor-pointer' />
        </Link>
      </div>
    </div>
  </nav >

};

export default Nav;
