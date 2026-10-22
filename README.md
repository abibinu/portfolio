# Abi Binu - Software Developer Portfolio

A modern, high-performance developer portfolio showcasing enterprise backend engineering, clean architecture principles, and full-stack software solutions.

Live Site: https://abibinu.github.io/portfolio/

## Overview

This portfolio presents the software engineering projects, technical competencies, academic journey, and verified credentials of Abi Binu, a Software Developer and Master of Computer Applications (MCA) candidate. The application is built using React 19, Vite, and Tailwind CSS v4, featuring a custom WebGL shader background, an interactive developer terminal loader, and responsive layouts optimized across mobile, tablet, and desktop devices.

## Key Features

- Interactive Developer Terminal Loader: Simulates build steps, compilation logs, and asset hydration with a skip option and persistent progress state.
- WebGL DarkVeil Shader Background: Hardware-accelerated fluid atmospheric canvas rendered via OGL.
- Ambient Cursor and Touch Glow: Radial cursor tracking on desktop and smooth fade-in and fade-out touch response on mobile viewports without particle clutter.
- Outside-to-Outside Skills Streams: Continuous, non-blocking dual-lane marquee displaying language, framework, database, and infrastructure proficiencies without hover pauses.
- Categorized Skills Inventory: Detailed breakdown spanning Backend Architecture, Core Languages, Frontend/Mobile, and Databases/Cloud DevOps.
- Comprehensive Project Showcase:
  - Custom Lightweight API Gateway (C#, .NET 10, YARP, Fixed-Window Rate Limiting, Dynamic X-Correlation-ID Distributed Tracing, Edge JWT Validation)
  - AegisTrader (ASP.NET Core, React.js, PostgreSQL, Clean Architecture)
  - m1-ob-scalper (Python, MetaTrader 5 High-Frequency Market Streaming)
  - Mental Health App (Flutter, Express.js, PostgreSQL)
  - Clinic Management System (Django, MVT, PostgreSQL, Technopark Industrial Training)
  - E-Commerce Marketplace (React, MongoDB)
  - Machine Learning Disease Prediction Pipeline (Python, FastAPI, Scikit-Learn)
- Experience and Academic Journey: Interactive timeline highlighting MCA post-graduate education, BCA degree, Dreamvestor 2.0 Grand Finale qualification, and industrial training.
- Verified Credentials: Direct access and verification for Microsoft, Google, IIT Madras, IBM, and conference certifications.
- Resume Delivery: Integrated PDF preview and download mechanisms linked directly to verified assets with a clean, uncrowded layout.
- Telegram-Integrated Contact Channel: Direct form dispatch forwarding inbound messages straight to Telegram through secure Bot API endpoints.

## Tech Stack

### Core and Frameworks
- React 19
- Vite
- Tailwind CSS v4

### Graphics and Animation
- OGL (WebGL Shader Pipeline)
- Framer Motion

### Icons and Assets
- Lucide React
- React Icons (Si, Tb, Fa)

### Tooling and Deployment
- ESLint
- GitHub Pages (gh-pages)

## Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── projects/                  # Project screenshots and diagrams
│   │   ├── certificates/              # Credential documents
│   │   ├── profile.png                # Profile visual asset
│   │   └── Abi_Binu_SoftwareDeveloper.pdf # Current resume artifact
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx                  # Professional summary and bento grid
│   │   ├── BlurText.jsx               # Typography word animation component
│   │   ├── Certificates.jsx           # Credential cards and modal viewers
│   │   ├── Contact.jsx                # Contact cards and Telegram form
│   │   ├── CursorGlow.jsx             # Ambient canvas glow controller
│   │   ├── DarkVeil.jsx               # OGL WebGL shader canvas
│   │   ├── Hero.jsx                   # Hero section with primary CTAs
│   │   ├── Journey.jsx                # Educational and milestone timeline
│   │   ├── Loader.jsx                 # Terminal boot loader
│   │   ├── Navbar.jsx                 # Responsive navigation bar and drawer
│   │   ├── Projects.jsx               # Filterable project case studies
│   │   ├── ResumeSection.jsx          # Resume preview card and download
│   │   └── Skills.jsx                 # Marquee streams and skills matrix
│   ├── App.jsx                        # Root application layout
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Styling tokens and animations
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/abibinu/portfolio.git
cd portfolio
npm install
```

### Environment Configuration

To configure the contact form dispatch via Telegram, create a `.env` file in the root directory:

```env
VITE_TELEGRAM_BOT_TOKEN=your_telegram_bot_token
VITE_TELEGRAM_CHAT_ID=your_telegram_chat_id
```

### Local Development

Start the local Vite development server:

```bash
npm run dev
```

The application will be accessible at http://localhost:5173/.

### Building for Production

Compile the production-ready distribution bundle:

```bash
npm run build
```

The compiled assets will be output to the `dist/` directory.

### Deployment

Deploy the production build to GitHub Pages:

```bash
npm run deploy
```

## Contact

- Developer: Abi Binu
- Email: abibinuofficial@gmail.com
- Location: Kerala, India
- LinkedIn: https://linkedin.com/in/abi-binu-821560340/
- GitHub: https://github.com/abibinu
