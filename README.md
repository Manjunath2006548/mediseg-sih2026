# MediSeg — Smart Mobile Medical-Waste Collection & Segregation System

**Autodesk · Smart India Hackathon 2026** — A fully self-contained Next.js (static export) web solution:
an AI-driven mobile rover that transports, sorts, and tracks hospital biomedical waste, enforcing
BMWM 2018 colour segregation with full chain-of-custody traceability.

## Pages

| Route                       | Purpose                                              |
| --------------------------- | ---------------------------------------------------- |
| `/`                         | All-in-one portal / landing                          |
| `/mediseg/intro`            | Introduction, problem context, system architecture   |
| `/mediseg/login`            | Login / Register with strong password validation     |
| `/mediseg`                  | Interactive working prototype (autonomous simulator) |
| `/mediseg/presentation`     | Concept deck (presentation slides)                   |


https://mediseg-sih2026.vercel.app/

## Features

- Autonomous patrol simulation on a facility floor plan (A* style waypoints, obstacle avoidance)
- AI waste scanner (YOLOv8-style simulation, ~98% accuracy) with live camera feed UI
- BMWM 2018 segregation into 5 colour-coded compartments
- Real-time tracking ledger with compliance report
- Login session with strong-password checker and live strength meter
- Fully static export (no backend required) — deployable to Vercel / Netlify / GitHub Pages

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

## User Guide

The complete LaTeX user guide lives at [`docs/UserGuide.tex`](docs/UserGuide.tex) —
covers the login flow, every application page, the interactive simulation,
developer setup, deployment, and troubleshooting. Compile with `pdflatex UserGuide.tex`.

## Deploy

```bash
vercel --prod --yes
```
