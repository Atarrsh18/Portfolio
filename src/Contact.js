import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Style from './Style.css'

const Contact = () => {

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

  const addressContainerVariants = {
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
      <motion.h1>Contact Me</motion.h1>
      <motion.div className="address-container" variants={addressContainerVariants}>
        <div className="address">
          <h2>Name : Varon Atarrsh U</h2>
          <div className="contact-links">
        <a href="mailto:varonatarrsh@gmail.com">
          <FaEnvelope id='icon'/>
          Mail Me 
        </a>
        <br></br>
        <a href="https://www.linkedin.com/in/varon-atarrsh-1a50b4226">
          <FaLinkedin id='icon'/>
          LinkedIn
        </a>
      </div>
          <h3>Address:</h3>
          <p>18, Sankaran Layout</p>
          <p>Coimbatore, TN 642126</p>
          <p>India</p>
        </div>
        <div className="map">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.074039252164!2d76.97568216674486!3d11.01684501937182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85557f83532af%3A0x8e68a812d719aae5!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1650307544062!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
