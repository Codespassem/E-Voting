import React, { useState, useEffect } from 'react';
import API from '../api/api';

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const res = await API.get('/candidates');
      setCandidates(res.data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  const handleVote = async (candidateId) => {
    try {
      const token = localStorage.getItem('jwtToken');
      await API.post('/vote', { candidateId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setVoted(true);
      alert('Vote cast successfully!');
    } catch (error) {
      alert(error.response?.data?.message || 'Voting failed');
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: '30px auto', padding: 20 }}>
      <h2>Cast Your Vote</h2>
      {voted && <p style={{ color: 'green', fontWeight: 'bold' }}>✅ You have voted!</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {candidates.map(candidate => (
          <div key={candidate._id} style={{
            flex: '1 1 200px', border: '1px solid #ddd', padding: 15,
            borderRadius: 8, textAlign: 'center', boxShadow: '0 0 5px #ccc'
          }}>
            <h3>{candidate.name}</h3>
            <p><strong>Party:</strong> {candidate.party}</p>
            <p><strong>Votes:</strong> {candidate.votes}</p>
            <button
              onClick={() => handleVote(candidate._id)}
              disabled={voted}
              style={{
                padding: 10, background: voted ? '#ccc' : '#33587A',
                color: '#fff', border: 'none', borderRadius: 4,
                cursor: voted ? 'not-allowed' : 'pointer'
              }}
            >
              {voted ? 'Already Voted' : 'Vote'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Candidates;
