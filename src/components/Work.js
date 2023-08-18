import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Tilt from 'react-parallax-tilt'

import { github } from '../assets';
import { projects } from '../utils/data';

const Work = () => {
  return <div className='section px-5' id='work'>
    <div className="container mx-auto">

      <motion.div variants={fadeIn('up', 0.3)} initial={window.innerWidth > 768 ? 'hidden' : null}
        whileInView='show' viewport={{ once: true, amount: 0 }} >
        <motion.h2 variants={fadeIn('up', 0.3)} initial={window.innerWidth > 768 ? 'hidden' : null}
          whileInView='show' viewport={{ once: true, amount: 0 }} className='h2 text-accent text-center md:text-left'> MY PROJECTS </motion.h2>
        <motion.p variants={fadeIn('up', 0.4)} initial={window.innerWidth > 768 ? 'hidden' : null}
          whileInView='show' viewport={{ once: true, amount: 0 }} className='mb-6 text-left md:text-left'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</motion.p>
      </motion.div>
      <div className='mt-10 flex gap-7 overflow-x-scroll overflow-y-hidden scrollbar-hide'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  </div>;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link
}) => {
  return (
    <motion.div variants={fadeIn('up', index * 0.2)}>
      <motion.div
        // options={{
        //   max: 45,
        //   scale: 1,
        //   speed: 450,
        // }}
        className='bg-tertiary p-5 rounded-2xl w-[360px]  bg-white/10 backdrop-blur-md'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] font-bold ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};


export default Work;
