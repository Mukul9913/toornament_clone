import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import PlayersOrganizers from '../components/sections/PlayersOrganizers';
import Features from '../components/sections/Feature';
import Organizers from '../pages/Organizers';
import Play from '../pages/Play';
import Home from '../pages/Home/Index';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/organizers" element={<Organizers />} />
      <Route path="/play" element={<Play />} />
      <Route path="*" element={<h1 className="p-6 text-center">404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;