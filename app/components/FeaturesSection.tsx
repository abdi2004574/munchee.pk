'use client';

import { motion } from 'framer-motion';
import {
    Brain,
    BarChart3,
    ShieldCheck,
    MessageSquare,
    Layers,
    Zap,
} from 'lucide-react';

const features = [
    {
        icon: <Brain size={28} />,
        title: 'AI Business Engine',
        description:
            'Custom COGS calculations, lead scoring, and content calendars auto-tailored for Textile, Real Estate, Restaurant, and more.',
        color: '#D4A843',
        gradient: 'linear-gradient(135deg, rgba(212, 168, 67, 0.12), rgba(212, 168, 67, 0.03))',
        border: 'rgba(212, 168, 67, 0.2)',
    },
    {
        icon: <BarChart3 size={28} />,
        title: 'Financial Autopilot',
        description:
            'Real-time P&L tracking, automated tax categorization, expense forecasting, and smart budgeting for Pakistani businesses.',
        color: '#4D9CFF',
        gradient: 'linear-gradient(135deg, rgba(10, 77, 166, 0.12), rgba(10, 77, 166, 0.03))',
        border: 'rgba(10, 77, 166, 0.2)',
    },
    {
        icon: <Layers size={28} />,
        title: 'Lead Pipeline',
        description:
            'AI-powered lead scraping, scoring, and nurturing. Automated WhatsApp follow-ups and conversion tracking.',
        color: '#D4A843',
        gradient: 'linear-gradient(135deg, rgba(212, 168, 67, 0.12), rgba(212, 168, 67, 0.03))',
        border: 'rgba(212, 168, 67, 0.2)',
    },
    {
        icon: <MessageSquare size={28} />,
        title: 'Content Command',
        description:
            'AI-generated social media posts, video scripts, and marketing campaigns aligned with Pakistani market trends.',
        color: '#4D9CFF',
        gradient: 'linear-gradient(135deg, rgba(10, 77, 166, 0.12), rgba(10, 77, 166, 0.03))',
        border: 'rgba(10, 77, 166, 0.2)',
    },
    {
        icon: <ShieldCheck size={28} />,
        title: 'Data Fortress',
        description:
            'Enterprise-grade RLS isolation, encrypted storage, and strict compliance with Pakistani data regulations.',
        color: '#D4A843',
        gradient: 'linear-gradient(135deg, rgba(212, 168, 67, 0.12), rgba(212, 168, 67, 0.03))',
        border: 'rgba(212, 168, 67, 0.2)',
    },
    {
        icon: <Zap size={28} />,
        title: 'Instant Insights',
        description:
            'Real-time dashboards with RTO analysis, revenue heatmaps, and AI-driven business advisory alerts.',
        color: '#4D9CFF',
        gradient: 'linear-gradient(135deg, rgba(10, 77, 166, 0.12), rgba(10, 77, 166, 0.03))',
        border: 'rgba(10, 77, 166, 0.2)',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' as const },
    },
};

export default function FeaturesSection() {
    return (
        <section className="relative z-10 px-6 py-32" id="features">
            {/* Background Accent */}
            <div
                className="absolute left-1/2 top-1/4 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[180px]"
                style={{ background: 'rgba(212, 168, 67, 0.04)' }}
            />

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20 text-center"
            >
                <div
                    className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2"
                    style={{
                        background: 'rgba(212, 168, 67, 0.08)',
                        border: '1px solid rgba(212, 168, 67, 0.2)',
                    }}
                >
                    <Zap size={14} style={{ color: '#D4A843' }} />
                    <span className="text-sm font-medium" style={{ color: '#D4A843' }}>
                        Powerful Features
                    </span>
                </div>
                <h2
                    className="text-4xl font-bold tracking-tight md:text-5xl"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                    <span className="text-white">Everything Your</span>
                    <br />
                    <span className="text-gradient-gold">Business Needs</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: '#808080' }}>
                    From AI-powered accounting to automated marketing — one platform to replace
                    your CA, PA, and marketing team.
                </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
                {features.map((feature) => (
                    <motion.div
                        key={feature.title}
                        variants={cardVariants}
                        className="group relative cursor-pointer rounded-2xl p-8 transition-all duration-500"
                        style={{
                            background: feature.gradient,
                            border: `1px solid ${feature.border}`,
                        }}
                        whileHover={{
                            y: -4,
                            boxShadow: `0 20px 60px ${feature.border}`,
                        }}
                    >
                        {/* Icon */}
                        <div
                            className="mb-5 inline-flex rounded-xl p-3 transition-all duration-300 group-hover:scale-110"
                            style={{
                                background: `rgba(${feature.color === '#D4A843' ? '212, 168, 67' : '10, 77, 166'}, 0.1)`,
                                color: feature.color,
                            }}
                        >
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>

                        {/* Description */}
                        <p className="text-sm leading-relaxed" style={{ color: '#B0B0B0' }}>
                            {feature.description}
                        </p>

                        {/* Hover Glow */}
                        <div
                            className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            style={{
                                background: `radial-gradient(circle at center, ${feature.border}, transparent 70%)`,
                                filter: 'blur(40px)',
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
