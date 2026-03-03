import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Shield, Zap, Award, X, MessageSquareQuote, CheckCircle, Users, Target, Briefcase, BookOpen, HeartHandshake, PlayCircle } from 'lucide-react';

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
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Google Form Action URL
    const formActionURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScyD9UAMMdHAITWJgYYABRi_MFXvtpx8uGkLkZdWH6hojfHzg/formResponse";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        const formData = new FormData(form);

        try {
            // mode: 'no-cors' is necessary here as Google Forms does not return standard CORS headers
            await fetch(formActionURL, {
                method: "POST",
                mode: "no-cors",
                body: formData
            });
            // We assume success as we can't read the opaque response
            setIsSubmitted(true);
        } catch (error) {
            console.error("Form submission error", error);
            // Handle error state gracefully by letting the user hit the thank you page anyway so they can join whatsapp
            setIsSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setIsSubmitted(false);
        setIsSubmitting(false);
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

                                <form
                                    onSubmit={handleSubmit}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                                >
                                    <input type="text" name="entry.44543812" placeholder="Full Name" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
                                    <input type="email" name="entry.1532415820" placeholder="Email Address" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
                                    <input type="tel" name="entry.487039740" placeholder="Phone Number" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />

                                    <select name="entry.851974024" defaultValue={defaultCategory} required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white', appearance: 'none' }}>
                                        <option value="" disabled>Select Category</option>
                                        <option value="House Wife">House Wife</option>
                                        <option value="Student">Student</option>
                                        <option value="Unemployed">Unemployed</option>
                                        <option value="Other Proffessional">Other Proffessional</option>
                                    </select>

                                    <input type="text" name="entry.2120560552" placeholder="Current Situation (e.g., looking for remote work)" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
                                    <input type="text" name="entry.2109695417" placeholder="Career Interest (e.g., Digital Marketing)" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />

                                    <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1.1rem', opacity: isSubmitting ? 0.7 : 1 }}>
                                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                    </button>
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

const InstagramFeed = () => {
    const reels = [
        { id: 1, user: "datosahora_academy", views: "12.4K", caption: "Day 1 of Bootcamp: Finding your hidden skills! 🚀 #freelancing #housewives" },
        { id: 2, user: "datosahora_academy", views: "8.9K", caption: "Student success story: How Rahul got his first client. 💻 #digitalmarketing" },
        { id: 3, user: "datosahora_academy", views: "15.2K", caption: "Stop scrolling, start earning. Mindset shift 101. 🧠 #careergrowth" },
        { id: 4, user: "datosahora_academy", views: "5.1K", caption: "Behind the scenes of our Daily Live Calls! 📞 #datosahora" }
    ];

    return (
        <section className="container section" style={{ padding: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Join the Daily <span className="text-gradient">Motivation</span></h2>
                <p style={{ color: 'var(--text-secondary)' }}>Follow us on Instagram for daily tips, live sessions, and student wins.</p>
            </div>

            <div className="scroll-carousel" style={{ paddingBottom: '1rem' }}>
                {reels.map(reel => (
                    <div key={reel.id} className="carousel-item" style={{ width: '280px' }}>
                        <div className="ig-video-card">
                            <div className="ig-video-content">
                                <PlayCircle size={64} color="rgba(255,255,255,0.8)" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }} />
                            </div>
                            <div className="ig-video-overlay" />
                            <div className="ig-footer" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                                <div className="ig-username">
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }} />
                                    {reel.user}
                                </div>
                                <p className="ig-caption">{reel.caption}</p>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{reel.views} views</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <a href="#" className="btn glass-panel" style={{ padding: '0.8rem 2rem' }}>@datosahora_academy</a>
            </div>
        </section>
    );
};

export const Home = () => {
    return (
        <motion.div {...pageTransition} style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
            {/* GEOMETRIC BACKGROUND SHAPES */}
            <div className="bg-shape-1" />
            <div className="bg-shape-2" />

            {/* HERO SECTION */}
            <section className="container section" style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                        Discover Your Potential. Build Skills. Start Earning.
                    </span>
                    <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', textWrap: 'balance', fontWeight: 800 }}>
                        Transform Your Career with <br /><span className="text-gradient">Structured Skill Development</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                        DATOSAHORA empowers housewives, students, and targeted individuals to build professional skills and start earning through high-impact training and gamified mentorship.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/services" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem', boxShadow: '0 10px 30px rgba(230,57,70,0.3)' }}>
                            Start Your Career Journey
                        </a>
                        <a href="#programs" className="btn glass-panel" style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem' }}>
                            Explore Programs
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* ABOUT US PORTRAIT SECTION */}
            <section className="section" style={{ position: 'relative', zIndex: 1, padding: '6rem 0' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-panel"
                        style={{ padding: '3rem', position: 'relative', borderLeft: '4px solid var(--accent-red)' }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Empowering People to Build a <span className="text-gradient-red">Career from Anywhere</span></h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                            Founded by <strong>Hamzath Sufide P S</strong>, Datosahora is built on a singular vision: to strip away the dependency that holds people back from realizing their true potential. We believe financial independence is not a privilege, but a right accessible to everyone.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            Whether you are a homemaker looking to reclaim your identity, a student needing direction, or someone seeking to restart a stalled career, our configured learning platform is designed to transform beginners into confident professionals.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
                    >
                        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', borderTop: '2px solid var(--accent-gold)' }}>
                            <h3 style={{ fontSize: '2.5rem', color: 'white' }}>10K+</h3>
                            <p style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Lives Impacted</p>
                        </div>
                        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', borderTop: '2px solid var(--accent-red)' }}>
                            <h3 style={{ fontSize: '2.5rem', color: 'white' }}>95%</h3>
                            <p style={{ color: 'var(--accent-red)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Success Rate</p>
                        </div>
                        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', gridColumn: '1 / -1', background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(212,175,55,0.05))' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Gamified Learning</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Earn XP, level up, and achieve financial independence.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* INSTAGRAM FEED (NEW SECTION) */}
            <InstagramFeed />

            {/* OUR PROGRAMS CAROUSEL */}
            <section id="programs" className="section" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem' }}>Focused <span className="text-gradient">Career Tracks</span></h2>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Swipe right to explore our deeply structured programs.</p>
                        </div>
                        <a href="/services" className="btn glass-panel">View All Curriculum</a>
                    </div>
                </div>

                <div className="container scroll-carousel">
                    {/* Housewives Card */}
                    <div className="carousel-item">
                        <div className="glass-panel" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', borderTop: '2px solid var(--accent-red)' }}>
                            <HeartHandshake size={32} color="var(--accent-red)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Career Restart for Housewives</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1 }}>Rediscover your potential and build income-generating digital skills from home. Master time management and unlock the 'hidden hours'.</p>
                            <a href="/programs/housewives" style={{ color: 'var(--accent-gold)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>Explore track <ArrowRight size={16} /></a>
                        </div>
                    </div>

                    {/* Students Card */}
                    <div className="carousel-item">
                        <div className="glass-panel" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', borderTop: '2px solid var(--accent-gold)' }}>
                            <BookOpen size={32} color="var(--accent-gold)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Skill Development for Students</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1 }}>Bridge the gap between academia and application. Build a strong personal brand, learn modern tools, and secure your first internship.</p>
                            <a href="/programs/students" style={{ color: 'var(--accent-gold)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>Explore track <ArrowRight size={16} /></a>
                        </div>
                    </div>

                    {/* Unemployed Card */}
                    <div className="carousel-item">
                        <div className="glass-panel" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', borderTop: '2px solid #00b4d8' }}>
                            <Users size={32} color="#00b4d8" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Transformation for Unemployed</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1 }}>Break out of the rut. We provide psychological confidence building alongside hard digital skills to help you build a sustainable income.</p>
                            <a href="/programs/unemployed" style={{ color: 'var(--accent-gold)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>Explore track <ArrowRight size={16} /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* PILL-BASED SKILLS SECTION */}
            <section className="container section" style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: '6rem 0' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Master <span className="text-gradient">High-Demand Tools</span></h2>
                <div className="skill-pills-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {['Freelancing', 'Social Media Management', 'Digital Marketing', 'Content Creation', 'Canva Designing', 'Online Tutoring', 'Affiliate Marketing', 'Personal Branding', 'Copywriting', 'Remote Assistance'].map((skill, i) => (
                        <div key={i} className="skill-pill">
                            <Zap size={14} color="var(--accent-gold)" />
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* CLEAN TESTIMONIAL GRID */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 1 }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Real <span className="text-gradient">Transformations.</span></h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { name: "Anjali M.", role: "Housewife to Freelancer", text: "The career restart program showed me the 'hidden hours'. I now manage social media clients entirely from my phone." },
                            { name: "Rahul S.", role: "Student & Content Creator", text: "The skills training gave me clarity. I learned digital marketing and leveraged it to secure my first remote internship." },
                            { name: "Priya K.", role: "Virtual Assistant", text: "Career guidance for the unemployed is rare. Datosahora gave me complete confidence, accountability, and a roadmap to earn." }
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-panel" style={{ padding: '2.5rem', position: 'relative' }}
                            >
                                <MessageSquareQuote size={24} color="rgba(255,255,255,0.1)" style={{ position: 'absolute', top: '2rem', right: '2rem' }} />
                                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>"{testimonial.text}"</p>
                                <div>
                                    <h4 style={{ color: 'white', marginBottom: '0.2rem' }}>{testimonial.name}</h4>
                                    <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem' }}>{testimonial.role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="container section" style={{ textAlign: 'center', padding: '8rem 0', position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 800 }}>Start Your Story <span className="text-gradient">Today</span></h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                    Stop scrolling and start building. Join a community of targeted learners turning their hidden potential into independent income.
                </p>
                <a href="/services" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}>
                    Join The Bootcamp Now
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
