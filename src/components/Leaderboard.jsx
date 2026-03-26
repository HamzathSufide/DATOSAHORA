import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const toppers = [
  { name: "Anjali M.", points: "2,450 XP", level: "Lvl 5", award: "Pro Creator" },
  { name: "Rahul S.", points: "2,320 XP", level: "Lvl 5", award: "Client Guru" },
  { name: "Priya K.", points: "2,100 XP", level: "Lvl 4", award: "Skill Master" },
  { name: "Sameer V.", points: "1,980 XP", level: "Lvl 4", award: "Rising Star" },
  { name: "Deepa R.", points: "1,850 XP", level: "Lvl 4", award: "Design Pro" },
  { name: "Vikram G.", points: "1,720 XP", level: "Lvl 3", award: "Content King" },
  { name: "Neha J.", points: "1,600 XP", level: "Lvl 3", award: "Ad Strategist" },
  { name: "Arun P.", points: "1,450 XP", level: "Lvl 3", award: "Fast Learner" },
  { name: "Sita B.", points: "1,320 XP", level: "Lvl 2", award: "Explorer" },
  { name: "Kiran D.", points: "1,200 XP", level: "Lvl 2", award: "Apprentice" },
];

export const Leaderboard = () => {
  return (
    <section className="section" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>
            Game <span style={{ color: 'var(--accent-gold)' }}>Points</span> Leaderboard
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Top 10 High Achievers of the Kanlearn Community.
          </p>
        </div>

        <div className="glass-panel" style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          padding: '2rem',
          border: '1px solid rgba(255, 215, 0, 0.2)',
          boxShadow: '0 0 40px rgba(0,0,0,0.5), 0 0 20px rgba(255, 215, 0, 0.05)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 120px 120px 150px', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>
            <span>Rank</span>
            <span>Player</span>
            <span>XP Points</span>
            <span>Level</span>
            <span>Achievement</span>
          </div>

          <div style={{ maxHeight: '600px', overflowY: 'auto', marginTop: '1rem' }}>
            {toppers.map((player, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '80px 1fr 120px 120px 150px', 
                  gap: '1rem', 
                  padding: '1.2rem 0',
                  alignItems: 'center',
                  borderBottom: index === toppers.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.03)',
                  background: index < 3 ? 'rgba(255, 215, 0, 0.03)' : 'transparent',
                  borderRadius: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {index < 3 ? (
                    <Trophy size={20} color={index === 0 ? "#ffd700" : index === 1 ? "#c0c0c0" : "#cd7f32"} />
                  ) : (
                    <span style={{ color: 'var(--text-secondary)', width: '20px', textAlign: 'center' }}>{index + 1}</span>
                  )}
                </div>
                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{player.name}</span>
                <span style={{ color: 'var(--accent-red)', fontWeight: 700 }}>{player.points}</span>
                <span style={{ fontWeight: 500 }}>{player.level}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={16} color="var(--accent-gold)" />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{player.award}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
