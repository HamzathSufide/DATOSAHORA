import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Shield, Zap, Award, X, MessageSquareQuote, CheckCircle, Users, Target, Briefcase, BookOpen, HeartHandshake } from 'lucide-react';

export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: 'easeOut' }
};

const PageWrapper = ({ children, title }) => (
    <motion.div
        {...pageTransition}
        className="container section"
    >
        <h1 style={{ marginBottom: '2rem' }}>
            <span className="text-gradient">{title}</span>
        </h1>
        {children}
    </motion.div>
);

export const FormModal = ({ isOpen, onClose, title, defaultCategory = "" }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const handleClose = () => {
        setIsSubmitted(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={handleClose}
                        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)' }}
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                        className="glass-panel"
                        style={{ position: 'relative', width: '90%', maxWidth: '500px', padding: '2.5rem', zIndex: 101, maxHeight: '90vh', overflowY: 'auto' }}
                    >
                        <button onClick={handleClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', color: 'var(--text-secondary)' }}>
                            <X size={24} />
                        </button>

                        {!isSubmitted ? (
                            <>
                                <h2 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>{title}</h2>
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <input type="text" placeholder="Full Name" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
                                    <input type="email" placeholder="Email Address" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
                                    <input type="tel" placeholder="Phone Number" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />

                                    <select defaultValue={defaultCategory} required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white', appearance: 'none' }}>
                                        <option value="" disabled>Select Category</option>
                                        <option value="Housewife">Housewife</option>
                                        <option value="Student">Student</option>
                                        <option value="Unemployed">Unemployed</option>
                                        <option value="Other">Other Professional</option>
                                    </select>

                                    <input type="text" placeholder="Current Situation (e.g., looking for remote work)" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
                                    <input type="text" placeholder="Career Interest (e.g., Digital Marketing)" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />

                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1.1rem' }}>Submit Application</button>
                                </form>
                            </>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <CheckCircle size={64} color="var(--accent-gold)" style={{ margin: '0 auto 1.5rem' }} />
                                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Thank You!</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                    Thank you for enrolling in Datosahora. Please join our WhatsApp community to receive program updates and access your Bootcamp Dashboard.
                                </p>
                                <a href="https://chat.whatsapp.com/invite" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ display: 'inline-flex', padding: '1rem 2rem', fontSize: '1.1rem', width: '100%', justifyContent: 'center' }}>
                                    Join WhatsApp Group
                                </a>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export const Home = () => {
    return (
        <motion.div {...pageTransition} style={{ width: '100%' }}>
            {/* HERO SECTION */}
            <section className="container section" style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                        Discover Your Potential. Build Skills. Start Earning.
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', textWrap: 'balance' }}>
                        Transform Your Career with <br /><span className="text-gradient">Structured Skill Development</span> Programs
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
                        DATOSAHORA helps housewives, students, and unemployed individuals discover their strengths, build professional skills, and start earning through structured training, mentorship, and gamified learning programs.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/services" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Start Your Career Journey <ArrowRight style={{ marginLeft: '10px' }} size={20} />
                        </a>
                        <a href="#programs" className="btn glass-panel" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Explore Our Programs
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* ABOUT US SECTION */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Empowering People to Build a <span className="text-gradient-red">Career from Anywhere</span></h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            At Datosahora, our mission is to help individuals who feel stuck in their career journey. Many housewives pause their careers after marriage or childbirth. Many students struggle to find the right direction. Many unemployed individuals feel lost without guidance.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            Our programs combine career guidance, skill training, psychology, and mentorship to transform beginners into confident professionals.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-panel"
                        style={{ padding: '2.5rem' }}
                    >
                        <h3 style={{ marginBottom: '1.5rem' }}>We created a configured learning platform to help them:</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}><CheckCircle size={24} color="var(--accent-gold)" /> Discover their strengths</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}><CheckCircle size={24} color="var(--accent-gold)" /> Build confidence and soft skills</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}><CheckCircle size={24} color="var(--accent-gold)" /> Learn practical digital skills</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}><CheckCircle size={24} color="var(--accent-gold)" /> Start earning from home or online</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* OUR PROGRAMS SECTION */}
            <section id="programs" className="container section">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>Programs Designed for <span className="text-gradient">Career Growth</span></h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ padding: '2rem', borderTop: '2px solid var(--accent-red)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem', opacity: 0.8 }}>
                            <motion.div initial={{ x: -10 }} animate={{ x: 0 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}>
                                <HeartHandshake size={32} color="var(--accent-red)" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}>
                                <ArrowRight size={24} color="var(--text-secondary)" />
                            </motion.div>
                            <motion.div initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ repeat: Infinity, repeatDelay: 1, duration: 0.5 }}>
                                <Briefcase size={32} color="var(--accent-gold)" />
                            </motion.div>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Career Restart Program for Housewives</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>This program helps housewives rediscover their potential and build income-generating skills from home.</p>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>Outcome</h4>
                        <p style={{ fontWeight: 'bold' }}>Start earning while managing family responsibilities.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ padding: '2rem', borderTop: '2px solid var(--accent-gold)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem', opacity: 0.8 }}>
                            <motion.div initial={{ x: -10 }} animate={{ x: 0 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5, delay: 0.2 }}>
                                <BookOpen size={32} color="var(--accent-gold)" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 1, delay: 0.2 }}>
                                <ArrowRight size={24} color="var(--text-secondary)" />
                            </motion.div>
                            <motion.div initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ repeat: Infinity, repeatDelay: 1, duration: 0.5, delay: 0.2 }}>
                                <Target size={32} color="#00b4d8" />
                            </motion.div>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Skill Development Program for Students</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Students often complete education without knowing how to apply their skills. We bridge that gap.</p>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>Outcome</h4>
                        <p style={{ fontWeight: 'bold' }}>Become job-ready with practical digital skills training.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ padding: '2rem', borderTop: '2px solid #00b4d8' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem', opacity: 0.8 }}>
                            <motion.div initial={{ x: -10 }} animate={{ x: 0 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5, delay: 0.4 }}>
                                <Users size={32} color="#00b4d8" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 1, delay: 0.4 }}>
                                <ArrowRight size={24} color="var(--text-secondary)" />
                            </motion.div>
                            <motion.div initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ repeat: Infinity, repeatDelay: 1, duration: 0.5, delay: 0.4 }}>
                                <Award size={32} color="var(--accent-gold)" />
                            </motion.div>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Career Transformation for Unemployed</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>For those who are struggling to find the right job or career path. Let's find your footing.</p>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>Outcome</h4>
                        <p style={{ fontWeight: 'bold' }}>Build a stable income and long-term career path.</p>
                    </motion.div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="/services" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>See Complete Curriculum</a>
                </div>
            </section>

            {/* WHY CHOOSE US & LEARNING METHOD */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>A Unique <span className="text-gradient">Learning Approach</span></h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                            Unlike traditional courses, our personality development programs focus on complete personal transformation. We believe success is not only about skills but also about mindset, discipline, and clarity.
                        </p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-gold)" /> Skill discovery & career guidance</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-gold)" /> Soft skills & communication training</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-gold)" /> Psychological confidence building</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-gold)" /> Practical skill learning through curated resources</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-gold)" /> Mentorship and accountability</li>
                        </ul>
                    </div>

                    <div className="glass-panel" style={{ padding: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>A Structured Career Bootcamp</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Step 1 – Discover Your Strengths</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>We analyze your personality, interests, and strengths to identify the right career path.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Step 2 – Build Confidence</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>Through motivational sessions, psychology training, and soft skill development.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Step 3 – Learn Practical Skills</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>Participants learn high-demand, online skill development courses.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Step 4 – Start Earning</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>We help implement strategies to start earning through work from home opportunities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILLS YOU CAN LEARN */}
            <section className="container section" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Skills You Can <span className="text-gradient">Learn</span></h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>Participants choose the skill that suits them best from our online career training.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    {['Freelancing', 'Social Media Management', 'Digital Marketing', 'Content Creation', 'Canva Designing', 'Online Tutoring', 'Affiliate Marketing', 'Personal Branding'].map((skill, i) => (
                        <div key={i} className="glass-panel" style={{ padding: '1rem 2rem', fontWeight: 'bold' }}>
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIALS & COMMUNITY */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <MessageSquareQuote size={40} color="var(--accent-gold)" style={{ margin: '0 auto 1rem' }} />
                        <h2 style={{ fontSize: '2.5rem' }}>Real People. <span className="text-gradient">Real Transformations.</span></h2>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Our programs have helped individuals gain confidence, discover their potential, and start earning from home.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        {[
                            { name: "Anjali M.", role: "Housewife to Freelancer", text: "The career restart program for housewives showed me the 'hidden hours'. I now manage social media clients independently." },
                            { name: "Rahul S.", role: "Student & Content Creator", text: "The skills training for students gave me clarity. I learned digital marketing and secured my first remote internship." },
                            { name: "Priya K.", role: "Once Unemployed, Now Virtual Assistant", text: "Career guidance for unemployed people is rare. Datosahora gave me complete confidence and accountability." }
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                            >
                                <div style={{ display: 'flex', gap: '4px', color: 'var(--accent-gold)' }}>
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                                </div>
                                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', flex: 1 }}>"{testimonial.text}"</p>
                                <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                                    <h4 style={{ color: 'white', marginBottom: '0.2rem' }}>{testimonial.name}</h4>
                                    <span style={{ color: 'var(--accent-red)', fontSize: '0.9rem' }}>{testimonial.role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* COMMUNITY & WHO SHOULD JOIN */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Users size={32} color="var(--accent-gold)" />
                                <h3 style={{ fontSize: '2rem' }}>Supportive Community</h3>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--accent-gold)" /> Mentorship sessions</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--accent-gold)" /> Peer learning</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--accent-gold)" /> Accountability groups</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--accent-gold)" /> Networking bridging</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--accent-gold)" /> Job and project opportunities</li>
                            </ul>
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Target size={32} color="var(--accent-red)" />
                                <h3 style={{ fontSize: '2rem' }}>Who Should Join?</h3>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--accent-red)" /> Housewives looking to restart careers</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--accent-red)" /> Students who want practical skills</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--accent-red)" /> Unemployed individuals seeking income</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--accent-red)" /> Anyone who wants to grow professionally</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="container section" style={{ textAlign: 'center', padding: '6rem 0' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Your Career Transformation <span className="text-gradient">Starts Today</span></h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                    If you feel stuck, confused, or unsure about your future, our programs will guide you step by step. Discover your skills, build confidence, and start earning.
                </p>
                <a href="/services" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem' }}>
                    Start Your Career Journey Today
                </a>
            </section>
        </motion.div>
    );
};

export const Services = () => {
    return (
        <>
            <motion.div {...pageTransition} className="container section">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1><span className="text-gradient">Our Programs</span></h1>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1.1rem' }}>Programs Designed for Career Growth & Complete Transformation.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>

                    {/* Housewives */}
                    <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden', borderTop: '4px solid var(--accent-red)' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', backgroundColor: 'var(--accent-red)', color: 'white', fontWeight: 'bold', borderBottomLeftRadius: '16px' }}>
                            Most Popular
                        </div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Career Restart for Housewives</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            Helps housewives rediscover their potential and build income-generating skills from home.
                        </p>
                        <h4 style={{ marginBottom: '1rem', color: 'white' }}>Key Focus Areas:</h4>
                        <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-red)" /> Time management for mothers</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-red)" /> Confidence & personality development</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-red)" /> Work-from-home career options</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-red)" /> Freelancing and digital skills</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-red)" /> First income strategy</li>
                        </ul>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                            <a href="/programs/housewives" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Explore Program & Enroll</a>
                        </div>
                    </div>

                    {/* Students */}
                    <div className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid var(--accent-gold)', display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Skill Development for Students</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            Students often complete education without knowing how to apply their skills. Become job-ready.
                        </p>
                        <h4 style={{ marginBottom: '1rem', color: 'white' }}>Key Focus Areas:</h4>
                        <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-gold)" /> Career clarity</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-gold)" /> Digital skills training</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-gold)" /> Communication skills</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-gold)" /> Personal branding</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="var(--accent-gold)" /> Internship & freelancing</li>
                        </ul>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                            <a href="/programs/students" className="btn btn-gold" style={{ width: '100%', textAlign: 'center' }}>Explore Program & Enroll</a>
                        </div>
                    </div>

                    {/* Unemployed */}
                    <div className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid #00b4d8', display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Career Transformation for Unemployed</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            For those who are struggling to find the right job. Build a stable income and a long-term path.
                        </p>
                        <h4 style={{ marginBottom: '1rem', color: 'white' }}>Key Focus Areas:</h4>
                        <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="#00b4d8" /> Skill discovery & career planning</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="#00b4d8" /> Resume building & interviews</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="#00b4d8" /> Digital skills and freelancing</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={20} color="#00b4d8" /> Online income opportunities</li>
                        </ul>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                            <a href="/programs/unemployed" className="btn glass-panel" style={{ border: '1px solid #00b4d8', width: '100%', textAlign: 'center' }}>Explore Program & Enroll</a>
                        </div>
                    </div>

                </div>
            </motion.div>
        </>
    );
};

export const KnowledgeBase = () => (
    <PageWrapper title="Knowledge Base">
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>Empower yourself with resources, guides, and tutorials.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[1, 2, 3, 4].map(item => (
                <div key={item} className="glass-panel" style={{ padding: '1.5rem' }}>
                    <div style={{ width: '100%', height: '150px', backgroundColor: 'var(--bg-primary)', borderRadius: '8px', marginBottom: '1rem' }}></div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Article Title {item}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Brief description of the knowledge resource available here...</p>
                    <button style={{ marginTop: '1rem', background: 'none', color: 'var(--accent-gold)', padding: 0, fontWeight: 500 }}>Read More →</button>
                </div>
            ))}
        </div>
    </PageWrapper>
);

export const About = () => (
    <PageWrapper title="About Us">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '2rem' }}>
            <div className="glass-panel" style={{ padding: '3rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Datosahora is built on a singular vision by founder Hamzath Sufide P S: to strip away the dependency that holds people back from realizing their true potential. We believe that financial independence should not be a privilege, but a right accessible to everyone—from housewives looking to reclaim their identity to students striving for an early head start.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                    <Shield size={40} color="var(--accent-red)" style={{ margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Complete Support</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>From technical skilling to emotional and professional mindset shifts.</p>
                </div>
                <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                    <Zap size={40} color="var(--accent-gold)" style={{ margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Gamified Learning</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Experience points (XP) and badges to make the journey enjoyable and rewarding.</p>
                </div>
            </div>
        </div>
    </PageWrapper>
);

export const Contact = () => (
    <PageWrapper title="Contact Us">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '2rem' }}>
            <div>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Get in touch</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>We'd love to hear from you. Drop us a message and we'll reply as soon as possible.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p><strong>Email:</strong> support@datosahora.com</p>
                    <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
                    <p><strong>Location:</strong> Thrissur, Kerala, India</p>
                </div>
            </div>
            <div className="glass-panel" style={{ padding: '2rem' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-primary)', color: 'white' }} />
                    <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-primary)', color: 'white' }} />
                    <textarea placeholder="Your Message" rows="4" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-primary)', color: 'white', resize: 'vertical' }}></textarea>
                    <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>Send Message</button>
                </form>
            </div>
        </div>
    </PageWrapper>
);

export const Refer = () => (
    <PageWrapper title="Refer and Earn">
        <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', marginTop: '2rem' }}>
            <Award size={64} color="var(--accent-gold)" style={{ margin: '0 auto 2rem' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Share the wealth. Build the community.</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Invite your friends and family to Datosahora. For every successful referral who joins our Career Restart, Student Skill, or Career Transformation programs, you earn an exclusive commission directly to your account.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <input type="text" value="https://datosahora.com/ref/hamzath" readOnly style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-primary)', color: 'white', width: '300px' }} />
                <button className="btn btn-primary">Copy Link</button>
            </div>
        </div>
    </PageWrapper>
);
