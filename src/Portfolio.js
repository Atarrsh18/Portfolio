import React from 'react';
import { FaDownload } from 'react-icons/fa';

function Portfolio() {
  const handleDownload = () => {
    window.location.href =
      'WXQ5+58F, BK Pudur, Sugunapuram East, Kuniyamuthur, Tamil Nadu 641008';
  };

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <button onClick={handleDownload}>
        <FaDownload /> Download Portfolio
      </button>
    </div>
  );
}

export default Portfolio;
