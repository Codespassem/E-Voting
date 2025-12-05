import React, { useState } from 'react';
import API from '../api/api';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', { username, email, password });
      setSuccess('Registration successful! Please login.');
      setError('');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setSuccess('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: '30px auto', background: '#fff', padding: 18, borderRadius: 9, boxShadow: '0 0 4px #ccc' }}>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)} required style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <button type="submit" style={{ width: '100%', padding: 10, background: '#33587A', color: '#fff', border: 'none', borderRadius: 4 }}>Register</button>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
    </form>
  );
}
export default Register;
