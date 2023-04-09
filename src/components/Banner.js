import React, { Suspense, useRef } from 'react'
import { OrbitControls, Preload, Stage, useGLTF } from "@react-three/drei";
import { IoLogoLinkedin, IoMdMail, IoLogoGithub } from 'react-icons/io';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import CanvasLoader from './Loader';
import { Canvas } from '@react-three/fiber';

const Banner = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/mac-draco.glb");
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex justify-center flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 justify-start text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0 }}
              className='font-bold leading-[0.8] text-[80px] lg:text-[110px]' >LOHITH</motion.h1 >
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              className='mb-6 text-[36px] font-secondary font-semibold uppercase leading-[1] text-white'>
              <span>  I am a </span>

              < TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity} />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0 text-base'>
              Experienced in building quality websites and applications using MERN stack. Self-taught web developer who is
              interested in developing and learning new skills and technologies. Skilled in problem solving and leading the
              team.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to="contact" smooth={true}>
                <button className='btn btn-lg' >Contact me</button>
              </Link>
              <a className='text-gradient btn-link cursor-pointer' href='https://drive.google.com/file/d/1QWYqXMcpd6XzAKG74GUGXT0y9VuuU7LF/view?usp=sharing' target='_blank' rel='noreferrer'>
                My Resume
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.3 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/lohithsrk' target='_blank' className='cursor-pointer' rel='noreferrer'>
                <IoLogoGithub />
              </a>
              <a href='https://www.linkedin.com/in/lohith2003' target='_blank' className='cursor-pointer' rel='noreferrer'>
                <IoLogoLinkedin />
              </a>
              <a href='mailto:srklohith05@gmail.com' target='_blank' className='cursor-pointer' rel='noreferrer'>
                <IoMdMail />
              </a>
            </motion.div>
          </div >
          <motion.div

            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0 }}
            className='hidden lg:flex flex-1 max-w-[300px] h-[400px] lg:max-w-[px]'>
            <Canvas
              frameloop='demand'
              dpr={[1, 2]}
              gl={{ preserveDrawingBuffer: true }}
            >
              <Suspense fallback={<CanvasLoader />}>
              <Stage environment="city" intensity={0.6}>
              <OrbitControls enableZoom={false} autoRotate />


                <group ref={group} dispose={null} >
                  <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                      material={materials.aluminium}
                      geometry={nodes["Cube008"].geometry}
                    />
                    <mesh
                      material={materials["matte.001"]}
                      geometry={nodes["Cube008_1"].geometry}
                    />
                    <mesh
                      material={materials["screen.001"]}
                      geometry={nodes["Cube008_2"].geometry}
                    />
                  </group>
                </group>
              </Stage>
                {/* <Preload all /> */}
              </Suspense>
            </Canvas>
          </motion.div>
        </div >
      </div >
    </section >);
};

export default Banner;
