import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const services = [
  {
    name: 'Full stack development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est explicabo corrupti consequatur necessitatibus molestiae unde',
    link: 'Learn more'
  },
  {
    name: 'Full stack development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est explicabo corrupti consequatur necessitatibus molestiae unde',
    link: 'Learn more'
  },
  {
    name: 'Full stack development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est explicabo corrupti consequatur necessitatibus molestiae unde',
    link: 'Learn more'
  },
  {
    name: 'Full stack development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est explicabo corrupti consequatur necessitatibus molestiae unde',
    link: 'Learn more'
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.3 }} className='flex-1 lg:bg-services bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a full stack developer
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          <motion.div className='flex-1' variants={fadeIn('left', 0.5)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.3 }} >
            <div>
              {services.map((service, index) => { // destructure service
                const { name, description, link } = service;
                return (
                  <div key={index} className='border-b border-white/20 h-[146px] mb-[38px] flex '>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-1 flex-col items-end '>
                      <Link className='w-9 h-9 btn mb-[42px] items-center justify-center flex'>
                        <BsArrowUpRight />
                      </Link>
                      <Link className='text-sm text-gradient'>
                        {link}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
