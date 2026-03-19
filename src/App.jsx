import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Home, Services, KnowledgeBase, About, Contact, Refer } from './pages';
import { ActivitiesLayout, Webinar, GeneralActivities, Gamification, Entertainment } from './Activities';
import { HousewivesLanding, StudentsLanding, UnemployedLanding } from './LandingPages';
import { Blog } from './Blog';
import { BackgroundGalaxy } from './BackgroundGalaxy';
import { Menu, X, Mail, MapPin, Phone } from 'lucide-react';

import './App.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <motion.img
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              src="/kanlearn_no_bg.png" alt="Kanlearn Logo"
              style={{ height: '75px', objectFit: 'contain', filter: 'drop-shadow(0px 0px 15px rgba(230, 57, 70, 0.6))' }}
            />
            <motion.span
              whileHover={{ scale: 1.05 }}
              style={{ fontSize: '2.2rem', fontWeight: 900, fontFamily: 'var(--font-heading)', letterSpacing: '-1.5px', color: 'white', textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
            >
              KAN<span className="text-gradient-red">LEARN</span>
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Programs</Link>
            <Link to="/activities" className="nav-link">Gamification</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/refer" className="btn btn-gold" style={{ padding: '0.4rem 1.2rem', fontSize: '0.9rem' }}>Refer & Earn</Link>
          </div>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={toggleMenu} style={{ background: 'transparent', color: 'white' }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 40
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: '280px',
                background: 'var(--bg-elevated)', borderLeft: '1px solid rgba(255,255,255,0.1)',
                zIndex: 45, padding: '6rem 2rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'
              }}
            >
              <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
              <Link to="/services" className="mobile-nav-link" onClick={toggleMenu}>Programs</Link>
              <Link to="/activities" className="mobile-nav-link" onClick={toggleMenu}>Gamification</Link>
              <Link to="/blog" className="mobile-nav-link" onClick={toggleMenu}>Blog</Link>
              <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>About Us</Link>
              <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</Link>
              <Link to="/refer" className="btn btn-gold" style={{ textAlign: 'center', marginTop: '1rem' }} onClick={toggleMenu}>Refer & Earn</Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .nav-link:hover {
          color: white;
        }
        .mobile-nav-link {
          font-size: 1.2rem;
          color: white;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 0.5rem;
        }
        .mobile-toggle {
          display: none;
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </>
  );
};

const Footer = () => (
  <footer style={{ backgroundColor: 'var(--bg-elevated)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '4rem 0 2rem', marginTop: 'auto' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
      <div>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem', textDecoration: 'none' }}>
          <motion.img
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
            src="/kanlearn_no_bg.png" alt="Kanlearn Logo"
            style={{ height: '90px', objectFit: 'contain', filter: 'drop-shadow(0px 0px 20px rgba(212, 175, 55, 0.6))' }}
          />
          <motion.span
            whileHover={{ scale: 1.05 }}
            style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-heading)', letterSpacing: '-2px', color: 'white', textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
          >
            KAN<span className="text-gradient">LEARN</span>
          </motion.span>
        </Link>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Empowering individuals to achieve true financial independence through curated learning and mentorship.</p>
      </div>

      <div>
        <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Quick Links</h4>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <li><Link to="/services" className="footer-link">Our Programs</Link></li>
          <li><Link to="/activities" className="footer-link">Activities Hub</Link></li>
          <li><Link to="/blog" className="footer-link">Blog</Link></li>
          <li><Link to="/knowledge-base" className="footer-link">Knowledge Base</Link></li>
          <li><Link to="/refer" className="footer-link">Refer & Earn</Link></li>
        </ul>
      </div>

      <div>
        <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Contact Us</h4>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Mail size={16} color="var(--accent-red)" /> support@kanlearn.com</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Phone size={16} color="var(--accent-red)" /> +91 9747970899</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={16} color="var(--accent-red)" /> Thrissur, Kerala, India</li>
        </ul>
      </div>
    </div>
    <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
      &copy; {new Date().getFullYear()} Kanlearn. All rights reserved. Directed by Hamzath Sufide P S.
    </div>
    <style>{`
            .footer-link {
                color: var(--text-secondary);
                transition: color 0.2s;
            }
            .footer-link:hover {
                color: var(--accent-gold);
            }
        `}</style>
  </footer>
);

// Extracted routes wrapper to use useLocation hook for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs/housewives" element={<HousewivesLanding />} />
        <Route path="/programs/students" element={<StudentsLanding />} />
        <Route path="/programs/unemployed" element={<UnemployedLanding />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/refer" element={<Refer />} />

        {/* Nested Routing for Activities */}
        <Route path="/activities" element={<ActivitiesLayout />}>
          <Route index element={<GeneralActivities />} /> {/* Default child */}
          <Route path="webinar" element={<Webinar />} />
          <Route path="activities" element={<GeneralActivities />} />
          <Route path="gamification" element={<Gamification />} />
          <Route path="entertainment" element={<Entertainment />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <BackgroundGalaxy />
        <NavBar />
        <main style={{ flex: 1 }}>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
