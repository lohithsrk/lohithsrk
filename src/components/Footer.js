import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io';

const Footer = () => {
    return (
        <div className='bg-tertiary p-5 pb-0 w-full  bg-white/10 backdrop-blur-md flex items-center justify-center flex-col'>
            <div className='container flex  items-center justify-center pb-0 flex-col'>
                <div
                    className='container flex justify-between items-center flex-col md:flex-row'
                >  <Link to="home" className='text-gradient font-bold text-lg cursor-pointer ' smooth={true}>
                        lohith.pro
                    </Link>
                    <div
                        className='flex text-[20px]  items-center md:flex-row flex-col-reverse '>
                        <div className='flex gap-x-6 mr-5'>
                            <a href='https://github.com/lohithsrk' target='_blank' className='cursor-pointer' rel='noreferrer'>
                                <IoLogoGithub className='cursor-pointer md:w-4 md:h-4 w-4 h-4' />
                            </a>
                            <a href='https://www.linkedin.com/in/lohith2003' target='_blank' className='cursor-pointer' rel='noreferrer'>
                                <IoLogoLinkedin className='cursor-pointer md:w-4 md:h-4 w-4 h-4' />
                            </a>
                            <a href='mailto:srklohith05@gmail.com' target='_blank' className='cursor-pointer' rel='noreferrer'>
                                <IoMdMail className='cursor-pointer md:w-4 md:h-4 w-4 h-4' />
                            </a>
                        </div><span className='hidden md:block'>|</span>
                        <div className='flex gap-x-3 my-2 md:my-0'>
                            <a href='#home' smooth={true} spy={true} offset={-200} className='cursor-pointer font-primary !p-0 hover:footer-text-gradient transition-all text-xs  hover:!text-xs flex items-center justify-center' >
                                Home      </a>
                            <a href='#about' smooth={true} spy={true} className='cursor-pointer font-primary !p-0 hover:footer-text-gradient text-xs hover:!text-xs transition-all  flex items-center justify-center' >
                                About      </a>
                            <a href='#services' smooth={true} spy={true} className='cursor-pointer font-primary !p-0 hover:footer-text-gradient text-xs hover:!text-xs transition-all  flex items-center justify-center' >
                                Services      </a>
                            <a href='#work' smooth={true} spy={true} className='cursor-pointer font-primary !p-0 hover:footer-text-gradient text-xs hover:!text-xs transition-all  flex items-center justify-center' >
                                Works      </a>
                            <a href='#contact' smooth={true} spy={true} className=' cursor-pointer font-primary !p-0 hover:footer-text-gradient text-xs hover:!text-xs transition-all  flex items-center justify-center' >
                                Contact      </a>
                        </div>
                    </div>
                </div>
                <p className='text-white/50 text-sm mb-2 mt-3'>Copyright © Lohith.pro. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer