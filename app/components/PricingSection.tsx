'use client';

import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Crown, Rocket, Building2 } from 'lucide-react';

const tiers = [
    {
        name: 'Foundation',
        icon: <Building2 size={24} />,
        price: '39',
        priceLabel: '/mo',
        description: 'Essential AI tools for solo founders & small shops.',
        color: '#4D9CFF',
        gradient: 'linear-gradient(135deg, rgba(10, 77, 166, 0.1), rgba(10, 77, 166, 0.02))',
        border: 'rgba(10, 77, 166, 0.15)',
        hoverBorder: 'rgba(10, 77, 166, 0.4)',
        featured: false,
        features: [
            'Basic COGS Calculator',
            'Expense Tracking (Manual)',
            'Monthly P&L Report',
            '5 AI Content Posts / Month',
            'Email Support',
            '1 Business Profile',
        ],
    },
    {
        name: 'Growth Agent',
        icon: <Rocket size={24} />,
        price: '179',
        priceLabel: '/mo',
        description: 'Full AI agent suite for scaling businesses.',
        color: '#D4A843',
        gradient: 'linear-gradient(135deg, rgba(212, 168, 67, 0.12), rgba(212, 168, 67, 0.03))',
        border: 'rgba(212, 168, 67, 0.25)',
        hoverBorder: 'rgba(212, 168, 67, 0.6)',
        featured: true,
        features: [
            'AI COGS & Pricing Engine',
            'Automated Expense Tracking',
            'Real-time Financial Dashboard',
            'Unlimited AI Content Posts',
            'Lead Scraping & Pipeline',
            'WhatsApp Auto Follow-ups',
            'Priority Support',
            '3 Business Profiles',
        ],
    },
    {
        name: 'Elite Business',
        icon: <Crown size={24} />,
        price: '449',
        priceLabel: '/mo',
        description: 'Enterprise CA/PA with dedicated AI workforce.',
        color: '#D4A843',
        gradient: 'linear-gradient(135deg, rgba(212, 168, 67, 0.08), rgba(10, 77, 166, 0.04))',
        border: 'rgba(212, 168, 67, 0.15)',
        hoverBorder: 'rgba(212, 168, 67, 0.4)',
        featured: false,
        features: [
            'Everything in Growth Agent',
            'Dedicated AI Business Advisor',
            'Custom Tax Optimization',
            'Video Content Generation',
            'Multi-channel Marketing',
            'Advanced RTO Analytics',
            'API Access & Integrations',
            'Unlimited Business Profiles',
            'Dedicated Account Manager',
        ],
    },
];

export default function PricingSection() {
    return (
        <section className="relative z-10 px-6 py-32" id="pricing">
            {/* Background Accent */}
            <div
                className="absolute right-1/4 top-1/3 -z-10 h-[500px] w-[500px] rounded-full blur-[200px]"
                style={{ background: 'rgba(10, 77, 166, 0.04)' }}
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
                    <Star size={14} style={{ color: '#D4A843' }} />
                    <span className="text-sm font-medium" style={{ color: '#D4A843' }}>
                        Simple Pricing
                    </span>
                </div>
                <h2
                    className="text-4xl font-bold tracking-tight md:text-5xl"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                    <span className="text-white">Choose Your</span>{' '}
                    <span className="text-gradient-gold">Growth Plan</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: '#808080' }}>
                    All plans include a 14-day free trial. No credit card required. Cancel anytime.
                </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                {tiers.map((tier, index) => (
                    <motion.div
                        key={tier.name}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="group relative flex flex-col rounded-2xl p-8 transition-all duration-500"
                        style={{
                            background: tier.gradient,
                            border: `1px solid ${tier.border}`,
                            transform: tier.featured ? 'scale(1.02)' : undefined,
                        }}
                    >
                        {/* Featured Badge */}
                        {tier.featured && (
                            <div
                                className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
                                style={{
                                    background: 'linear-gradient(135deg, #FFD24D, #D4A843)',
                                    color: '#080808',
                                }}
                            >
                                Most Popular
                            </div>
                        )}

                        {/* Header */}
                        <div className="mb-6">
                            <div className="mb-3 flex items-center gap-2" style={{ color: tier.color }}>
                                {tier.icon}
                                <span className="text-lg font-bold">{tier.name}</span>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-xl font-medium" style={{ color: '#808080' }}>
                                    $
                                </span>
                                <span
                                    className="text-5xl font-extrabold text-white"
                                    style={{ fontFamily: "'Outfit', sans-serif" }}
                                >
                                    {tier.price}
                                </span>
                                <span className="text-base" style={{ color: '#808080' }}>
                                    {tier.priceLabel}
                                </span>
                            </div>
                            <p className="mt-3 text-sm" style={{ color: '#B0B0B0' }}>
                                {tier.description}
                            </p>
                        </div>

                        {/* Divider */}
                        <div
                            className="mb-6 h-px"
                            style={{
                                background: `linear-gradient(90deg, transparent, ${tier.border}, transparent)`,
                            }}
                        />

                        {/* Features */}
                        <ul className="mb-8 flex-1 space-y-3">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                    <Check
                                        size={16}
                                        className="mt-0.5 flex-shrink-0"
                                        style={{ color: tier.color }}
                                    />
                                    <span className="text-sm" style={{ color: '#E0E0E0' }}>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <button
                            className="group/btn flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                            style={{
                                background: tier.featured
                                    ? 'linear-gradient(135deg, #FFD24D, #D4A843)'
                                    : 'rgba(255, 255, 255, 0.05)',
                                border: tier.featured ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                                color: tier.featured ? '#080808' : '#E0E0E0',
                                boxShadow: tier.featured
                                    ? '0 0 30px rgba(212, 168, 67, 0.2)'
                                    : 'none',
                            }}
                        >
                            <span>Get Started</span>
                            <ArrowRight
                                size={16}
                                className="transition-transform group-hover/btn:translate-x-1"
                            />
                        </button>

                        {/* Hover Glow */}
                        <div
                            className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            style={{
                                background: `radial-gradient(circle at center, ${tier.border}, transparent 70%)`,
                                filter: 'blur(60px)',
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Bottom Note */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 text-center text-sm"
                style={{ color: '#505050' }}
            >
                Prices in USD. Pakistani Rupee billing available via JazzCash & EasyPaisa.
            </motion.p>
        </section>
    );
}
