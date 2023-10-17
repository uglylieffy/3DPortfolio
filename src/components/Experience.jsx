import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    // this "VerticalTimelineElement" gives the baseborad of timeline functions
    <VerticalTimelineElement
    // the box surrounding the experience
      contentStyle={{
        background: "#392c4d",
        color: "#fff",
      }}
      // little arrow on side of the box 
      contentArrowStyle={{ borderRight: "10px solid  #FFFFFF" }}
      date={experience.date}
      // icons' background 
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            // size of actual pics 
            className='w-[70%] h-[70%] object-contain'
          />
        </div>
      }
    >
      <div>
      {/* title and company name in one container*/}
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 1 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* list of work experience in details */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      {/* same title as about.jsx */}
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}> WHAT HAVE I DONE SO FAR</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {/*  */}
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>

  )
}

export default SectionWrapper(Experience, "work");