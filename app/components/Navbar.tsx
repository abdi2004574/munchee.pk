'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'ROI Calculator', href: '#roi-calculator' },
    { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed left-0 right-0 top-0 z-50 px-6 py-4"
        >
            <div
                className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-6 py-3"
                style={{
                    background: 'rgba(8, 8, 8, 0.7)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(212, 168, 67, 0.08)',
                }}
            >
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <div
                        className="flex h-8 w-8 items-center justify-center rounded-lg"
                        style={{
                            background: 'linear-gradient(135deg, #D4A843, #B8922E)',
                        }}
                    >
                        <Sparkles size={16} className="text-black" />
                    </div>
                    <span
                        className="text-lg font-bold"
                        style={{
                            fontFamily: "'Outfit', sans-serif",
                            background: 'linear-gradient(135deg, #FFD24D, #D4A843)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Munchee.pk
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium transition-colors duration-300 hover:text-[#D4A843]"
                            style={{ color: '#B0B0B0' }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden items-center gap-3 md:flex">
                    <a
                        href="#"
                        className="text-sm font-medium transition-colors duration-300 hover:text-white"
                        style={{ color: '#B0B0B0' }}
                    >
                        Sign In
                    </a>
                    <a
                        href="#"
                        className="rounded-full px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
                        style={{
                            background: 'linear-gradient(135deg, #FFD24D, #D4A843)',
                            boxShadow: '0 0 20px rgba(212, 168, 67, 0.15)',
                        }}
                    >
                        Start Free
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{ color: '#D4A843' }}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl"
                        style={{
                            background: 'rgba(8, 8, 8, 0.95)',
                            backdropFilter: 'blur(24px)',
                            border: '1px solid rgba(212, 168, 67, 0.1)',
                        }}
                    >
                        <div className="flex flex-col gap-2 p-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300"
                                    style={{ color: '#B0B0B0' }}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="mt-2 border-t border-white/5 pt-4">
                                <a
                                    href="#"
                                    className="block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold text-black"
                                    style={{
                                        background: 'linear-gradient(135deg, #FFD24D, #D4A843)',
                                    }}
                                >
                                    Start Free Trial
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
