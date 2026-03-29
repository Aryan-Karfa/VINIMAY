import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SidebarNav } from './SidebarNav';
import { TopNav } from './TopNav';
import { MobileBottomNav } from './MobileBottomNav';
import { currentUser } from '../../data/mockData';

export const AppLayout = () => {
  const location = useLocation();
  const path = location.pathname;

  const isMarketplace = path.startsWith('/marketplace');
  const isAuth = path === '/';

  if (isAuth) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-background">
      {isMarketplace ? (
        <TopNav currentUser={currentUser} />
      ) : (
        <SidebarNav currentUser={currentUser} />
      )}
      
      <main className={`pb-[80px] md:pb-0 ${isMarketplace ? 'pt-0' : 'md:pl-[176px]'}`}>
        <Outlet />
      </main>

      <MobileBottomNav />
    </div>
  );
};
