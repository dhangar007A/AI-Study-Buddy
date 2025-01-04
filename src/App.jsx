import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Banner from './components/banner';
import ProfilePage from './components/ProfilePage'; // Import the ProfilePage component

function App() {
  return (
    <Router>
      <Navbar />
      {/* Define routes here */}
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;