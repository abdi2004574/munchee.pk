'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Users, BarChart3, Zap } from 'lucide-react';

const businessTypes = [
    { id: 'textile', label: 'Textile / Fashion', icon: '🧵', monthlyCost: 85000, savings: 0.35 },
    { id: 'restaurant', label: 'Restaurant / Café', icon: '🍽️', monthlyCost: 65000, savings: 0.30 },
    { id: 'realestate', label: 'Real Estate', icon: '🏠', monthlyCost: 120000, savings: 0.40 },
    { id: 'ecommerce', label: 'E-Commerce', icon: '🛒', monthlyCost: 55000, savings: 0.32 },
    { id: 'services', label: 'Professional Services', icon: '💼', monthlyCost: 95000, savings: 0.38 },
];

function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const duration = 1200;
        const steps = 40;
        const stepValue = value / steps;
        let current = 0;
        const interval = setInterval(() => {
            current += stepValue;
            if (current >= value) {
                setDisplay(value);
                clearInterval(interval);
            } else {
                setDisplay(Math.round(current));
            }
        }, duration / steps);
        return () => clearInterval(interval);
    }, [value]);

    return (
        <span>
            {prefix}
            {display.toLocaleString('en-PK')}
            {suffix}
        </span>
    );
}

export default function ROICalculator() {
    const [selected, setSelected] = useState('textile');
    const [employees, setEmployees] = useState(5);

    const biz = businessTypes.find((b) => b.id === selected)!;
    const currentCost = biz.monthlyCost * (employees / 5);
    const savedAmount = Math.round(currentCost * biz.savings);
    const annualSavings = savedAmount * 12;
    const hoursFreed = Math.round(employees * 18 * biz.savings);

    return (
        <section className="relative z-10 px-6 py-32" id="roi-calculator">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 text-center"
            >
                <div
                    className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2"
                    style={{
                        background: 'rgba(10, 77, 166, 0.1)',
                        border: '1px solid rgba(10, 77, 166, 0.2)',
                    }}
                >
                    <Calculator size={14} style={{ color: '#4D9CFF' }} />
                    <span className="text-sm font-medium" style={{ color: '#4D9CFF' }}>
                        ROI Calculator
                    </span>
                </div>
                <h2
                    className="text-4xl font-bold tracking-tight md:text-5xl"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                    <span className="text-white">See Your</span>{' '}
                    <span className="text-gradient-gold">Savings</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: '#808080' }}>
                    Select your business type and team size to see how much Munchee.pk saves you.
                </p>
            </motion.div>

            <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row">
                {/* Left: Controls */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1"
                >
                    <div className="glass-card p-8">
                        <h3 className="mb-6 text-lg font-semibold text-white">Your Business</h3>

                        {/* Business Type Selector */}
                        <div className="mb-8 flex flex-wrap gap-3">
                            {businessTypes.map((bType) => (
                                <button
                                    key={bType.id}
                                    onClick={() => setSelected(bType.id)}
                                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300"
                                    style={{
                                        background:
                                            selected === bType.id
                                                ? 'linear-gradient(135deg, rgba(212, 168, 67, 0.15), rgba(212, 168, 67, 0.05))'
                                                : 'rgba(255, 255, 255, 0.03)',
                                        border:
                                            selected === bType.id
                                                ? '1px solid rgba(212, 168, 67, 0.4)'
                                                : '1px solid rgba(255, 255, 255, 0.06)',
                                        color: selected === bType.id ? '#FFD24D' : '#B0B0B0',
                                    }}
                                >
                                    <span>{bType.icon}</span>
                                    <span>{bType.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Employee Slider */}
                        <div className="mb-6">
                            <div className="mb-3 flex items-center justify-between">
                                <span className="text-sm font-medium" style={{ color: '#B0B0B0' }}>
                                    Team Size
                                </span>
                                <span
                                    className="rounded-lg px-3 py-1 text-sm font-bold"
                                    style={{
                                        background: 'rgba(212, 168, 67, 0.1)',
                                        color: '#FFD24D',
                                    }}
                                >
                                    {employees} people
                                </span>
                            </div>
                            <input
                                type="range"
                                min={1}
                                max={50}
                                value={employees}
                                onChange={(e) => setEmployees(parseInt(e.target.value))}
                                className="w-full"
                                style={{
                                    accentColor: '#D4A843',
                                    height: '6px',
                                }}
                            />
                            <div className="mt-2 flex justify-between text-xs" style={{ color: '#505050' }}>
                                <span>1</span>
                                <span>50</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Results */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex-1"
                >
                    <div className="glass-card p-8">
                        <h3 className="mb-6 text-lg font-semibold text-white">Your Savings</h3>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${selected}-${employees}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                {/* Main Savings */}
                                <div
                                    className="rounded-2xl p-6 text-center"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(212, 168, 67, 0.1), rgba(212, 168, 67, 0.03))',
                                        border: '1px solid rgba(212, 168, 67, 0.2)',
                                    }}
                                >
                                    <p className="mb-2 text-sm uppercase tracking-wider" style={{ color: '#808080' }}>
                                        Annual Savings
                                    </p>
                                    <div
                                        className="text-4xl font-extrabold md:text-5xl"
                                        style={{
                                            background: 'linear-gradient(135deg, #FFD24D, #D4A843)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            fontFamily: "'Outfit', sans-serif",
                                        }}
                                    >
                                        <AnimatedNumber value={annualSavings} prefix="PKR " />
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        {
                                            icon: <DollarSign size={18} />,
                                            label: 'Monthly Saved',
                                            value: `PKR ${savedAmount.toLocaleString()}`,
                                            color: '#D4A843',
                                        },
                                        {
                                            icon: <TrendingUp size={18} />,
                                            label: 'Cost Reduction',
                                            value: `${Math.round(biz.savings * 100)}%`,
                                            color: '#4D9CFF',
                                        },
                                        {
                                            icon: <Users size={18} />,
                                            label: 'Hours Freed/Mo',
                                            value: `${hoursFreed}h`,
                                            color: '#D4A843',
                                        },
                                        {
                                            icon: <BarChart3 size={18} />,
                                            label: 'Efficiency Gain',
                                            value: `${Math.round(biz.savings * 100 + 15)}%`,
                                            color: '#4D9CFF',
                                        },
                                    ].map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="rounded-xl p-4"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.02)',
                                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                            }}
                                        >
                                            <div className="mb-2" style={{ color: stat.color }}>
                                                {stat.icon}
                                            </div>
                                            <div className="text-xl font-bold text-white">{stat.value}</div>
                                            <div className="mt-1 text-xs" style={{ color: '#808080' }}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <button
                                    className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                                    style={{
                                        background: 'linear-gradient(135deg, #FFD24D, #D4A843)',
                                        boxShadow: '0 0 20px rgba(212, 168, 67, 0.2)',
                                    }}
                                >
                                    <Zap size={16} />
                                    Start Saving Now
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
