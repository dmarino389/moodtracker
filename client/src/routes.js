// src/routes.js
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Journal from './Pages/Journal';
import Login from './Pages/Login';
import Insights from './Pages/Insights';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/insights" element={<Insights />} />
    </Routes>
  );
}
