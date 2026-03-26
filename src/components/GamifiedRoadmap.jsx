import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const levels = [
  { id: 1, title: 'Level 1: Explorer', description: 'Discovering hidden talents and setting the foundation.', pos: 0 },
  { id: 2, title: 'Level 2: Skill Builder', description: 'Mastering high-demand digital tools.', pos: 25 },
  { id: 3, title: 'Level 3: Creator', description: 'Building personal brand and portfolio.', pos: 50 },
  { id: 4, title: 'Level 4: Professional', description: 'Securing clients and professional projects.', pos: 75 },
  { id: 5, title: 'Level 5: Earner', description: 'Achieving financial independence and scaling.', pos: 100 },
];

export const GamifiedRoadmap = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Vertical movement for the character
  const characterY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  
  // Character SVG
  const CharacterIcon = () => (
    <motion.div
      style={{
        position: 'absolute',
        top: characterY,
        left: '50%',
        x: '-50%',
        y: '-50%',
        zIndex: 10,
        filter: 'drop-shadow(0 0 15px var(--accent-red))'
      }}
    >
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="var(--accent-gold)" strokeWidth="2" />
        <path d="M50 20L60 40H40L50 20Z" fill="var(--accent-red)" />
        <rect x="45" y="45" width="10" height="30" fill="var(--accent-gold)" />
        <circle cx="50" cy="50" r="5" fill="white" />
        {/* Simple Robot/Game Character */}
        <motion.circle 
          animate={{ r: [3, 5, 3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          cx="50" cy="35" r="4" fill="var(--accent-red)" 
        />
      </svg>
    </motion.div>
  );

  return (
    <section ref={containerRef} className="section" style={{ position: 'relative', padding: '10rem 0' }}>
      <div className="container" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '4px' }}>
            The <span style={{ color: 'var(--accent-red)' }}>Gamified</span> Roadmap
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem' }}>
            Level up your career path through our structured game-like journey.
          </p>
        </div>

        {/* The Path */}
        <div style={{ 
          position: 'relative', 
          width: '4px', 
          height: '1000px', 
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '4px'
        }}>
          {/* Animated Progress Path */}
          <motion.div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: characterY,
              background: 'linear-gradient(to bottom, var(--accent-red), var(--accent-gold))',
              boxShadow: '0 0 20px var(--accent-red-glow)',
              borderRadius: '4px'
            }}
          />

          <CharacterIcon />

          {/* Level Markers */}
          {levels.map((level, index) => {
            const isReached = useTransform(smoothProgress, p => p >= level.pos / 100);
            
            return (
              <div 
                key={level.id}
                style={{
                  position: 'absolute',
                  top: `${level.pos}%`,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  alignItems: 'center',
                  width: 'max-content',
                  textAlign: index % 2 === 0 ? 'right' : 'left',
                  flexDirection: index % 2 === 0 ? 'row-reverse' : 'row',
                  gap: '2rem'
                }}
              >
                {/* Dot */}
                <motion.div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: '4px solid var(--accent-gold)',
                    boxShadow: '0 0 15px var(--accent-gold-glow)',
                    zIndex: 5
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    borderColor: level.pos / 100 <= smoothProgress.get() ? 'var(--accent-red)' : 'var(--accent-gold)'
                  }}
                />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-panel"
                  style={{
                    padding: '1.5rem',
                    width: '300px',
                    borderColor: level.pos / 100 <= smoothProgress.get() ? 'var(--accent-red)' : 'rgba(255,255,255,0.1)'
                  }}
                >
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    color: level.pos / 100 <= smoothProgress.get() ? 'var(--accent-red)' : 'var(--accent-gold)',
                    marginBottom: '0.5rem'
                  }}>
                    {level.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {level.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Glows */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(230, 57, 70, 0.03) 0%, transparent 70%)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
    </section>
  );
};
