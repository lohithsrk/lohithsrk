import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

import { BallCanvas } from "./canvas";
import { technologies } from "../utils/data";


const About = () => {
  return (
    <section className='section px-5' id='about'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-center w-full md:h-screen'>
          <div className='flex gap-y-10 lg:gap-x-20 lg:gap-y-0 flex-col md:flex-row'>
            <motion.div variants={fadeIn('up', 0.3)} initial={window.innerWidth > 768 ? 'hidden' : null}
              whileInView='show' viewport={{ once: true, amount: 0 }} className='w-full' >
              <motion.h2 variants={fadeIn('up', 0.3)} initial={window.innerWidth > 768 ? 'hidden' : null}
                whileInView='show' viewport={{ once: true, amount: 0 }} className='h2 text-accent md:text-left text-center'> About me. </motion.h2>
              {/* <motion.h3 variants={fadeIn('up', 0.4)}               initial={window.innerWidth > 768 ? 'hidden' : null}
 whileInView='show' viewport={{ once: true, amount: 0 }} className='mb-4 h3 md:text-left text-center'>I'm a Full Stack Developer</motion.h3> */}
              <motion.p variants={fadeIn('up', 0.4)} initial={window.innerWidth > 768 ? 'hidden' : null}
                whileInView='show' viewport={{ once: true, amount: 0 }} className='mb-6 md:text-left text-center'>Proficient in Full Stack and Android development, my expertise spans MERN and MEAN stacks, along with JAVA and Kotlin. With three years of freelancing experience, I've come to believe in the power of coding to elegantly solve real-time challenges. Join me as I strive to craft innovative tech solutions and create impactful digital experiences.</motion.p>
              <motion.div variants={fadeIn('up', 0.6)} initial={window.innerWidth > 768 ? 'hidden' : null}
                whileInView='show' viewport={{ once: true, amount: 0 }} className='flex gap-x-8 items-center justify-center md:justify-start flex-col md:flex-row'>
                <Link to="contact" smooth={true}>
                  <button className='btn btn-lg' >Contact me</button>
                </Link>
                <a className='text-gradient md:mt-0 mt-5 btn-link cursor-pointer' href='https://drive.google.com/file/d/1QWYqXMcpd6XzAKG74GUGXT0y9VuuU7LF/view?usp=sharing' target='_blank' rel='noreferrer'>
                  My Resume
                </a>
              </motion.div>
            </motion.div>
            <div className='flex items-center flex-col md:mt-auto mt-10'>
              <motion.h2 variants={fadeIn('up', 0.3)} initial={window.innerWidth > 768 ? 'hidden' : null}
                whileInView='show' viewport={{ once: true, amount: 0 }} className='h2 text-accent'>WHAT I WORK IN</motion.h2>
              <div className='flex flex-row flex-wrap justify-center gap-5'>
                {technologies.map((technology, i) => (
                  <div className='w-20 h-20' key={technology.name}>
                    <BallCanvas icon={technology.icon} i={i} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
};

export default About;
