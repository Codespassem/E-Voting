import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <div style={{ maxWidth: 600, margin: '40px auto', background: '#fff', padding: 20, borderRadius: 8 }}>
      <h2>Dashboard - Protected Page</h2>
      <button onClick={logout} style={{ padding: 10, fontWeight: 'bold', background: '#33587A', color: '#fff', borderRadius: 6, border: 'none' }}>Logout</button>
    </div>
  );
};

export default Dashboard;
