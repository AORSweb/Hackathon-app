import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/login';
import Register from '../components/Register';
import HomePage from '../pages/homePage';
import Claim from '../components/claims/Claims'


const AppRoutes = () => (
  <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/claim" element={<Claim />} />
      </Routes>
  </Router>
);

export default AppRoutes;