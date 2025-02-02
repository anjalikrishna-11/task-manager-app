// U35346496
// src/FancyText.js
import React from 'react';
import './FancyText.css';

const FancyText = ({ title, text }) => {
  return (
    <div className={title ? 'title' : 'regular'}>
      {text}
    </div>
  );
};

export default FancyText;
