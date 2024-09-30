// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideHeader from './components/SideHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Resources from './pages/Resources';
import ClientLogin from './pages/ClientLogin';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <SideHeader />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/client-login" element={<ClientLogin />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
