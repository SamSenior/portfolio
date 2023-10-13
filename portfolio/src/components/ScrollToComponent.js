import React from 'react';

const ScrollToComponent = ({ id, children }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '80px' }}>
      {children}
    </div>
  );
};

export default ScrollToComponent;
