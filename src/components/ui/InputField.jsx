import React from 'react';

export const InputField = ({ label, className = '', containerClassName = '', type = "text", rightIcon, ...props }) => {
  return (
    <div className={`flex flex-col gap-[6px] w-full ${containerClassName}`}>
      {label && (
        <label className="uppercase font-semibold text-[10px] text-textMuted tracking-[0.05em]">
          {label}
        </label>
      )}
      <div className="relative flex items-center w-full">
        <input 
          type={type}
          className={`w-full bg-surfaceContainer border border-transparent rounded-md px-4 py-3 text-[14px] text-textPrimary font-normal placeholder:text-textMuted outline-none focus:border-[1.5px] focus:border-secondary transition-colors ${rightIcon ? 'pr-11' : ''} ${className}`}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer text-textMuted hover:text-textPrimary transition-colors z-10">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};
