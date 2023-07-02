import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/login";
import Register from "../components/Register";
import HomePage from "../pages/homePage";
import ProjectTracker from "../pages/ProjectTracker";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tracker" element={<ProjectTracker />} />
    </Routes>
  </Router>
);

export default AppRoutes;
