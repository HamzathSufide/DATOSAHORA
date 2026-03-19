import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, Search, Tag, MessageSquare, Heart } from 'lucide-react';
import { pageTransition, Float3D } from './pages';

export const Blog = () => {
    const articles = [
        {
            title: "Career Restart Program for Housewives: A Complete Guide",
            category: "Housewives",
            date: "Mar 15, 2026",
            excerpt: "Learn how housewives can identify their hidden skills, manage time effectively, and transition into high-paying remote roles."
        },
        {
            title: "Best Online Skill Development Courses for Students",
            category: "Students",
            date: "Mar 10, 2026",
            excerpt: "Discover the top digital skills students should learn today to guarantee job readiness before graduation."
        },
        {
            title: "Online Income Opportunities: A Path for the Unemployed",
            category: "Career Growth",
            date: "Mar 05, 2026",
            excerpt: "Struggling to find a job? Explore legitimate online income streams and freelancing strategies."
        },
        {
            title: "Freelancing Training Program: A Beginner's Guide",
            category: "Freelancing",
            date: "Feb 28, 2026",
            excerpt: "From setting up your profile to landing your first client, here is everything you need to know."
        },
        {
            title: "Time Management Tips for Mothers Working From Home",
            category: "Housewives",
            date: "Feb 20, 2026",
            excerpt: "Balancing family life and a remote career is challenging but possible. Here are 5 actionable strategies."
        },
        {
            title: "Confidence Building Techniques for Professional Success",
            category: "Soft Skills",
            date: "Feb 15, 2026",
            excerpt: "Your mindset dictates your success. Learn psychological techniques to boost your career confidence."
        }
    ];

    return (
        <motion.div {...pageTransition} className="container section" style={{ position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <BookOpen size={48} color="var(--accent-gold)" style={{ margin: '0 auto 1.5rem' }} />
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Kanlearn <span className="text-image-clip">Blog</span></h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Insights, strategies, and stories on career transformation, freelancing, and digital skills.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    {articles.map((article, i) => (
                        <Float3D key={i} delay={i * 0.1}>
                            <div
                                className="glass-panel"
                                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                    <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>{article.category}</span>
                                    <span style={{ color: 'var(--text-secondary)' }}>{article.date}</span>
                                </div>
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.4 }}>{article.title}</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{article.excerpt}</p>
                                <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', color: 'white', fontWeight: 'bold', padding: 0, marginTop: 'auto' }}>
                                    Read Article <ArrowRight size={16} color="var(--accent-gold)" />
                                </button>
                            </div>
                        </Float3D>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
