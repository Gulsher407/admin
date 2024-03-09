import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import ServicesForm from './Components/ServicesForm';
import EditService from './Components/EditService';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <Router>
      
        <Navbar />
        <Routes>
        <Route path="/" element={<Dashboard />} />

          <Route path="/services" element={<Services />} />
          <Route path="/addServices" element={<ServicesForm />} />
          <Route path="/edit/:id" element={<EditService />} />
        </Routes>
      
    </Router>
  );
}

export default App;
