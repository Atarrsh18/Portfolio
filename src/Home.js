import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
// import Footer from './Footer';

const Home = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="home" id="home">
      <div className="home__text">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          Hi, I'm <span className="home__name">Varon Atarrsh U</span>.
        </motion.h1>
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 1.5, delay: 1 }}
        >
          Student At SKCET
          {/* A Frontend Developer 💻 */}
        </motion.h2>
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 1.5, delay: 2 }}
        >
          
        </motion.h2>
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 1.5, delay: 3 }}
        >
          {/* A Problem Solver  */}
          This is my PortFolio
        </motion.h2>
        <motion.button
          className="home__btn"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 1.5, delay: 4 }}
        >
          Hire Me
        </motion.button>
        {/* <Footer/> */}
      </div>
      <div className="home__img"></div>
      
    </div>
  );
};

export default Home;
