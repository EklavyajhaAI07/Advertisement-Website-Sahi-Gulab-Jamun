# Shree Ji — Shahi Gulab Jamun Landing Page

[![HTML](https://img.shields.io/badge/HTML-24.3%25-e34f26?logo=html5&logoColor=white)](#)
[![CSS](https://img.shields.io/badge/CSS-49.2%25-1572b6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-26.5%25-f7df1e?logo=javascript&logoColor=000)](#)
[![Vite](https://img.shields.io/badge/Vite-^6.2.0-646cff?logo=vite&logoColor=white)](#)
[![GSAP](https://img.shields.io/badge/GSAP-^3.12.7-88ce02)](#)
[![License](https://img.shields.io/badge/License-MIT%20(default)-lightgrey)](#)
[![Stars](https://img.shields.io/badge/Stars-0-lightgrey)](https://github.com/EklavyajhaAI07/Advertisement-Website-Sahi-Gulab-Jamun/stargazers)

A premium, anamorphic 3D landing page for **Shree Ji**, featuring their signature **Shahi Gulab Jamun Mix**—built with **Vite** + **GSAP** for high-performance motion and scroll-driven visuals.

---

## Problem Statement / Motivation

Modern product landing pages often look static and interchangeable. This project explores a more *premium*, *brand-forward* presentation by combining anamorphic depth cues, parallax motion, scroll-triggered interactions, and a royal-themed particle system—while keeping performance strong via modern tooling (Vite + ES Modules).

---

## Features

- **Anamorphic 3D billboard hero** with depth and parallax feel
- **GSAP-powered animations** for smooth, premium motion
- **Scroll-triggered effects** that activate as the user explores
- **Golden particle system** (canvas-based) to support a “royal” aesthetic
- **Responsive layout** optimized from mobile to large desktop
- **Fast dev/build workflow** using Vite and ES modules

---

## Tech Stack

- **HTML5 / CSS3** (vanilla)
- **JavaScript (ES Modules)** (`"type": "module"`)
- **GSAP** `^3.12.7`
- **Vite** `^6.2.0`

---

## Project Structure

```text
.
├── .gitignore
├── README.md
├── index.html
├── main.js
├── style.css
├── vite.config.js
├── package.json
├── package-lock.json
└── images/
    ├── Model_GJ.jpeg
    └── Shahi_GJ.jpeg
```

**Key files**
- `index.html` — Main markup + SEO/meta
- `style.css` — Design system, layout, and styling
- `main.js` — Interactions, particle system, GSAP sequences
- `images/` — Product/marketing imagery used in the page

---

## Installation & Setup

### Prerequisites
- **Node.js** (recommended: latest LTS)
- **npm** (bundled with Node.js)

### Install dependencies
```bash
npm install
```

---

## Usage / Running the project

### Development server
```bash
npm run dev
```

### Production build
```bash
npm run build
```

### Preview the production build locally
```bash
npm run preview
```

---

## Screenshots

<img width="1216" height="900" alt="Screenshot 2026-03-25 171603" src="https://github.com/user-attachments/assets/eacfc26a-a0b9-453d-bc56-43a1f4f243fb" />


---

## Demo

URL: https://eklavyajhaai07.github.io/Advertisement-Website-Sahi-Gulab-Jamun/
---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch  
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes  
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your fork  
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

**Guidelines**
- Keep animation changes performant (avoid layout thrashing; prefer transforms)
- Ensure responsive behavior remains intact across breakpoints
- Test `npm run build` before submitting

---

## License

No license file was detected in the repository metadata. **Defaulting to MIT** for this README section.

If you intend a different license, add a `LICENSE` file at the root of the repository.
