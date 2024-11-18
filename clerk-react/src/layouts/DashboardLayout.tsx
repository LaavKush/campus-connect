import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: '#343a40', color: 'white', padding: '1rem' }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a></li>
            <li><a href="/dashboard/invoices" style={{ color: 'white', textDecoration: 'none' }}>Invoices</a></li>
            <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Dashboard Content */}
      <div style={{ flex: 1, padding: '2rem', backgroundColor: '#f1f3f5' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
