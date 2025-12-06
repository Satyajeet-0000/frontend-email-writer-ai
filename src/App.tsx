import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import DownloadPage from './components/DownloadPage';
import ParticleBackground from './components/ParticleBackground';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
    <Router>
      <div className="min-h-screen gradient-bg relative overflow-hidden">
        <ParticleBackground />
        <Navigation />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <HomePage />
                </motion.div>
              } 
            />
            <Route 
              path="/download" 
              element={
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <DownloadPage />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </Router>
    </div>
  );
}

export default App;