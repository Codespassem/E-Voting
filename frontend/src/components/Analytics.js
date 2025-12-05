import React, { useState, useEffect } from 'react';
import API from '../api/api';

const Analytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await API.get('/analytics');
      setAnalytics(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching analytics:', error);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading analytics...</p>;
  if (!analytics) return <p>No data available</p>;

  return (
    <div style={{ maxWidth: 1200, margin: '30px auto', padding: 20 }}>
      <h2 style={{ color: '#33587A', marginBottom: 30 }}>📊 Voter Analytics Dashboard</h2>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 40 }}>
        <div style={{
          background: '#33587A', color: '#fff', padding: 30, borderRadius: 12, textAlign: 'center',
          boxShadow: '0 4px 12px rgba(51, 88, 122, 0.2)'
        }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>👥</div>
          <p style={{ margin: 0, fontSize: 24, fontWeight: 'bold' }}>{analytics.totalUsers}</p>
          <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Total Users</p>
        </div>

        <div style={{
          background: '#2a4a62', color: '#fff', padding: 30, borderRadius: 12, textAlign: 'center',
          boxShadow: '0 4px 12px rgba(51, 88, 122, 0.2)'
        }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>🗳️</div>
          <p style={{ margin: 0, fontSize: 24, fontWeight: 'bold' }}>{analytics.totalVotes}</p>
          <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Total Votes Cast</p>
        </div>

        <div style={{
          background: '#E8F1F7', color: '#33587A', padding: 30, borderRadius: 12, textAlign: 'center',
          boxShadow: '0 4px 12px rgba(51, 88, 122, 0.2)', border: '2px solid #33587A'
        }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>📈</div>
          <p style={{ margin: 0, fontSize: 24, fontWeight: 'bold' }}>{analytics.votingPercentage}%</p>
          <p style={{ margin: '10px 0 0 0' }}>Voting Percentage</p>
        </div>

        <div style={{
          background: '#E8F1F7', color: '#33587A', padding: 30, borderRadius: 12, textAlign: 'center',
          boxShadow: '0 4px 12px rgba(51, 88, 122, 0.2)', border: '2px solid #33587A'
        }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>🏆</div>
          <p style={{ margin: 0, fontSize: 18, fontWeight: 'bold' }}>{analytics.topCandidate?.name}</p>
          <p style={{ margin: '10px 0 0 0', fontSize: 14 }}>{analytics.topCandidate?.votes} votes</p>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <h3 style={{ color: '#33587A', marginBottom: 20 }}>Candidate Breakdown</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 40 }}>
        <thead>
          <tr style={{ backgroundColor: '#33587A', color: '#fff' }}>
            <th style={{ padding: 15, textAlign: 'left' }}>Candidate Name</th>
            <th style={{ padding: 15, textAlign: 'left' }}>Party</th>
            <th style={{ padding: 15, textAlign: 'center' }}>Votes</th>
            <th style={{ padding: 15, textAlign: 'center' }}>Percentage</th>
            <th style={{ padding: 15, textAlign: 'left' }}>Progress</th>
          </tr>
        </thead>
        <tbody>
          {analytics.candidates.map((candidate, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd', backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td style={{ padding: 15 }}>{candidate.name}</td>
              <td style={{ padding: 15 }}>{candidate.party}</td>
              <td style={{ padding: 15, textAlign: 'center', fontWeight: 'bold' }}>{candidate.votes}</td>
              <td style={{ padding: 15, textAlign: 'center' }}>{candidate.percentage}%</td>
              <td style={{ padding: 15 }}>
                <div style={{ background: '#E8F1F7', height: 20, borderRadius: 10, overflow: 'hidden' }}>
                  <div style={{
                    background: '#33587A',
                    height: '100%',
                    width: `${candidate.percentage}%`,
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Refresh Button */}
      <button
        onClick={fetchAnalytics}
        style={{
          padding: 12, background: '#33587A', color: '#fff', border: 'none',
          borderRadius: 6, cursor: 'pointer', fontSize: 16, fontWeight: 'bold'
        }}
      >
        🔄 Refresh Analytics
      </button>
    </div>
  );
};

export default Analytics;
