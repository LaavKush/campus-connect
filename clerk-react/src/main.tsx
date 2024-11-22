import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Import the layouts
import RootLayout from './layouts/root-layout';
import DashboardLayout from './layouts/root-layout';

// Import the components
import IndexPage from './routes/index';
import ContactPage from './contact';
import SignInPage from './sign-in';
import SignUpPage from './sign-up';
import DashboardPage from './dashboard';
import InvoicesPage from './dashboard.invoices';


// Clerk Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/sign-in/*', element: <SignInPage /> },
      { path: '/sign-up/*', element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: 'dashboard',
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/dashboard/invoices', element: <InvoicesPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
