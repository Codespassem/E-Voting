import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ background: '#f9f9f9', padding: '40px 0' }}>
      {/* Hero Section */}
      <div style={{ background: '#33587A', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 48, margin: 0, marginBottom: 20 }}>Digital Democracy</h1>
        <p style={{ fontSize: 18, margin: 0 }}>A Full-Stack College E-Voting Platform for Transparent & Secure Elections</p>
      </div>

      {/* About Section */}
      <div style={{ maxWidth: 1200, margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 36, color: '#33587A', marginBottom: 40 }}>About Our Platform</h2>
        
        <div style={{ display: 'flex', gap: 40, marginBottom: 60, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <h3 style={{ color: '#33587A', fontSize: 24 }}>What is E-Voting?</h3>
            <p style={{ lineHeight: 1.8, fontSize: 16, color: '#333' }}>
              E-Voting is a secure, digital method of conducting elections that eliminates traditional paper-based voting challenges. 
              Our platform provides a modern, transparent, and tamper-proof solution for college elections and student council selections.
            </p>
          </div>
          <div style={{
            flex: 1, minWidth: 300, background: '#E8F1F7', padding: 30, borderRadius: 12, textAlign: 'center',
            boxShadow: '0 4px 15px rgba(51, 88, 122, 0.1)'
          }}>
            <div style={{ fontSize: 48, marginBottom: 15 }}>🗳️</div>
            <p style={{ fontSize: 14, color: '#33587A', fontWeight: 'bold' }}>Fast, Secure & Transparent Voting</p>
          </div>
        </div>

        {/* Features Section */}
        <h2 style={{ textAlign: 'center', fontSize: 32, color: '#33587A', marginBottom: 40 }}>Key Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 25, marginBottom: 60 }}>
          
          <div style={{ background: '#fff', padding: 30, borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '2px solid #E8F1F7' }}>
            <div style={{ fontSize: 40, marginBottom: 15, textAlign: 'center' }}>🔐</div>
            <h3 style={{ color: '#33587A', textAlign: 'center' }}>Secure Authentication</h3>
            <p style={{ color: '#666', lineHeight: 1.7 }}>
              JWT-based authentication ensures only authorized users can vote. Each voter is verified through a secure login system.
            </p>
          </div>

          <div style={{ background: '#fff', padding: 30, borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '2px solid #E8F1F7' }}>
            <div style={{ fontSize: 40, marginBottom: 15, textAlign: 'center' }}>☁️</div>
            <h3 style={{ color: '#33587A', textAlign: 'center' }}>Cloud Database</h3>
            <p style={{ color: '#666', lineHeight: 1.7 }}>
              MongoDB Atlas ensures reliable data storage with 99.95% uptime. All votes are encrypted and securely stored.
            </p>
          </div>

          <div style={{ background: '#fff', padding: 30, borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '2px solid #E8F1F7' }}>
            <div style={{ fontSize: 40, marginBottom: 15, textAlign: 'center' }}>⚡</div>
            <h3 style={{ color: '#33587A', textAlign: 'center' }}>Real-Time Results</h3>
            <p style={{ color: '#666', lineHeight: 1.7 }}>
              Instant vote tallying and results display. Live voting statistics updated in real-time for complete transparency.
            </p>
          </div>

          <div style={{ background: '#fff', padding: 30, borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '2px solid #E8F1F7' }}>
            <div style={{ fontSize: 40, marginBottom: 15, textAlign: 'center' }}>🎯</div>
            <h3 style={{ color: '#33587A', textAlign: 'center' }}>One Vote per User</h3>
            <p style={{ color: '#666', lineHeight: 1.7 }}>
              Unique voting mechanism prevents duplicate votes. System tracks and blocks multiple voting attempts automatically.
            </p>
          </div>

          <div style={{ background: '#fff', padding: 30, borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '2px solid #E8F1F7' }}>
            <div style={{ fontSize: 40, marginBottom: 15, textAlign: 'center' }}>📊</div>
            <h3 style={{ color: '#33587A', textAlign: 'center' }}>Detailed Analytics</h3>
            <p style={{ color: '#666', lineHeight: 1.7 }}>
              Comprehensive voting statistics and detailed results breakdown. Export reports for further analysis and documentation.
            </p>
          </div>

          <div style={{ background: '#fff', padding: 30, borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '2px solid #E8F1F7' }}>
            <div style={{ fontSize: 40, marginBottom: 15, textAlign: 'center' }}>📱</div>
            <h3 style={{ color: '#33587A', textAlign: 'center' }}>Responsive Design</h3>
            <p style={{ color: '#666', lineHeight: 1.7 }}>
              Access from any device - laptop, tablet, or mobile. Optimized interface for seamless voting experience everywhere.
            </p>
          </div>

        </div>

        {/* Technology Stack */}
        <h2 style={{ textAlign: 'center', fontSize: 32, color: '#33587A', marginBottom: 40 }}>Technology Stack</h2>
        <div style={{
          background: '#E8F1F7', padding: 40, borderRadius: 12, marginBottom: 60,
          border: '3px solid #33587A'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>⚛️</div>
              <h4 style={{ color: '#33587A' }}>React.js</h4>
              <p style={{ color: '#666', fontSize: 14 }}>Modern frontend framework for interactive UI</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>🟢</div>
              <h4 style={{ color: '#33587A' }}>Node.js & Express</h4>
              <p style={{ color: '#666', fontSize: 14 }}>Robust backend server and API endpoints</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>🍃</div>
              <h4 style={{ color: '#33587A' }}>MongoDB</h4>
              <p style={{ color: '#666', fontSize: 14 }}>NoSQL database for flexible data storage</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>🔑</div>
              <h4 style={{ color: '#33587A' }}>JWT Authentication</h4>
              <p style={{ color: '#666', fontSize: 14 }}>Secure token-based user verification</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <h2 style={{ textAlign: 'center', fontSize: 32, color: '#33587A', marginBottom: 40 }}>Why E-Voting?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 25, marginBottom: 60 }}>
          <div style={{ padding: 25, background: '#fff', borderLeft: '5px solid #33587A', borderRadius: 8 }}>
            <h4 style={{ color: '#33587A' }}>✅ 100% Transparent</h4>
            <p style={{ color: '#666', lineHeight: 1.7 }}>Every vote is recorded and auditable. Complete transparency in the voting process.</p>
          </div>
          <div style={{ padding: 25, background: '#fff', borderLeft: '5px solid #33587A', borderRadius: 8 }}>
            <h4 style={{ color: '#33587A' }}>✅ Highly Secure</h4>
            <p style={{ color: '#666', lineHeight: 1.7 }}>Military-grade encryption and authentication protocols protect voter data.</p>
          </div>
          <div style={{ padding: 25, background: '#fff', borderLeft: '5px solid #33587A', borderRadius: 8 }}>
            <h4 style={{ color: '#33587A' }}>✅ Time Efficient</h4>
            <p style={{ color: '#666', lineHeight: 1.7 }}>Eliminates queues and waiting times. Vote instantly from anywhere, anytime.</p>
          </div>
          <div style={{ padding: 25, background: '#fff', borderLeft: '5px solid #33587A', borderRadius: 8 }}>
            <h4 style={{ color: '#33587A' }}>✅ Cost Effective</h4>
            <p style={{ color: '#666', lineHeight: 1.7 }}>Reduces operational costs compared to traditional paper-based elections.</p>
          </div>
          <div style={{ padding: 25, background: '#fff', borderLeft: '5px solid #33587A', borderRadius: 8 }}>
            <h4 style={{ color: '#33587A' }}>✅ Instant Results</h4>
            <p style={{ color: '#666', lineHeight: 1.7 }}>Real-time vote counting eliminates manual tallying and human error.</p>
          </div>
          <div style={{ padding: 25, background: '#fff', borderLeft: '5px solid #33587A', borderRadius: 8 }}>
            <h4 style={{ color: '#33587A' }}>✅ Environmental Friendly</h4>
            <p style={{ color: '#666', lineHeight: 1.7 }}>Paperless voting reduces environmental impact significantly.</p>
          </div>
        </div>

        {/* Process Section */}
        <h2 style={{ textAlign: 'center', fontSize: 32, color: '#33587A', marginBottom: 40 }}>How It Works</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20, marginBottom: 60 }}>
          <div style={{ textAlign: 'center', flex: '1 1 150px', minWidth: 150 }}>
            <div style={{
              width: 60, height: 60, background: '#33587A', color: '#fff', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 15px'
            }}>1</div>
            <h4 style={{ color: '#33587A' }}>Register</h4>
            <p style={{ color: '#666', fontSize: 14 }}>Create your account with valid credentials</p>
          </div>
          <div style={{ fontSize: 30, color: '#33587A' }}>→</div>
          <div style={{ textAlign: 'center', flex: '1 1 150px', minWidth: 150 }}>
            <div style={{
              width: 60, height: 60, background: '#33587A', color: '#fff', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 15px'
            }}>2</div>
            <h4 style={{ color: '#33587A' }}>Login</h4>
            <p style={{ color: '#666', fontSize: 14 }}>Secure access with JWT authentication</p>
          </div>
          <div style={{ fontSize: 30, color: '#33587A' }}>→</div>
          <div style={{ textAlign: 'center', flex: '1 1 150px', minWidth: 150 }}>
            <div style={{
              width: 60, height: 60, background: '#33587A', color: '#fff', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 15px'
            }}>3</div>
            <h4 style={{ color: '#33587A' }}>Vote</h4>
            <p style={{ color: '#666', fontSize: 14 }}>Select your preferred candidate</p>
          </div>
          <div style={{ fontSize: 30, color: '#33587A' }}>→</div>
          <div style={{ textAlign: 'center', flex: '1 1 150px', minWidth: 150 }}>
            <div style={{
              width: 60, height: 60, background: '#33587A', color: '#fff', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 15px'
            }}>4</div>
            <h4 style={{ color: '#33587A' }}>Results</h4>
            <p style={{ color: '#666', fontSize: 14 }}>View real-time voting tallies instantly</p>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{
          background: '#33587A', color: '#fff', padding: 50, borderRadius: 12, marginBottom: 60,
          textAlign: 'center', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 30
        }}>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 10 }}>100%</div>
            <p>Secure & Encrypted</p>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 10 }}>1 Vote</div>
            <p>Per User Only</p>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 10 }}>Real-Time</div>
            <p>Results Display</p>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 10 }}>24/7</div>
            <p>Available Access</p>
          </div>
        </div>

      </div>

      {/* Footer Message */}
      <div style={{ background: '#E8F1F7', padding: 40, textAlign: 'center', borderTop: '3px solid #33587A' }}>
        <h3 style={{ color: '#33587A', marginBottom: 15 }}>Ready to Vote?</h3>
        <p style={{ color: '#666', fontSize: 16, lineHeight: 1.8 }}>
          Join thousands of students in shaping the future of our college through secure, transparent, and democratic voting.
          <br />
          <strong>Your Vote. Your Voice. Your Future.</strong>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
