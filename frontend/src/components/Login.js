import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import API from '../api/api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { username, password });
      login(res.data.token);
      setError('');
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: '30px auto', background: '#fff', padding: 18, borderRadius: 9, boxShadow: '0 0 4px #ccc' }}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)} required style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <button type="submit" style={{ width: '100%', padding: 10, background: '#33587A', color: '#fff', border: 'none', borderRadius: 4 }}>Login</button>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
    </form>
  );
}
export default Login;
