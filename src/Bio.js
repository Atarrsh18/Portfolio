import React from 'react';
import { motion } from 'framer-motion';
import img1 from "./WhatsApp Image 2023-04-19 at 11.30.18 PM.jpeg"
import HomeStyle from "./Home.css";
const Bio = () => {
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

  const logoVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.75,
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
      <motion.h1 variants={textVariants}></motion.h1>
      <motion.div className="schooling" style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>
        
    {/* <motion.div variants={logoVariants} style={{ width: '4rem', height: '4rem', backgroundColor: 'gray', marginRight: '1rem' }} /> */}
    <img id='school' src={img1} alt="School Logo" />
        <motion.div variants={textVariants}>
          <h3>School</h3>
          <p><h1>Srinivasa Vidhyalaya Matriculation Higher Secondary School</h1></p>
          <p><h3>Class I-XII</h3></p>
        </motion.div>
      </motion.div>
      <motion.div className="college" style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>
        {/* <motion.div variants={logoVariants} style={{ width: '4rem', height: '4rem', backgroundColor: 'gray', marginRight: '1rem' }} /> */}
        <img id='clg' src="https://tse3.mm.bing.net/th?id=OIP.6yG57UwE9Iry7zq3JG8dEAHaHa&pid=Api&P=0" alt="College Logo" />
        <motion.div variants={textVariants}>
          <h3>College</h3>
          <p><h1>Sri Krishna College Of Engineering And Technology</h1></p>
          <p><h3>Bachelor of Engineering (ECE), 2021 - 2025</h3></p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Bio;
