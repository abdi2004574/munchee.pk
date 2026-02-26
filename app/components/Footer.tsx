'use client';

import { Sparkles } from 'lucide-react';

const footerLinks = [
    {
        title: 'Product',
        links: [
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'ROI Calculator', href: '#roi-calculator' },
            { label: 'Changelog', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Contact', href: '#' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' },
            { label: 'Refund Policy', href: '#' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="relative z-10 px-6 pb-8 pt-20">
            {/* Divider */}
            <div className="section-divider mx-auto mb-16 max-w-6xl" />

            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <a href="/" className="mb-4 flex items-center gap-2">
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
                        <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: '#808080' }}>
                            Pakistan&apos;s first AI-powered Online CA &amp; PA. Automating business
                            operations so you can focus on growth.
                        </p>
                    </div>

                    {/* Links */}
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h4
                                className="mb-4 text-sm font-semibold uppercase tracking-wider"
                                style={{ color: '#D4A843' }}
                            >
                                {group.title}
                            </h4>
                            <ul className="space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm transition-colors duration-300 hover:text-white"
                                            style={{ color: '#808080' }}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div
                    className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                    <p className="text-xs" style={{ color: '#505050' }}>
                        © {new Date().getFullYear()} Munchee.pk — All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-xs" style={{ color: '#505050' }}>
                            Built with 🇵🇰 in Pakistan
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
