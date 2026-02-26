'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
            >
                <div
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5"
                    style={{
                        background: 'rgba(212, 168, 67, 0.08)',
                        border: '1px solid rgba(212, 168, 67, 0.2)',
                        backdropFilter: 'blur(12px)',
                    }}
                >
                    <Sparkles size={14} className="text-[#D4A843]" />
                    <span
                        className="text-sm font-medium tracking-wider uppercase"
                        style={{ color: '#D4A843' }}
                    >
                        Pakistan&apos;s First Agentic SaaS
                    </span>
                </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl"
                style={{ fontFamily: "'Outfit', sans-serif" }}
            >
                <span className="text-gradient-gold">Your Online</span>
                <br />
                <span className="text-white">CA &amp; PA</span>
                <br />
                <span
                    style={{
                        background: 'linear-gradient(135deg, #4D9CFF 0%, #1A80FF 40%, #0A4DA6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    For Every Business
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl"
                style={{ color: '#B0B0B0' }}
            >
                AI-powered chartered accountancy &amp; personal assistant that manages your
                COGS, leads, content, and finances —{' '}
                <span style={{ color: '#D4A843' }}>so you focus on growing.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
                <button
                    className="group relative flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105"
                    style={{
                        background: 'linear-gradient(135deg, #FFD24D 0%, #D4A843 50%, #B8922E 100%)',
                        boxShadow: '0 0 30px rgba(212, 168, 67, 0.3), 0 10px 40px rgba(212, 168, 67, 0.15)',
                    }}
                >
                    <span>Start Free Trial</span>
                    <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                    />
                    <div
                        className="animate-shimmer absolute inset-0 rounded-full"
                        style={{ pointerEvents: 'none' }}
                    />
                </button>

                <button
                    className="flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105"
                    style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#E0E0E0',
                        backdropFilter: 'blur(12px)',
                    }}
                >
                    <span>See How It Works</span>
                </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-16 flex items-center gap-8"
            >
                {[
                    { label: 'Active Businesses', value: '500+' },
                    { label: 'Saved Annually', value: 'PKR 2M+' },
                    { label: 'AI Tasks / Day', value: '10K+' },
                ].map((stat) => (
                    <div key={stat.label} className="text-center">
                        <div
                            className="text-2xl font-bold"
                            style={{
                                background: 'linear-gradient(135deg, #FFD24D, #D4A843)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {stat.value}
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-wider" style={{ color: '#808080' }}>
                            {stat.label}
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest" style={{ color: '#505050' }}>
                        Scroll to Explore
                    </span>
                    <div
                        className="h-10 w-5 rounded-full"
                        style={{ border: '1px solid rgba(212, 168, 67, 0.3)' }}
                    >
                        <motion.div
                            animate={{ y: [2, 18, 2] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="mx-auto mt-1 h-2 w-1 rounded-full"
                            style={{ background: '#D4A843' }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
