import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/Login';

function App() {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Project Team</h1>
          </header>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<h2>Home Page</h2>} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
