import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';

import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import UploadPage from './pages/UploadPage';
import EstimatePage from './pages/EstimatePage';
import SchedulePage from './pages/SchedulePage';
import MarketplacePage from './pages/MarketplacePage';
import ProductDetailPage from './pages/ProductDetailPage';
import WalletPage from './pages/WalletPage';
import ProfilePage from './pages/ProfilePage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <AuthPage /> },
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/upload', element: <UploadPage /> },
      { path: '/upload/estimate', element: <EstimatePage /> },
      { path: '/upload/schedule', element: <SchedulePage /> },
      { path: '/marketplace', element: <MarketplacePage /> },
      { path: '/marketplace/:id', element: <ProductDetailPage /> },
      { path: '/wallet', element: <WalletPage /> },
      { path: '/profile', element: <ProfilePage /> },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
