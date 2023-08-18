import React from 'react'
import { IoLogoLinkedin, IoMdMail, IoLogoGithub } from 'react-icons/io';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import { ComputersCanvas, EarthCanvas } from "./canvas";


const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center px-5' id='home'>
      <div className='container mx-auto'>
        <div className='flex justify-center flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 '>
          <div className='flex-1 justify-start text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial={window.innerWidth > 768 ? 'hidden' : null}

              whileInView='show'
              viewport={{ once: true, amount: 0 }}
              className='font-bold leading-[0.8] text-[80px] lg:text-[110px]' >LOHITH</motion.h1 >
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial={window.innerWidth > 768 ? 'hidden' : null}
              viewport={{ once: true, amount: 0 }}

              whileInView='show'
              className='mb-6 text-[36px] font-secondary font-semibold uppercase leading-[1] text-white'>
              <span className='text-xl'>  I am a </span>
              < TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                ]}
                speed={50}
                className='text-accent text-xl'
                wrapper='span'
                repeat={Infinity} />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial={window.innerWidth > 768 ? 'hidden' : null}

              whileInView='show'
              viewport={{ once: true, amount: 0 }}
              className='mb-4 max-w-lg mx-auto lg:mx-0 text-center md:text-left'>
              Experienced Full Stack and Android developer, creating engaging solutions. Proficient in various technologies, dedicated to crafting innovative experiences that leave a lasting impact.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial={window.innerWidth > 768 ? 'hidden' : null}
              whileInView='show'
              viewport={{ once: true, amount: 0 }}
              className='flex max-w-max gap-x-6 items-center mb-6 md:mb-6 mx-auto lg:mx-0 md:flex-row flex-col'>
              <Link to="contact" smooth={true}>
                <button className='btn btn-lg mb-5 md:mb-0' >Contact me</button>
              </Link>

              <Link to="about" smooth={true} className='text-gradient btn-link cursor-pointer'>
                Know more about me
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial={window.innerWidth > 768 ? 'hidden' : null}
              whileInView='show'
              viewport={{ once: true, amount: 0.3 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/lohithsrk' target='_blank' className='cursor-pointer' rel='noreferrer'>
                <IoLogoGithub className='cursor-pointer md:w-6 md:h-6 w-8 h-8' />
              </a>
              <a href='https://www.linkedin.com/in/lohith2003' target='_blank' className='cursor-pointer' rel='noreferrer'>
                <IoLogoLinkedin className='cursor-pointer md:w-6 md:h-6 w-8 h-8' />
              </a>
              <a href='mailto:srklohith05@gmail.com' target='_blank' className='cursor-pointer' rel='noreferrer'>
                <IoMdMail className='cursor-pointer md:w-6 md:h-6 w-8 h-8' />
              </a>
            </motion.div>
          </div >
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial={window.innerWidth > 768 ? 'hidden' : null}
            whileInView='show'
            viewport={{ once: true, amount: 0 }}
            className='lg:flex flex-1 w-[500px] h-[500px] lg:max-w-[px]  md:visible hidden'>
            <EarthCanvas />
          </motion.div>
        </div >
      </div >
    </section >);
};

export default Banner;
