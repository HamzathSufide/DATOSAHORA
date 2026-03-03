import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Target, Users, BookOpen, Clock, Briefcase, Award } from 'lucide-react';
import { pageTransition, FormModal } from './pages';

// Reusable Section components for Landing Pages
const LandingHero = ({ title, highlight, subtitle, onEnroll }) => (
    <section className="container section" style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', textWrap: 'balance' }}>
                {title} <br /><span className="text-gradient">{highlight}</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
                {subtitle}
            </p>
            <button onClick={onEnroll} className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem' }}>
                Enroll Now <ArrowRight style={{ marginLeft: '10px' }} size={20} />
            </button>
        </motion.div>
    </section>
);

const CurriculumSection = ({ title, modules }) => (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>{title}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {modules.map((mod, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '2rem', borderTop: `2px solid ${i % 2 === 0 ? 'var(--accent-red)' : 'var(--accent-gold)'}` }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{mod.name}</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                            {mod.topics.map((topic, j) => (
                                <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                    <CheckCircle size={18} color="var(--accent-gold)" style={{ marginTop: '3px', flexShrink: 0 }} />
                                    <span>{topic}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const PricingSection = ({ price, onEnroll }) => (
    <section className="container section" style={{ textAlign: 'center' }}>
        <div className="glass-panel" style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem', border: '1px solid var(--accent-gold)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Invest in Your Future</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>Complete access to the bootcamp, mentorship, and community.</p>
            <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem' }}>
                ₹{price}
            </div>
            <button onClick={onEnroll} className="btn btn-gold" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem', width: '100%' }}>
                Enroll Now
            </button>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem', fontSize: '0.9rem' }}>Secure checkout. 100% satisfaction guarantee.</p>
        </div>
    </section>
);

// Specific Landing Pages
export const HousewivesLanding = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <motion.div {...pageTransition}>
                <LandingHero
                    title="Career Restart Program for"
                    highlight="Housewives"
                    subtitle="Discover your potential and build work-from-home skills. Transform from a homemaker to an independent earner with our structured career bootcamp."
                    onEnroll={() => setModalOpen(true)}
                />

                <section className="container section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Designed for Your Busy Life</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            We understand that managing a household is a full-time job. This program is specifically designed to help you find "hidden hours", build your confidence, and learn flexible digital skills that allow you to earn from home.
                        </p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Clock size={20} color="var(--accent-red)" /> Time management for mothers</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Users size={20} color="var(--accent-red)" /> Confidence & personality development</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Target size={20} color="var(--accent-red)" /> Work-from-home career options</li>
                        </ul>
                    </div>
                    <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
                        <TrophyIcon />
                        <h3 style={{ fontSize: '1.8rem', marginTop: '1.5rem', marginBottom: '1rem' }}>Outcome</h3>
                        <p style={{ fontSize: '1.2rem', color: 'var(--accent-gold)' }}>Gain the ability to start earning from home independently.</p>
                    </div>
                </section>

                <CurriculumSection
                    title="Program Curriculum"
                    modules={[
                        { name: "Phase 1: Self Discovery", topics: ["Identifying Strengths", "Time Management", "Mindset Shift"] },
                        { name: "Phase 2: Skill Building", topics: ["Digital Literacy", "Freelancing Basics", "Social Media Management"] },
                        { name: "Phase 3: The Launch", topics: ["Creating a Profile", "Finding First Clients", "First Income Strategy"] }
                    ]}
                />
                <PricingSection price="4,999" onEnroll={() => setModalOpen(true)} />
            </motion.div>
            <FormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Career Restart Program" defaultCategory="Housewife" />
        </>
    );
};

export const StudentsLanding = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <motion.div {...pageTransition}>
                <LandingHero
                    title="Skill Development Program for"
                    highlight="Students"
                    subtitle="Bridge the gap between education and employment. Learn practical digital skills, build a professional mindset, and become job-ready."
                    onEnroll={() => setModalOpen(true)}
                />

                <section className="container section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
                        <BookOpen size={64} color="var(--accent-gold)" style={{ margin: '0 auto' }} />
                        <h3 style={{ fontSize: '1.8rem', marginTop: '1.5rem', marginBottom: '1rem' }}>Outcome</h3>
                        <p style={{ fontSize: '1.2rem', color: 'white' }}>Students become job-ready with a strong portfolio.</p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Practical Skills for the Real World</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            Degrees alone are no longer enough. We focus on career clarity, digital skills, and communication, ensuring you stand out to employers or can start your own freelancing journey.
                        </p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-gold)" /> Career clarity & goal setting</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-gold)" /> Digital skills & tool mastery</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-gold)" /> Professional mindset & communication</li>
                        </ul>
                    </div>
                </section>

                <CurriculumSection
                    title="Program Curriculum"
                    modules={[
                        { name: "Phase 1: Foundation", topics: ["Career Mapping", "Communication Skills", "LinkedIn Optimization"] },
                        { name: "Phase 2: Core Skills", topics: ["Digital Marketing", "Content Creation", "Canva Design"] },
                        { name: "Phase 3: Execution", topics: ["Portfolio Building", "Interview Prep", "Freelance Setup"] }
                    ]}
                />
                <PricingSection price="5,999" onEnroll={() => setModalOpen(true)} />
            </motion.div>
            <FormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Skill Development Program" defaultCategory="Student" />
        </>
    );
};

export const UnemployedLanding = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <motion.div {...pageTransition}>
                <LandingHero
                    title="Career Growth Program for"
                    highlight="Unemployed Individuals"
                    subtitle="Feeling stuck in your career? Discover your true path, learn high-demand skills, and build a sustainable income path."
                    onEnroll={() => setModalOpen(true)}
                />

                <section className="container section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Find Your Footing Again</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            We provide intensive guidance and skill training to help you break out of the rut. Build professional confidence and learn actionable strategies to generate income online.
                        </p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Briefcase size={20} color="#00b4d8" /> Skill discovery & assessment</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Briefcase size={20} color="#00b4d8" /> Professional development</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Briefcase size={20} color="#00b4d8" /> Online income strategies</li>
                        </ul>
                    </div>
                    <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', borderColor: '#00b4d8' }}>
                        <Target size={64} color="#00b4d8" style={{ margin: '0 auto' }} />
                        <h3 style={{ fontSize: '1.8rem', marginTop: '1.5rem', marginBottom: '1rem' }}>Outcome</h3>
                        <p style={{ fontSize: '1.2rem', color: 'white' }}>Build a sustainable income path and reclaim your career.</p>
                    </div>
                </section>

                <CurriculumSection
                    title="Program Curriculum"
                    modules={[
                        { name: "Phase 1: Reset", topics: ["Mindset Transformation", "Skill Auditing", "Confidence Building"] },
                        { name: "Phase 2: Reskill", topics: ["High-Demand Digital Skills", "Online Work Platforms", "Tool Mastery"] },
                        { name: "Phase 3: Relaunch", topics: ["Resume Building", "Interview Tactics", "Securing First Gig"] }
                    ]}
                />
                <PricingSection price="6,999" onEnroll={() => setModalOpen(true)} />
            </motion.div>
            <FormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Career Growth Program" defaultCategory="Unemployed" />
        </>
    );
};

const TrophyIcon = () => <Award size={64} color="var(--accent-gold)" style={{ margin: '0 auto' }} />;
