import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Upload, Wallet, Store, User } from 'lucide-react';

export const MobileBottomNav = () => {
  const navItems = [
    { path: '/dashboard', label: 'Home', icon: Home },
    { path: '/upload', label: 'Upload', icon: Upload },
    { path: '/wallet', label: 'Wallet', icon: Wallet },
    { path: '/marketplace', label: 'Market', icon: Store },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 w-full z-50 flex items-center justify-around pb-[env(safe-area-inset-bottom)] h-[calc(64px+env(safe-area-inset-bottom))]"
      style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.6)'
      }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${
                isActive ? 'text-secondary' : 'text-textMuted'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={22} color={isActive ? '#3A684D' : '#9B9B9B'} />
                <span className={`text-[10px] ${isActive ? 'font-semibold text-secondary' : 'font-normal text-textMuted'}`}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};
