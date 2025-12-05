import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { token, logout } = useAuth();

  return (
    <nav style={{ backgroundColor: '#33587A', padding: '10px 20px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: 20, color: '#fff', margin: 0, padding: 0, flexWrap: 'wrap', alignItems: 'center' }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>About Us</Link></li>
        <li><Link to="/register" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Registration</Link></li>
        
        {token ? (
          <>
            <li><Link to="/voting" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Vote</Link></li>
            <li><Link to="/results" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Results</Link></li>
            <li><Link to="/analytics" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Analytics</Link></li>
            <li><Link to="/schedule" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Schedule</Link></li>
            <li style={{ marginLeft: 'auto' }}>
              <button 
                onClick={logout} 
                style={{ 
                  background: '#fff', 
                  color: '#33587A', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderRadius: 4,
                  fontWeight: 'bold'
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
