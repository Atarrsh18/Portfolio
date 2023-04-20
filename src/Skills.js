import React from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaGitAlt } from 'react-icons/fa';
import { DiJqueryLogo, DiBootstrap } from 'react-icons/di';
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'HTML5',
    icon: <FaHtml5 />,
    level: 95,
    color: '#E44D26',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />,
    level: 98,
    color: '#146EB4',
  },
 
  {
    name: 'JavaScript',
    icon: <FaJsSquare />,
    level: 95,
    color: 'green',
  },
  {
    name: 'C++',
    icon: <DiJqueryLogo />,
    level: 98,
    color: '#0868AC',
  },
  {
    name: 'Java',
    icon: <DiBootstrap />,
    level: 90,
    color: '#563D7C',
  },
  {
    name: 'React',
    icon: <FaReact />,
    level: 90,
    color: '#61DBFB',
  },
  {
    name: 'Git',
    icon: <FaGitAlt />,
    level: 94,
    color: '#F05032',
  },
];

const Skills = () => {
  return (
    <div className="skills-container" id='123'>
      <h2 className="section-title">Skills</h2>
      <div className="skills-wrapper">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="icon-container" style={{ background: skill.color }}>
              {skill.icon}
            </div>
            <div className="skill-details">
              <p className="skill-name">{skill.name}</p>
              <p className="skill-level">{skill.level}%</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
