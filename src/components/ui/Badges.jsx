import React from 'react';

export const ConditionBadge = ({ condition, className = '' }) => {
  const getColors = () => {
    switch(condition) {
      case 'Like New': return 'bg-secondary text-white';
      case 'Good': return 'bg-tertiary text-white';
      case 'Fair': return 'bg-textSecondary text-white';
      case 'Poor': return 'bg-danger text-white';
      default: return 'bg-textSecondary text-white';
    }
  }
  return (
    <span className={`absolute bottom-3 left-3 ${getColors()} font-semibold text-[10px] uppercase tracking-[0.05em] rounded-sm px-2 py-1 z-10 ${className}`}>
      {condition}
    </span>
  );
};

export const VMCChip = ({ children, className = '' }) => (
  <span className={`bg-tertiaryContainer border-[0.5px] border-tertiary rounded-full text-onTertiary font-semibold text-[13px] px-[10px] py-1 inline-flex items-center ${className}`}>
    {children}
  </span>
);

export const StatusChip = ({ children, className = '' }) => (
  <span className={`bg-secondary text-white font-semibold text-[10px] uppercase tracking-[0.05em] rounded-full px-3 py-1 inline-flex items-center justify-center ${className}`}>
    {children}
  </span>
);

export const CategoryChip = ({ selected, children, onClick, className = '' }) => {
  if (selected) {
    return (
      <button onClick={onClick} className={`bg-secondary border-[1.5px] border-transparent text-white font-medium text-[14px] px-5 py-2 rounded-full whitespace-nowrap transition-colors ${className}`}>
        {children}
      </button>
    );
  }
  return (
    <button onClick={onClick} className={`bg-surface border-[1.5px] border-[rgba(90,90,90,0.3)] text-textPrimary font-medium text-[14px] px-5 py-2 rounded-full whitespace-nowrap hover:bg-surfaceLow transition-colors ${className}`}>
      {children}
    </button>
  );
};
