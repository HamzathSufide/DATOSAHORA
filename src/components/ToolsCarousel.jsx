import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Code, PenTool, Database, Globe, Share2, MousePointer2, Layout, Smartphone } from 'lucide-react';

const tools = [
  { name: 'Canva Pro', icon: PenTool },
  { name: 'ChatGPT Plus', icon: Cpu },
  { name: 'Wix / Framer', icon: Layout },
  { name: 'Meta Ads', icon: Share2 },
  { name: 'Copy.ai', icon: PenTool },
  { name: 'Google Workspace', icon: Globe },
  { name: 'LinkedIn Sales', icon: Smartphone },
  { name: 'Shopify', icon: Database },
  { name: 'Trello / Notion', icon: MousePointer2 },
  { name: 'Figma', icon: Code },
];

export const ToolsCarousel = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>
            Master High-Demand <span style={{ color: 'var(--accent-red)' }}>Tools</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            We teach you how to leverage these game-changing platforms.
          </p>
        </div>
      </div>

      <div style={{ position: 'relative', width: '100%', display: 'flex' }}>
        {/* Infinite Scrolling Track */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ display: 'flex', gap: '2rem', whiteSpace: 'nowrap' }}
        >
          {[...tools, ...tools].map((tool, i) => (
            <div key={i} className="glass-panel" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '15px', 
              padding: '1.5rem 3rem',
              borderRadius: '99px',
              minWidth: 'max-content',
              borderColor: 'rgba(255, 0, 0, 0.1)',
              background: 'rgba(255, 255, 255, 0.02)'
            }}>
              <tool.icon size={24} color="var(--accent-red)" />
              <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'white' }}>{tool.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Fades */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '200px', height: '100%', background: 'linear-gradient(to right, var(--bg-secondary), transparent)', zIndex: 2 }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '100%', background: 'linear-gradient(to left, var(--bg-secondary), transparent)', zIndex: 2 }} />
      </div>
    </section>
  );
};
