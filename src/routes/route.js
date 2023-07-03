import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/login';
import Register from '../components/Register';
import HomePage from '../pages/homePage';
import Quiz from '../pages/Quiz';
import MentorEval from '../pages/MentorEval';

const AppRoutes = () => (
  <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/take-test" element={<Quiz />} />
        <Route path="/eval" element={<MentorEval />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  </Router>
);

export default AppRoutes;