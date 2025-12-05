import React, { useState, useEffect } from 'react';
import API from '../api/api';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const res = await API.get('/results');
      setResults(res.data);
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: '30px auto', padding: 20 }}>
      <h2>Voting Results</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#33587A', color: '#fff' }}>
            <th style={{ padding: 10, textAlign: 'left' }}>Candidate</th>
            <th style={{ padding: 10, textAlign: 'left' }}>Party</th>
            <th style={{ padding: 10, textAlign: 'center' }}>Votes</th>
          </tr>
        </thead>
        <tbody>
          {results.map((candidate, index) => (
            <tr key={candidate._id} style={{ backgroundColor: index % 2 === 0 ? '#f0f6fb' : '#fff', borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: 10 }}>{candidate.name}</td>
              <td style={{ padding: 10 }}>{candidate.party}</td>
              <td style={{ padding: 10, textAlign: 'center', fontWeight: 'bold' }}>{candidate.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
