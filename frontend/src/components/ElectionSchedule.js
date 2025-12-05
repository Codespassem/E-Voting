import React, { useState, useEffect } from 'react';
import API from '../api/api';

const ElectionSchedule = () => {
  const [elections, setElections] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    fetchElections();
  }, []);

  const fetchElections = async () => {
    try {
      const res = await API.get('/elections');
      setElections(res.data);
    } catch (error) {
      console.error('Error fetching elections:', error);
    }
  };

  const handleCreateElection = async () => {
    try {
      await API.post('/elections', { title, description, startDate, endDate });
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
      fetchElections();
      alert('Election created and notifications sent!');
    } catch (error) {
      alert('Error creating election');
    }
  };

  const getElectionStatus = (startDate, endDate) => {
    const now = new Date();
    if (now < new Date(startDate)) return { status: 'Upcoming', color: '#FFA500' };
    if (now >= new Date(startDate) && now <= new Date(endDate)) return { status: 'Active', color: '#28a745' };
    return { status: 'Closed', color: '#dc3545' };
  };

  return (
    <div style={{ maxWidth: 1200, margin: '30px auto', padding: 20 }}>
      <h2 style={{ color: '#33587A', marginBottom: 30 }}>📅 Election Schedule & Timing</h2>

      {/* Create Election Form */}
      <div style={{
        background: '#E8F1F7', padding: 30, borderRadius: 12, marginBottom: 40,
        border: '2px solid #33587A'
      }}>
        <h3 style={{ color: '#33587A', marginTop: 0 }}>Create New Election</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 15, marginBottom: 20 }}>
          <input
            type="text"
            placeholder="Election Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: 10, borderRadius: 6, border: '1px solid #33587A', fontSize: 14 }}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ padding: 10, borderRadius: 6, border: '1px solid #33587A', fontSize: 14, minHeight: 50 }}
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 15, marginBottom: 20 }}>
          <div>
            <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold', color: '#33587A' }}>Start Date & Time</label>
            <input
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={{ padding: 10, borderRadius: 6, border: '1px solid #33587A', fontSize: 14, width: '100%' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold', color: '#33587A' }}>End Date & Time</label>
            <input
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              style={{ padding: 10, borderRadius: 6, border: '1px solid #33587A', fontSize: 14, width: '100%' }}
            />
          </div>
        </div>
        <button
          onClick={handleCreateElection}
          style={{
            padding: 12, background: '#33587A', color: '#fff', border: 'none',
            borderRadius: 6, cursor: 'pointer', fontSize: 16, fontWeight: 'bold', width: '100%'
          }}
        >
          Create Election
        </button>
      </div>

      {/* Elections List */}
      <h3 style={{ color: '#33587A', marginBottom: 20 }}>Scheduled Elections</h3>
      <div style={{ display: 'grid', gap: 20 }}>
        {elections.map((election) => {
          const { status, color } = getElectionStatus(election.startDate, election.endDate);
          return (
            <div key={election._id} style={{
              background: '#fff', padding: 25, borderRadius: 12,
              boxShadow: '0 4px 12px rgba(51, 88, 122, 0.1)',
              borderLeft: `5px solid ${color}`
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 15 }}>
                <div>
                  <h3 style={{ color: '#33587A', margin: 0, marginBottom: 10 }}>{election.title}</h3>
                  <p style={{ color: '#666', margin: 0, marginBottom: 10 }}>{election.description}</p>
                </div>
                <span style={{
                  background: color, color: '#fff', padding: '6px 15px',
                  borderRadius: 20, fontWeight: 'bold', fontSize: 12
                }}>
                  {status}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 15 }}>
                <div>
                  <p style={{ margin: 0, color: '#666', fontSize: 12 }}>START TIME</p>
                  <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#33587A' }}>
                    {new Date(election.startDate).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p style={{ margin: 0, color: '#666', fontSize: 12 }}>END TIME</p>
                  <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#33587A' }}>
                    {new Date(election.endDate).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p style={{ margin: 0, color: '#666', fontSize: 12 }}>DURATION</p>
                  <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#33587A' }}>
                    {Math.floor((new Date(election.endDate) - new Date(election.startDate)) / (1000 * 60))} minutes
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ElectionSchedule;
