'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-isro-darker relative overflow-hidden">
      {/* Themed background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/mediseg-bg.svg)' }} />
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/55 via-slate-950/45 to-slate-950/85" />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(45,212,191,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center font-bold text-white text-lg">
              MS
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-white">MEDISEG</h1>
              <p className="text-xs text-gray-500 font-mono">Autodesk | SIH 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/mediseg/presentation"
              className="hidden sm:block px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-colors border border-white/10 rounded-lg">
              Concept Deck
            </Link>
            <Link href="/mediseg/login"
              className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg hover:opacity-90 transition-all shadow-lg shadow-teal-500/25">
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-400/30 bg-teal-500/10 text-teal-300 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Smart Mobile Medical-Waste Collection & Segregation System
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight mb-6">
              Autonomous
              <span className="block bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                Medical-Waste Logistics
              </span>
              from Ward to Treatment
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              An AI-driven mobile rover that transports, sorts, and tracks hospital biomedical waste
              in real time — enforcing BMWM 2018 colour segregation and full-chain traceability
              without risking human handlers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/mediseg"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-xl shadow-teal-500/30 text-base">
                Launch Simulation →
              </Link>
              <a href="#modules"
                className="px-8 py-4 border border-white/10 text-gray-300 font-medium rounded-xl hover:bg-white/5 transition-all text-base">
                View Modules
              </a>
            </div>
          </div>

          {/* Module Cards */}
          <div id="modules" className="mt-32 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                tag: 'MODULE A',
                title: 'Autonomous Navigation & Collection',
                desc: 'LiDAR-driven patrol across hospital zones. The rover navigates autonomously to waste depots, picks up sealed BMW bags, and returns to the segregation bay — all while avoiding obstacles and staff.',
                points: ['A* Path Planning on Facility Map', 'Obstacle Avoidance (LiDAR)', 'Daily Patrol Scheduling', 'Auto-Docking & Autonomous Charging'],
                color: 'teal'
              },
              {
                tag: 'MODULE B',
                title: 'AI Waste Recognition & Segregation',
                desc: 'An on-board YOLOv8 vision model classifies each bag by BMWM 2018 category with 98% accuracy, then drops it into the correct colour-coded compartment via a sorting mechanism.',
                points: ['YOLOv8 Waste Classification (98%)', '5 Colour-Coded Compartments', 'QR-Code Chain-of-Custody', 'Real-Time Compliance Reporting'],
                color: 'emerald'
              }
            ].map((mod, i) => (
              <div key={i} className={`glass-card rounded-2xl p-8 transition-all duration-700 hover:glow-green ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 200}ms` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-600/20 border border-teal-500/20 flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-teal-400">{mod.tag}</span>
                    <h3 className="text-xl font-bold text-white">{mod.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{mod.desc}</p>
                <div className="space-y-3">
                  {mod.points.map((item, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* All-In-One Portal */}
          <div className="mt-24 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-400/30 bg-teal-500/10 text-teal-300 text-xs font-medium mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  All-In-One Project Portal
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Explore Everything</h2>
                <p className="text-gray-400 mt-3 max-w-2xl leading-relaxed">
                  From the problem introduction and secure authentication to the interactive working
                  prototype and full concept deck — the complete solution in one place.
                </p>
              </div>
              <Link href="/mediseg"
                className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl hover:opacity-90 transition-all shadow-lg shadow-teal-500/25 whitespace-nowrap">
                Launch Prototype →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: 'Introduction', desc: 'Problem context, impact of unsafe medical waste, and complete system architecture.', href: '/mediseg/intro' },
                { step: '02', title: 'Sign In / Register', desc: 'Secure portal with strong password validation, live strength meter, and sessions.', href: '/mediseg/login' },
                { step: '03', title: 'Working Prototype', desc: 'Interactive simulator — patrol, AI scanner (98%), BMWM 2018 segregation, tracking ledger.', href: '/mediseg' },
                { step: '04', title: 'Concept Deck', desc: 'Slide deck covering the SIH problem statement, methodology, and expected outcomes.', href: '/mediseg/presentation' }
              ].map((card, i) => (
                <Link key={i} href={card.href}
                  className="glass-card rounded-2xl p-6 block transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/20 to-emerald-600/20 border border-teal-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-2xl font-black text-white/10">{card.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-5">{card.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                    Open →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm text-gray-600">
              MediSeg | Smart Medical-Waste Collection & Segregation | Autodesk · Smart India Hackathon 2026
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}