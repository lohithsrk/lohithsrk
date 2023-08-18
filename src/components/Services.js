import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const services = [
  {
    name: 'Web Development',
    description: 'Transforming concepts into responsive websites. User-centric design and smooth functionality for immersive online experiences.',
  },
  {
    name: 'Mobile Application Development',
    description: 'Shaping captivating mobile realms with React Native and Flutter, infusing ideas into pixels, and making screens come alive.',
  },
  {
    name: 'Technical Consulting',
    description: 'Strategic guidance and expert insights to optimize project planning, architecture, and technology selection.',
  },
  {
    name: 'Deployment and DevOps',
    description: 'Transforming code into live experiences with cloud-powered deployment and precision orchestration for seamless launches.',
  },
]

const Services = () => {
  return (
    <section className='section px-5' id='services'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row h-full'>
          <motion.div variants={fadeIn('right', 0.3)} initial={window.innerWidth > 768 ? 'hidden' : null}
            whileInView='show' viewport={{ once: true, amount: 0.3 }} className='flex-1 bg-bottom bg-no-repeat mix-blend-lighten md:mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6 md:text-left text-center'>What I Do.</h2>
            <motion.ul variants={fadeIn('right', 0.3)}
              initial={window.innerWidth > 768 ? 'hidden' : null}

              whileInView='show'
              viewport={{ once: true, amount: 0 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0 text-lg'>
              <motion.li className='flex items-start mb-2'><span>&rarr;</span>&nbsp;<span>Proficient Full Stack Developer specializing in web and mobile app experiences.</span></motion.li>
              <motion.li className='flex items-start mb-2'><span>&rarr;</span>&nbsp;<span>Frontend and backend expertise for user-friendly interfaces and dynamic features.</span></motion.li>
              <motion.li className='flex items-start mb-2'><span>&rarr;</span>&nbsp;<span>Secure API creation and integration.</span></motion.li>
              <motion.li className='flex items-start mb-2'><span>&rarr;</span>&nbsp;<span>Skilled in deployment orchestration for seamless launches.</span></motion.li>
              <motion.li className='flex items-start mb-2'><span>&rarr;</span>&nbsp;<span>Dedicated to crafting digital solutions with lasting impact.</span></motion.li>
            </motion.ul>
          </motion.div>
          <motion.div className='flex-1' variants={fadeIn('left', 0.5)} initial={window.innerWidth > 768 ? 'hidden' : null}
            whileInView='show' viewport={{ once: true, amount: 0.3 }} >
            <div>
              {services.map((service, index) => { // destructure service
                const { name, description } = service;
                return (
                  <div key={index} className='border-b border-white/20 h-[120px] flex items-center md:mb-auto mb-5'>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-3'>{name}</h4>
                      <p className='font-secondary leading-tight md:mb-auto mb-5 text-left md:text-left'>{description}</p>
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
