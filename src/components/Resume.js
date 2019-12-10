import React from 'react';

import pdf from './Joshua_Russell_Resume.pdf';

const Resume = () => {
  window.location.href = pdf;
  return (
    <div>
      <p>Loading, one second please.</p>
    </div>
  )
};

export default Resume;
