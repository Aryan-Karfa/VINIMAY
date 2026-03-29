import React from 'react';

export const PrimaryButton = ({ className = '', children, ...props }) => {
  return (
    <button 
      className={`bg-gradient-to-br from-[#3A684D] to-[#2E5C41] text-white font-semibold text-[14px] tracking-[0.02em] rounded-full px-8 py-[14px] shadow-ambient hover:brightness-[1.08] hover:scale-[1.01] active:scale-[0.99] transition-all duration-150 ease-out border-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ className = '', children, ...props }) => {
  return (
    <button 
      className={`bg-primary text-white font-semibold text-[14px] rounded-full px-8 py-[14px] hover:bg-[#333333] hover:scale-[1.01] transition-all duration-200 ease-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const GhostButton = ({ className = '', children, ...props }) => {
  return (
    <button 
      className={`bg-transparent border-[1.5px] border-[rgba(90,90,90,0.40)] text-textPrimary font-semibold text-[14px] rounded-full px-[30px] py-[13px] hover:bg-surfaceLow transition-all duration-200 ease-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
