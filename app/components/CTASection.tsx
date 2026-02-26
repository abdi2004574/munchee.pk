'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="relative z-10 px-6 py-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-12 text-center md:p-20"
                style={{
                    background:
                        'linear-gradient(135deg, rgba(212, 168, 67, 0.08) 0%, rgba(10, 77, 166, 0.06) 50%, rgba(255, 255, 255, 0.02) 100%)',
                    border: '1px solid rgba(212, 168, 67, 0.15)',
                }}
            >
                {/* Background Orbs */}
                <div
                    className="absolute -left-20 -top-20 h-60 w-60 rounded-full blur-[120px]"
                    style={{ background: 'rgba(212, 168, 67, 0.08)' }}
                />
                <div
                    className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full blur-[120px]"
                    style={{ background: 'rgba(10, 77, 166, 0.08)' }}
                />

                <div className="relative z-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
                        className="mx-auto mb-6 inline-flex rounded-full p-4"
                        style={{
                            background: 'rgba(212, 168, 67, 0.1)',
                            border: '1px solid rgba(212, 168, 67, 0.2)',
                        }}
                    >
                        <Sparkles size={28} style={{ color: '#D4A843' }} />
                    </motion.div>

                    <h2
                        className="text-4xl font-bold tracking-tight md:text-5xl"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        <span className="text-white">Ready to</span>{' '}
                        <span className="text-gradient-gold">Transform</span>
                        <br />
                        <span className="text-white">Your Business?</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-lg text-base" style={{ color: '#B0B0B0' }}>
                        Join 500+ Pakistani businesses already saving lakhs with AI-powered CA/PA.
                        Start your free trial today — no credit card needed.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button
                            className="group flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, #FFD24D, #D4A843, #B8922E)',
                                boxShadow:
                                    '0 0 30px rgba(212, 168, 67, 0.3), 0 10px 40px rgba(212, 168, 67, 0.15)',
                            }}
                        >
                            <span>Start 14-Day Free Trial</span>
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>

                        <button
                            className="rounded-full px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#E0E0E0',
                            }}
                        >
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
