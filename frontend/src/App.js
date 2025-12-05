import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Candidates from './components/Candidates';
import Results from './components/Results';
import ProtectedRoute from './components/ProtectedRoute';
import AboutUs from './components/AboutUs';
import Analytics from './components/Analytics';
import ElectionSchedule from './components/ElectionSchedule';




function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/voting" element={<Candidates />} />
            <Route path="/results" element={<Results />} />
            <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/voting" element={<Candidates />} />
          <Route path="/results" element={<Results />} />
         <Route path="/analytics" element={<Analytics />} />
         <Route path="/schedule" element={<ElectionSchedule />} />
          </Route>
          
          <Route path="*" element={<MainContent />} />
          
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
