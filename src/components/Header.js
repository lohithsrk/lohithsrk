import React from 'react'
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='md:py-8 p-5'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Link to="home" className='text-gradient font-bold text-lg cursor-pointer' smooth={true}>
            lohith.pro
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