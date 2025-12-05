import React, { useState, useEffect } from 'react';
import API from '../api/api';

const ElectionPopup = () => {
  const [upcomingElection, setUpcomingElection] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchUpcomingElection();
  }, []);

  const fetchUpcomingElection = async () => {
    try {
      const res = await API.get('/elections');
      const elections = res.data;

      // Find upcoming election
      const upcoming = elections.find(el => el.currentStatus === 'upcoming');
      if (upcoming) {
        setUpcomingElection(upcoming);
        setShowPopup(true);
      }
    } catch (error) {
      console.error('Error fetching elections:', error);
    }
  };

  if (!showPopup || !upcomingElection) return null;

  const startDate = new Date(upcomingElection.startDate);
  const endDate = new Date(upcomingElection.endDate);
  const daysUntilStart = Math.ceil((startDate - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <>
      {/* Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}>
        {/* Popup */}
        <div style={{
          background: '#fff',
          borderRadius: 16,
          padding: 40,
          maxWidth: 500,
          textAlign: 'center',
          boxShadow: '0 10px 50px rgba(51, 88, 122, 0.3)',
          animation: 'slideIn 0.3s ease-out'
        }}>
          {/* Close Button */}
          <button
            onClick={() => setShowPopup(false)}
            style={{
              position: 'absolute',
              top: 15,
              right: 15,
              background: 'none',
              border: 'none',
              fontSize: 28,
              cursor: 'pointer',
              color: '#999'
            }}
          >
            ✕
          </button>

          {/* Icon */}
          <div style={{ fontSize: 60, marginBottom: 20 }}>📅</div>

          {/* Title */}
          <h2 style={{ color: '#33587A', margin: '0 0 10px 0', fontSize: 28 }}>
            {upcomingElection.title}
          </h2>

          {/* Description */}
          {upcomingElection.description && (
            <p style={{ color: '#666', margin: '0 0 20px 0', lineHeight: 1.6 }}>
              {upcomingElection.description}
            </p>
          )}

          {/* Countdown */}
          <div style={{
            background: '#E8F1F7',
            padding: 20,
            borderRadius: 12,
            marginBottom: 20,
            border: '2px solid #33587A'
          }}>
            <p style={{ color: '#33587A', margin: 0, fontSize: 14, fontWeight: 'bold' }}>
              VOTING STARTS IN
            </p>
            <p style={{ color: '#33587A', margin: '10px 0 0 0', fontSize: 36, fontWeight: 'bold' }}>
              {daysUntilStart} {daysUntilStart === 1 ? 'Day' : 'Days'}
            </p>
          </div>

          {/* Schedule Details */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 15,
            marginBottom: 25,
            fontSize: 14
          }}>
            <div style={{ background: '#f9f9f9', padding: 15, borderRadius: 8 }}>
              <p style={{ margin: 0, color: '#666', fontSize: 12, fontWeight: 'bold' }}>
                START DATE & TIME
              </p>
              <p style={{ margin: '8px 0 0 0', color: '#33587A', fontWeight: 'bold' }}>
                {startDate.toLocaleString()}
              </p>
            </div>
            <div style={{ background: '#f9f9f9', padding: 15, borderRadius: 8 }}>
              <p style={{ margin: 0, color: '#666', fontSize: 12, fontWeight: 'bold' }}>
                END DATE & TIME
              </p>
              <p style={{ margin: '8px 0 0 0', color: '#33587A', fontWeight: 'bold' }}>
                {endDate.toLocaleString()}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <button
              onClick={() => setShowPopup(false)}
              style={{
                padding: 12,
                background: '#E8F1F7',
                color: '#33587A',
                border: '2px solid #33587A',
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: 14
              }}
            >
              Remind Later
            </button>
            <button
              onClick={() => {
                setShowPopup(false);
                window.location.href = '/schedule';
              }}
              style={{
                padding: 12,
                background: '#33587A',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: 14
              }}
            >
              View Schedule
            </button>
          </div>

          {/* Footer Message */}
          <p style={{
            marginTop: 20,
            color: '#999',
            fontSize: 12,
            borderTop: '1px solid #eee',
            paddingTop: 15
          }}>
            Make sure to register and be ready to vote when the election begins!
          </p>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default ElectionPopup;
