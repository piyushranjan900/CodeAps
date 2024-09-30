import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SideHeader from './components/SideHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
<<<<<<< HEAD
import Newsroom from './pages/Newsroom';
import AffiliateProgram from './pages/AffiliateProgram'; 
import KnowledgeBaseHelp from './pages/KnowledgeBaseHelp'; 
import Support from './pages/Support';  

import { HoverProvider } from './context/HoverContext'; 
=======
import Resources from './pages/Resources';

import { HoverProvider } from './context/HoverContext'; // Import the HoverProvider for global hover state
>>>>>>> 94e03ece0fb8dd551296e0dd0da3d2e51518a523
import './App.css';

const App: React.FC = () => {
  const location = useLocation();

  // Set document title based on the route
  useEffect(() => {
    const pageTitles: { [key: string]: string } = {
      '/': 'AspenCask - Home',
      '/about': 'AspenCask - About',
      '/services': 'AspenCask - Services',
      '/portfolio': 'AspenCask - Portfolio',
      '/blog': 'AspenCask - Blog',
      '/contact': 'AspenCask - Contact',
      '/careers': 'AspenCask - Careers',
<<<<<<< HEAD
      '/newsroom': 'AspenCask - Newsroom',
      '/affiliateProgram': 'AspenCask - AffiliateProgram', 
      '/KnowledgeBaseHelp': 'AspenCask - KnowledgeBaseHelp',
      '/Support': 'AspenCask - Support',
    };

=======
      '/resources': 'AspenCask - Resources',
    };
    
>>>>>>> 94e03ece0fb8dd551296e0dd0da3d2e51518a523
    document.title = pageTitles[location.pathname] || 'AspenCask';
  }, [location]);

  return (
    <HoverProvider>
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
<<<<<<< HEAD
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/affiliateProgram" element={<AffiliateProgram />} />  
            <Route path="/KnowledgeBaseHelp" element={<KnowledgeBaseHelp />} />  
            <Route path="/Support" element={<Support />} />
=======
            <Route path="/resources" element={<Resources />} />
>>>>>>> 94e03ece0fb8dd551296e0dd0da3d2e51518a523
          </Routes>
        </div>
        <Footer />
      </div>
    </HoverProvider>
  );
};

export default App;
