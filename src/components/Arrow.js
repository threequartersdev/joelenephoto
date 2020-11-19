import React from 'react';
import './Arrow.scss';
import { motion } from 'framer-motion';

const Arrow = () => {
  return (
    <motion.div
      className='arrow'
      initial={{ y: 600 }}
      animate={{ y: 0, transition: { duration: 3 } }}
    >
      <svg
        width='60'
        height='60'
        viewBox='0 0 74 61'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          id='Arrow 1'
          d='M40.5355 1.46447C38.5829 -0.488155 35.4171 -0.488155 33.4645 1.46447L1.64466 33.2843C-0.307962 35.2369 -0.307962 38.4027 1.64466 40.3553C3.59728 42.308 6.76311 42.308 8.71573 40.3553L37 12.0711L65.2843 40.3553C67.2369 42.308 70.4027 42.308 72.3553 40.3553C74.308 38.4027 74.308 35.2369 72.3553 33.2843L40.5355 1.46447ZM42 61L42 5L32 5L32 61L42 61Z'
          fill='black'
        />
      </svg>
    </motion.div>
  );
};

export default Arrow;