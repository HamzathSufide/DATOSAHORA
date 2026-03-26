import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { pageTransition, Float3D } from './pages';
import { motion } from 'framer-motion';
import { Video, Calendar, Trophy, Gamepad2, PlaySquare, Crown } from 'lucide-react';

export const ActivitiesLayout = () => {
    return (
        <motion.div {...pageTransition} className="container section" style={{ position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
                <h1><span className="text-image-clip">Activities</span></h1>
                <nav style={{ display: 'flex', gap: '1rem', marginTop: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    <Link to="/activities/webinar" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', gap: '8px' }}><Video size={16} /> Webinar</Link>
                    <Link to="/activities/activities" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', gap: '8px' }}><Calendar size={16} /> Activities</Link>
                    <Link to="/activities/gamification" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', gap: '8px' }}><Trophy size={16} /> Gamification</Link>
                    <Link to="/activities/entertainment" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', gap: '8px' }}><Gamepad2 size={16} /> Entertainment</Link>
                </nav>

                {/* Nested routes will render here */}
                <Float3D>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <Outlet />
                    </div>
                </Float3D>
            </div>
        </motion.div>
    );
};

export const Webinar = () => (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Video size={32} color="var(--accent-red)" />
            <h2 style={{ fontSize: '2rem' }}>Exclusive Webinars</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Join our live expert sessions where Hamzath and other industry leaders share insights on technical skills, business launching, and mindset shifts.
        </p>
        <Float3D>
            <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-red)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Upcoming: Finding Hidden Hours</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Learn how to manage your time as a busy professional or housewife to dedicate time to independent earning.</p>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ fontWeight: 'bold' }}>Tomorrow, 7:00 PM IST</span>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Reserve Content</button>
                </div>
            </div>
        </Float3D>
    </motion.div>
);

export const GeneralActivities = () => (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Calendar size={32} color="var(--accent-gold)" />
            <h2 style={{ fontSize: '2rem' }}>Structured Daily Setup</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Success requires discipline. Our Bootcamp follows a strict daily format designed for maximum retention and action.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Float3D delay={0}>
                <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-gold)' }}>
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>Morning Routine (9:00 AM)</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Daily tasks assigned, mindset journaling, and review of previous day's progress.</p>
                </div>
            </Float3D>
            <Float3D delay={0.2}>
                <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-gold)' }}>
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>Learning Sessions (10:30 AM)</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Deep dive into the weekly module (e.g., Intro to Canva, Freelance Platforms).</p>
                </div>
            </Float3D>
            <Float3D delay={0.4}>
                <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-red)' }}>
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-red)' }}>Evening Review (6:00 PM)</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Submit assignments, engage in community discussion, and track XP points.</p>
                </div>
            </Float3D>
        </div>
    </motion.div>
);

export const Gamification = () => (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Trophy size={32} color="var(--accent-gold)" />
            <h2 style={{ fontSize: '2rem', color: 'var(--accent-gold)' }}>5-Level Growth System</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Learning is a journey. Our platform uses a Gamified Progression System where you earn XP for completing daily tasks, submitting assignments, and participating in webinars. Rise through the 5 levels and earn certificates and community rewards!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <Float3D delay={0}>
                <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', height: '100%' }}>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Level 2: Learner</div>
                    <div style={{ color: 'var(--text-secondary)' }}>You are currently on track!</div>
                    <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-primary)', borderRadius: '4px', marginTop: '1rem', overflow: 'hidden' }}>
                        <div style={{ width: '65%', height: '100%', backgroundColor: 'var(--accent-gold)' }}></div>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>1,250 XP (350 XP to Level 3)</p>
                </div>
            </Float3D>

            <Float3D delay={0.2}>
                <div className="glass-panel" style={{ padding: '2rem', height: '100%' }}>
                    <h3 style={{ marginBottom: '1rem' }}>The 5 Levels</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                        <li style={{ color: 'var(--text-secondary)' }}><strong>L1: Explorer</strong> (0 XP) - Start your journey.</li>
                        <li style={{ color: 'var(--accent-gold)' }}><strong>L2: Learner</strong> (1k XP) - Consistent daily action.</li>
                        <li><strong>L3: Achiever</strong> (2.5k XP) - First major milestone.</li>
                        <li><strong>L4: Professional</strong> (5k XP) - Job-ready portfolio.</li>
                        <li><strong>L5: Earner</strong> (10k XP) - First income generated!</li>
                    </ul>
                </div>
            </Float3D>
        </div>

        {/* Global Leaderboard Section */}
        <div style={{ marginTop: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Crown size={28} color="var(--accent-gold)" />
                <h3 style={{ fontSize: '1.8rem' }}>Global Leaderboard</h3>
            </div>
            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '50px 1fr 100px', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <span>Rank</span>
                    <span>Earner</span>
                    <span style={{ textAlign: 'right' }}>XP</span>
                </div>
                {[
                    { rank: 1, name: "Sneha R.", xp: "14,500" },
                    { rank: 2, name: "Varun T.", xp: "13,200" },
                    { rank: 3, name: "Kavya P.", xp: "12,850" },
                    { rank: 4, name: "Mohammed Z.", xp: "11,100" },
                    { rank: 45, name: "You", xp: "1,250", isCurrentUser: true }
                ].map((user, i) => (
                    <div key={i} style={{
                        padding: '1.5rem', display: 'grid', gridTemplateColumns: '50px 1fr 100px',
                        borderBottom: i === 4 ? 'none' : '1px solid rgba(255,255,255,0.05)',
                        backgroundColor: user.isCurrentUser ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                        color: user.isCurrentUser ? 'var(--accent-gold)' : 'white'
                    }}>
                        <span style={{ fontWeight: user.rank <= 3 ? 'bold' : 'normal', color: user.rank === 1 ? 'var(--accent-gold)' : 'inherit' }}>#{user.rank}</span>
                        <span>{user.name} {user.isCurrentUser && "(You)"}</span>
                        <span style={{ textAlign: 'right', fontWeight: 'bold' }}>{user.xp}</span>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
);

export const Entertainment = () => (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <PlaySquare size={32} color="var(--accent-red)" />
            <h2 style={{ fontSize: '2rem' }}>Entertainment & Chill</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Building an independent career is hard work. Take a break, watch curated inspirational content, and connect with the community casually.
        </p>
        <Float3D>
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', border: '1px dashed rgba(255,255,255,0.2)' }}>
                <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>Community movie night coming up this Friday. Stay tuned!</p>
            </div>
        </Float3D>
    </motion.div>
);
