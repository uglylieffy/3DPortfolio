import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { WrapAroundEnding } from "three";

const ProjectCard = ({index, name, description, tags, image, 
  source_code_link,}) => {
    return (
      <motion.div
      // this initialize the prjkt cards container
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      {/* initilize card body  */}
      <Tilt
      options={{
          max: 45,
          scale: 1,
          speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* create individual cards within the container  */}
        <div className='relative w-full h-[230px]'>
          {/* insert image into each cards body and add features */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* hyperlink to source code or projext demo */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex 
              justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            {/* second one can be added for demo  */}
            {/* <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex 
              justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div> */}
          </div>
        </div>      

        {/* prjkt name and description */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        {/* project hashtags key point*/}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
      
    </motion.div>
    )
}

const Works = () => {
  return (
    <>
      {/* same title as about.jsx */}
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}> MY WORK IN DETAILS</p>
          <h2 className={styles.sectionHeadText}>Project.</h2>
      </motion.div>

      {/* caption */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        insert here intro about past project
      </motion.p>

      {/* project card where data is read in from index.js in ./constant */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {projects.map((projects, index) => (
          <ProjectCard key={`project-${index}`} 
          index={index} {...projects} />
          
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"")