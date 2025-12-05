import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ElectionPopup from './ElectionPopup'; 

const MainContent = () => {
  const { token } = useAuth();

  return (
    <div style={{ background: '#f9f9f9' }}>
      <ElectionPopup /> 
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #33587A 0%, #2a4a62 100%)',
        color: '#fff',
        padding: '100px 20px',
        textAlign: 'center',
        borderBottom: '5px solid #E8F1F7'
      }}>
        <h1 style={{ fontSize: 56, margin: 0, marginBottom: 20, fontWeight: 'bold' }}>
          🗳️ Welcome to Digital Democracy
        </h1>
        <p style={{ fontSize: 20, margin: 0, marginBottom: 30, fontWeight: 300 }}>
          The Future of College Elections is Here
        </p>
        {!token ? (
          <Link to="/register" style={{
            background: '#fff',
            color: '#33587A',
            padding: '14px 40px',
            fontSize: 16,
            borderRadius: 6,
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s'
          }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Start Voting Now →
          </Link>
        ) : (
          <Link to="/voting" style={{
            background: '#fff',
            color: '#33587A',
            padding: '14px 40px',
            fontSize: 16,
            borderRadius: 6,
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s'
          }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Cast Your Vote →
          </Link>
        )}
      </div>

      {/* Purpose Section */}
      <div style={{ maxWidth: 1200, margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30, marginBottom: 80 }}>
          
          <div style={{
            background: '#fff',
            padding: 40,
            borderRadius: 12,
            boxShadow: '0 4px 15px rgba(51, 88, 122, 0.1)',
            border: '3px solid #E8F1F7',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 48, marginBottom: 15 }}>📄</div>
            <h3 style={{ color: '#33587A', fontSize: 20, marginBottom: 15 }}>Eliminate Paper</h3>
            <p style={{ color: '#666', lineHeight: 1.7 }}>
              Say goodbye to paper ballots. Go fully digital and reduce paper waste significantly.
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: 40,
            borderRadius: 12,
            boxShadow: '0 4px 15px rgba(51, 88, 122, 0.1)',
            border: '3px solid #E8F1F7',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 48, marginBottom: 15 }}>⚡</div>
            <h3 style={{ color: '#33587A', fontSize: 20, marginBottom: 15 }}>Fast & Easy</h3>
            <p style={{ color: '#666', lineHeight: 1.7 }}>
              Vote in seconds from anywhere. No waiting in lines, anytime voting access.
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: 40,
            borderRadius: 12,
            boxShadow: '0 4px 15px rgba(51, 88, 122, 0.1)',
            border: '3px solid #E8F1F7',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 48, marginBottom: 15 }}>🔒</div>
            <h3 style={{ color: '#33587A', fontSize: 20, marginBottom: 15 }}>Secure & Transparent</h3>
            <p style={{ color: '#666', lineHeight: 1.7 }}>
              Military-grade encryption ensures your vote is secure and completely transparent.
            </p>
          </div>

        </div>

        {/* Key Features */}
        <h2 style={{ textAlign: 'center', fontSize: 40, color: '#33587A', marginBottom: 50, fontWeight: 'bold' }}>
          Why Choose Digital Voting?
        </h2>

        <div style={{ display: 'flex', gap: 40, marginBottom: 80, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <h3 style={{ color: '#33587A', fontSize: 28, marginBottom: 20 }}>🎯 Democratic Excellence</h3>
            <ul style={{ color: '#666', lineHeight: 2, fontSize: 16, paddingLeft: 0, listStyle: 'none' }}>
              <li>✅ One vote per student</li>
              <li>✅ Prevent duplicate voting</li>
              <li>✅ Real-time transparency</li>
              <li>✅ Instant result declaration</li>
              <li>✅ Complete audit trail</li>
            </ul>
          </div>
          <div style={{
            flex: 1, minWidth: 300, background: 'linear-gradient(135deg, #33587A 0%, #2a4a62 100%)',
            padding: 40, borderRadius: 12, color: '#fff', textAlign: 'center'
          }}>
            <div style={{ fontSize: 64, marginBottom: 15 }}>🏆</div>
            <p style={{ fontSize: 18, fontWeight: 'bold' }}>Fair & Inclusive Elections</p>
            <p style={{ fontSize: 14, marginTop: 10 }}>Giving every student a voice in the college community</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 40, marginBottom: 80, alignItems: 'center', flexWrap: 'wrap-reverse' }}>
          <div style={{
            flex: 1, minWidth: 300, background: '#E8F1F7',
            padding: 40, borderRadius: 12, textAlign: 'center', border: '2px solid #33587A'
          }}>
            <div style={{ fontSize: 64, marginBottom: 15 }}>🚀</div>
            <p style={{ fontSize: 18, fontWeight: 'bold', color: '#33587A' }}>Modern Technology</p>
            <p style={{ fontSize: 14, marginTop: 10, color: '#666' }}>Built with latest Full-Stack technologies</p>
          </div>
          <div style={{ flex: 1, minWidth: 300 }}>
            <h3 style={{ color: '#33587A', fontSize: 28, marginBottom: 20 }}>💻 Cutting-Edge Tech</h3>
            <ul style={{ color: '#666', lineHeight: 2, fontSize: 16, paddingLeft: 0, listStyle: 'none' }}>
              <li>✅ React.js Frontend</li>
              <li>✅ Node.js & Express Backend</li>
              <li>✅ MongoDB Database</li>
              <li>✅ JWT Security</li>
              <li>✅ Cloud Hosting</li>
            </ul>
          </div>
        </div>

        {/* Statistics */}
        <div style={{
          background: '#33587A', color: '#fff', padding: 60, borderRadius: 12, marginBottom: 80,
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 15 }}>100%</div>
            <p style={{ fontSize: 18 }}>Digital Voting</p>
            <p style={{ fontSize: 14, opacity: 0.9 }}>Completely Paperless</p>
          </div>
          <div>
            <div style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 15 }}>99.9%</div>
            <p style={{ fontSize: 18 }}>Uptime Guaranteed</p>
            <p style={{ fontSize: 14, opacity: 0.9 }}>Reliable Service</p>
          </div>
          <div>
            <div style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 15 }}>1 Vote</div>
            <p style={{ fontSize: 18 }}>Per Student</p>
            <p style={{ fontSize: 14, opacity: 0.9 }}>Fair & Equal</p>
          </div>
          <div>
            <div style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 15 }}>24/7</div>
            <p style={{ fontSize: 18 }}>Access Available</p>
            <p style={{ fontSize: 14, opacity: 0.9 }}>Vote Anytime</p>
          </div>
        </div>

        {/* How It Works */}
        <h2 style={{ textAlign: 'center', fontSize: 40, color: '#33587A', marginBottom: 50, fontWeight: 'bold' }}>
          Simple 4-Step Process
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 30,
          marginBottom: 80
        }}>
          <div style={{
            background: '#fff',
            padding: 40,
            borderRadius: 12,
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(51, 88, 122, 0.15)',
            border: '3px solid #E8F1F7'
          }}>
            <div style={{
              width: 70, height: 70, background: '#33587A', color: '#fff',
              borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 36, margin: '0 auto 20px', fontWeight: 'bold'
            }}>1</div>
            <h3 style={{ color: '#33587A', marginBottom: 15 }}>Register</h3>
            <p style={{ color: '#666' }}>Create your account with valid college credentials</p>
          </div>

          <div style={{
            background: '#fff',
            padding: 40,
            borderRadius: 12,
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(51, 88, 122, 0.15)',
            border: '3px solid #E8F1F7'
          }}>
            <div style={{
              width: 70, height: 70, background: '#33587A', color: '#fff',
              borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 36, margin: '0 auto 20px', fontWeight: 'bold'
            }}>2</div>
            <h3 style={{ color: '#33587A', marginBottom: 15 }}>Login Securely</h3>
            <p style={{ color: '#666' }}>Access with JWT token authentication</p>
          </div>

          <div style={{
            background: '#fff',
            padding: 40,
            borderRadius: 12,
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(51, 88, 122, 0.15)',
            border: '3px solid #E8F1F7'
          }}>
            <div style={{
              width: 70, height: 70, background: '#33587A', color: '#fff',
              borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 36, margin: '0 auto 20px', fontWeight: 'bold'
            }}>3</div>
            <h3 style={{ color: '#33587A', marginBottom: 15 }}>Select & Vote</h3>
            <p style={{ color: '#666' }}>Choose your preferred candidate easily</p>
          </div>

          <div style={{
            background: '#fff',
            padding: 40,
            borderRadius: 12,
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(51, 88, 122, 0.15)',
            border: '3px solid #E8F1F7'
          }}>
            <div style={{
              width: 70, height: 70, background: '#33587A', color: '#fff',
              borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 36, margin: '0 auto 20px', fontWeight: 'bold'
            }}>4</div>
            <h3 style={{ color: '#33587A', marginBottom: 15 }}>View Results</h3>
            <p style={{ color: '#666' }}>See instant real-time voting results</p>
          </div>
        </div>

        {/* Important Notice */}
        <div style={{
          background: '#E8F1F7',
          padding: 40,
          borderRadius: 12,
          borderLeft: '5px solid #33587A',
          marginBottom: 60
        }}>
          <h3 style={{ color: '#33587A', marginTop: 0 }}>📢 Important Notice</h3>
          <p style={{ color: '#666', lineHeight: 1.8, fontSize: 16, marginBottom: 15 }}>
            The site will not be accessible between <strong>00:00 hrs to 01:00 hrs on every Sunday</strong> for maintenance and security updates.
          </p>
          <p style={{ color: '#666', lineHeight: 1.8, fontSize: 16 }}>
            Please plan your voting accordingly. All other times, the platform is available 24/7 for your convenience.
          </p>
        </div>

      </div>

      {/* CTA Section */}
      <div style={{
        background: '#33587A',
        color: '#fff',
        padding: 60,
        textAlign: 'center',
        borderTop: '5px solid #E8F1F7'
      }}>
        <h2 style={{ fontSize: 40, marginBottom: 20 }}>Ready to Make Your Voice Heard?</h2>
        <p style={{ fontSize: 18, marginBottom: 30, opacity: 0.95 }}>
          Join thousands of students voting for a better college community. Your vote matters!
        </p>
        {!token ? (
          <Link to="/register" style={{
            background: '#fff',
            color: '#33587A',
            padding: '16px 45px',
            fontSize: 17,
            borderRadius: 6,
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s'
          }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Register & Vote Now 🗳️
          </Link>
        ) : (
          <Link to="/voting" style={{
            background: '#fff',
            color: '#33587A',
            padding: '16px 45px',
            fontSize: 17,
            borderRadius: 6,
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s'
          }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Go to Voting 🗳️
          </Link>
        )}
      </div>
    </div>
  );
};

export default MainContent;
