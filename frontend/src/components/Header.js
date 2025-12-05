import React from 'react';
import logo from '../assets/evoting_logo.png';   // Place your logos in assets folder
import cdslLogo from '../assets/cdsl_logo.png';

const Header = () => {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '10px 20px',
      borderBottom: '1px solid #ccc',
      backgroundColor: '#fff'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={logo} alt="E Voting Logo" style={{ height: 40 }} />
        <span style={{ fontWeight: 'bold', fontSize: 24 }}>E Voting</span>
      </div>

      <div>
        {/* Accessibility options */}
        
      </div>

      <img src={cdslLogo} alt="CDSL Logo" style={{ height: 40 }} />
    </div>
  );
};

export default Header;
