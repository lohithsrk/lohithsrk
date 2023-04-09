import React from 'react'
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center sm:px-20'>
          <Link to="home" className='text-gradient font-bold leading-[0.8] text-[25px] cursor-pointer' smooth={true}>
            LOHITH
          </Link>
          <Link to="contact" smooth={true}>
            <button className='btn btn-sm' >Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header