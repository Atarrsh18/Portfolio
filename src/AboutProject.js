import React from 'react';
import { motion } from 'framer-motion';

const AboutProject = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  const textVariants = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={textVariants}>CKD Detector</motion.h1>
      <motion.p variants={textVariants}>
      <div>
      
      <p>
        <h2 >What is creatinine?</h2>
        <p>Creatinine is a waste product that comes from the normal wear and tear on muscles of the body. Everyone has creatinine in their bloodstream.</p>

        <h2>What is a normal level of creatinine?</h2>
        <p>That depends on your age, race, gender, and body size.</p>

        <h2>Can my healthcare provider know if my kidneys are working properly by looking at how much creatinine is in my blood?</h2>
        <p>No. Looking at how much creatinine is in your blood is not the best way to check your kidney health. That’s because the level of creatinine in your blood is affected by your age, race, gender, and body size. (In other words, what’s considered “normal” depends on these factors.) The best way to know if your kidneys are working properly is by looking at your <b>glomerular filtration rate (GFR).</b></p>
      </p>
    </div>
      </motion.p>
    </motion.div>
  );
};

export default AboutProject;
