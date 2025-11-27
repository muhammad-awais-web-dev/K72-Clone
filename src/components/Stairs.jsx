import React, { useRef, forwardRef } from 'react';

const Stairs = forwardRef((props, ref) => {
  return (
    <div 
      className="stairsParent fixed top-0 left-0 w-screen h-screen z-100 hidden pointer-events-none" 
      ref={ref}
    >
      <div className="stairs w-full h-full flex">
        <div className="step bg-black w-1/5 h-full"></div>
        <div className="step bg-black w-1/5 h-full"></div>
        <div className="step bg-black w-1/5 h-full"></div>
        <div className="step bg-black w-1/5 h-full"></div>
        <div className="step bg-black w-1/5 h-full"></div>
      </div>
    </div>
  );
});

Stairs.displayName = 'Stairs';

export default Stairs;
