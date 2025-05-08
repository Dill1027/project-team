import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Project Team</h1>
        </header>
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
