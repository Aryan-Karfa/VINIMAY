import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Upload, Wallet, Store, CalendarClock, User } from 'lucide-react';
import { PrimaryButton } from '../ui/Buttons';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/upload', label: 'Upload', icon: Upload },
  { path: '/wallet', label: 'Wallet', icon: Wallet },
  { path: '/marketplace', label: 'Marketplace', icon: Store },
  { path: '/upload/schedule', label: 'Schedule', icon: CalendarClock },
  { path: '/profile', label: 'Profile', icon: User },
];

export const SidebarNav = ({ currentUser }) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[176px] bg-background flex-col hidden md:flex z-50">
      <div className="p-6">
        <h1 className="font-sans font-bold text-[18px] text-primary">VINIMAY</h1>
      </div>
      <nav className="flex-1 px-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-[15px] transition-colors ${
                  isActive
                    ? 'bg-surfaceContainer text-secondary font-semibold'
                    : 'text-textSecondary font-medium hover:bg-surfaceLow hover:text-primary'
                }`
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
      {currentUser && (
        <div className="p-4 flex flex-col gap-4">
          <div className="bg-surfaceContainer rounded-xl p-4 flex flex-col gap-1">
            <span className="uppercase font-semibold text-[10px] text-textMuted tracking-[0.05em]">Current Status</span>
            <div className="w-full">
              <span className="font-serif italic text-secondary text-[16px] font-bold block leading-tight">{currentUser.credits.toLocaleString('en-IN')} VMC</span>
              <span className="font-normal text-textSecondary text-[11px] block mt-1">Sustainability Level: {currentUser.level}</span>
            </div>
          </div>
          <PrimaryButton className="w-full !px-4">Recycle Now</PrimaryButton>
        </div>
      )}
    </aside>
  );
};
