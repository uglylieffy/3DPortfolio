import React from "react";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
            <p className={styles.techSubText}> PROFICIENT TECH BOARD</p>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {/* for technologys in index.js each one gets a icon ball  */}
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>

  );
};

export default SectionWrapper(Tech, "");