import React, { useMemo } from 'react';

export const BackgroundGalaxy = () => {
    // Generate random positions and animations for asteroids
    const asteroids = useMemo(() => {
        return Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            size: Math.random() * 40 + 20,
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: Math.random() * 40 + 60,
            delay: Math.random() * -60,
            rotate: Math.random() * 360,
            driftX: (Math.random() - 0.5) * 10,
            driftY: (Math.random() - 0.5) * 10,
        }));
    }, []);

    // Generate stars for the particle layer
    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: Math.random() * 5 + 3,
            delay: Math.random() * -5,
        }));
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            backgroundColor: '#050406', // Deep galactic black
        }}>
            {/* Main Galaxy Image with Pan & Zoom */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '120%',
                height: '120%',
                backgroundImage: 'url("/cinematic_red_purple_galaxy_asteroids_789_1773950474860.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animation: 'kenBurns 120s ease-in-out infinite alternate',
                opacity: 0.85,
            }} />

            {/* Particle Layer (Stars) */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                {particles.map(p => (
                    <div
                        key={p.id}
                        style={{
                            position: 'absolute',
                            top: `${p.top}%`,
                            left: `${p.left}%`,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            opacity: 0.6,
                            animation: `particleTwinkle ${p.duration}s ease-in-out infinite alternate`,
                            animationDelay: `${p.delay}s`,
                            boxShadow: '0 0 10px white',
                        }}
                    />
                ))}
            </div>

            {/* Asteroid Layer */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                {asteroids.map(a => (
                    <div
                        key={a.id}
                        style={{
                            position: 'absolute',
                            top: `${a.top}%`,
                            left: `${a.left}%`,
                            width: `${a.size}px`,
                            height: `${a.size}px`,
                            opacity: 0.4,
                            animation: `asteroidDrift ${a.duration}s linear infinite`,
                            animationDelay: `${a.delay}s`,
                            filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))',
                        }}
                    >
                        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', fill: '#332c38', transform: `rotate(${a.rotate}deg)` }}>
                            <path d="M20,30 C30,10 70,10 80,30 C90,50 80,90 50,90 C20,90 10,50 20,30 Z" />
                            <circle cx="40" cy="40" r="5" fill="#1a161e" />
                            <circle cx="60" cy="65" r="8" fill="#1a161e" />
                            <circle cx="30" cy="70" r="4" fill="#1a161e" />
                        </svg>
                    </div>
                ))}
            </div>

            {/* Atmospheric Depth Overlays */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(160, 32, 240, 0.05) 0%, rgba(230, 57, 70, 0.05) 50%, rgba(10, 10, 10, 0.9) 100%)',
                pointerEvents: 'none',
            }} />

            <style>{`
                @keyframes kenBurns {
                    0% { transform: scale(1) translate(0, 0); }
                    50% { transform: scale(1.1) translate(-2%, -1%); }
                    100% { transform: scale(1.05) translate(1%, 2%); }
                }
                @keyframes particleTwinkle {
                    0% { opacity: 0.2; transform: scale(0.8); }
                    100% { opacity: 0.8; transform: scale(1.2); }
                }
                @keyframes asteroidDrift {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    100% { transform: translate(100px, 50px) rotate(360deg); }
                }
            `}</style>
        </div>
    );
};
