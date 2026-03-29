import React from 'react';

export const Card = ({ className = '', hoverEffect = false, children, ...props }) => {
  return (
    <div 
      className={`bg-surface rounded-lg px-6 py-5 shadow-ambient border-none ${hoverEffect ? 'hover:-translate-y-[2px] transition-all duration-200 ease-out cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
