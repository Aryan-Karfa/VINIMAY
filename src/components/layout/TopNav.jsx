import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bell } from 'lucide-react';

export const TopNav = ({ currentUser }) => {
  return (
    <header className="h-[56px] w-full bg-background flex items-center justify-between px-6 z-40 relative hidden md:flex">
      <div className="text-primary font-bold text-[18px]">VINIMAY</div>
      <nav className="flex items-center gap-8 h-full">
        <NavLink to="/dashboard" className={({ isActive }) => `h-full flex items-center text-[14px] transition-colors border-b-[2px] ${isActive ? 'text-secondary font-semibold border-secondary' : 'text-textSecondary font-medium border-transparent hover:text-primary'}`}>Dashboard</NavLink>
        <NavLink to="/marketplace" className={({ isActive }) => `h-full flex items-center text-[14px] transition-colors border-b-[2px] ${isActive ? 'text-secondary font-semibold border-secondary' : 'text-textSecondary font-medium border-transparent hover:text-primary'}`}>Marketplace</NavLink>
        <NavLink to="/upload" className={({ isActive }) => `h-full flex items-center text-[14px] transition-colors border-b-[2px] ${isActive ? 'text-secondary font-semibold border-secondary' : 'text-textSecondary font-medium border-transparent hover:text-primary'}`}>Upload</NavLink>
        <NavLink to="/wallet" className={({ isActive }) => `h-full flex items-center text-[14px] transition-colors border-b-[2px] ${isActive ? 'text-secondary font-semibold border-secondary' : 'text-textSecondary font-medium border-transparent hover:text-primary'}`}>Wallet</NavLink>
      </nav>
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer text-textSecondary hover:text-primary transition-colors">
          <Bell size={20} />
          <div className="absolute top-0 right-0 w-[6px] h-[6px] bg-tertiary rounded-full"></div>
        </div>
        {currentUser && (
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-[36px] h-[36px] rounded-full overflow-hidden bg-surfaceContainer flex items-center justify-center text-secondary font-bold text-[14px]">
              {currentUser.initials}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
