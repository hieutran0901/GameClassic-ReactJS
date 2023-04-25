import { Routes, Route, Navigate } from 'react-router-dom';

import React from 'react';
import Classic from '../pages/Classic';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/classic" />} />
      <Route path="/classic" element={<Classic />} />
    </Routes>
  );
};

export default Routers;
