import React, { useState, useEffect } from 'react';
import API from '../api/api';

const CandidatesList = () => {
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState('');
  const [party, setParty] = useState('');

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const res = await API.get('/candidates');
      setCandidates(res.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddCandidate = async () => {
    try {
      await API.post('/candidates', { name, party });
      setName('');
      setParty('');
      fetchCandidates();
      alert('Candidate added!');
    } catch (error) {
      alert('Error adding candidate');
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: '30px auto', padding: 20 }}>
      <h2>Candidates Management</h2>
      
      <div style={{ marginBottom: 20, background: '#f0f6fb', padding: 15, borderRadius: 8 }}>
        <h3>Add New Candidate</h3>
        <input
          type="text"
          placeholder="Candidate Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }}
        />
        <input
          type="text"
          placeholder="Party Name"
          value={party}
          onChange={(e) => setParty(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }}
        />
        <button
          onClick={handleAddCandidate}
          style={{ padding: 10, background: '#33587A', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
        >
          Add Candidate
        </button>
      </div>

      <h3>Registered Candidates</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#33587A', color: '#fff' }}>
            <th style={{ padding: 10, textAlign: 'left' }}>Name</th>
            <th style={{ padding: 10, textAlign: 'left' }}>Party</th>
            <th style={{ padding: 10, textAlign: 'center' }}>Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate._id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: 10 }}>{candidate.name}</td>
              <td style={{ padding: 10 }}>{candidate.party}</td>
              <td style={{ padding: 10, textAlign: 'center' }}>{candidate.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidatesList;
