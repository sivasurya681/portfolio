# Siva Surya — Production-Grade AI/ML Engineer Portfolio

[![Production Website](https://img.shields.io/badge/Production-www.sivasurya.com-C99A4B?style=flat-square)](https://www.sivasurya.com/)
[![Build Status](https://img.shields.io/badge/Build-Passing-emerald?style=flat-square)](https://www.sivasurya.com/)
[![Stack](https://img.shields.io/badge/Stack-Vanilla%20JS%20%7C%20HTML5%20%7C%20CSS3-6f1d1b?style=flat-square)](https://www.sivasurya.com/)
[![Hosting Cost](https://img.shields.io/badge/Hosting%20Cost-%E2%82%B90%20%2F%20Free-success?style=flat-square)](https://pages.cloudflare.com/)

A standalone, high-performance, cinematic 3D AI/ML Engineer personal portfolio website designed for **Siva Surya**, hosted at **[www.sivasurya.com](https://www.sivasurya.com/)**. Built with pure vanilla web standards to ensure maximum portability, zero framework bloat, zero Lovable watermark/branding, 60 FPS GPU-accelerated interactive ambient lighting, custom "SS" geometric favicons, and executive portrait integration.

---

## 🌟 Primary Professional Positioning

- **Primary Role:** AI/ML Engineer
- **Secondary Roles:** GenAI/LLM Engineer, Python Full Stack Developer, NLP Engineer, AI Application Engineer
- **Core Value Proposition:** End-to-end practical AI/ML implementation — from dataset design, chunking/embedding, vector retrieval (RAG), and model fine-tuning to REST APIs (FastAPI/Flask) and interactive UI.
- **Geographic Availability:** Based in Chennai, India — Open to AI/ML and full-stack opportunities in India and the United Arab Emirates (Dubai, Abu Dhabi, Sharjah).

---

## 🚀 Key Technical & Branding Features

### 1. Custom "SS" Geometric Monogram Favicon System
- Purpose-built geometric monogram favicon matching the portfolio's gold/dark glass visual identity (`#C99A4B`, `#0E131F`).
- Comprehensive asset coverage:
  - `assets/favicon.svg` (crisp vector SVG)
  - `assets/favicon-16x16.png`
  - `assets/favicon-32x32.png`
  - `assets/apple-touch-icon.png` (180x180)
  - `assets/favicon-512x512.png` (512x512)
  - `favicon.ico` (at root and assets/)

### 2. Executive Portrait Integration
- Integrated transparent PNG portrait of Siva Surya (`assets/siva-surya-portrait.png`).
- Preserves original transparency, face proportions, and identity without artificial filters or clipping.
- Rendered inside a glass elevation card (`.hero-portrait-card`) with soft gold/blue rim lighting glow and technical overlay status badge (`Siva Surya — AI/ML Engineer`).
- Responsive sizing via CSS `clamp()` and natural aspect ratio (`780/1024`).

### 3. Viewport Ambient Spotlight (No Custom Cursor)
- Portfolio-wide radial light source tracking cursor movement across all sections.
- Driven by a lerped `requestAnimationFrame` loop (`--mouse-x`, `--mouse-y`).
- **Strictly preserves the standard OS mouse pointer** (zero custom cursor circles, rings, or fake dots).

### 4. Hero Content Position Locking
- The Hero text column (Name, Badges, Title, Bio, Buttons, Social links) remains **100% positionally locked** — mouse movement causes zero text wobble or rotation.

### 5. Tier 1 Semantic Resume Downloads
- **UAE Resume Download Experience:** Triggers 3D jet flight arc (`@keyframes uaeFlightPath`), displays departure badge (`📍 DUBAI / UAE`), and releases [`Siva-Surya-UAE-Resume.pdf`](file:///f:/Portfolio/Siva-Surya-UAE-Resume.pdf).
- **India Resume Download Experience:** Triggers location radar sweep (`📍 CHENNAI, INDIA`), displays document release pulse, and releases [`Siva-Surya-India-Resume.pdf`](file:///f:/Portfolio/Siva-Surya-India-Resume.pdf).

### 6. Verified Credentials & Certifications Section
- 3D interactive tilt cards for verified credentials:
  1. *Python for Data Science* — NPTEL
  2. *Full Stack Developer Course* — Novitech R&D Private Limited
  3. *Data Science with Machine & Deep Learning* — Specialized Technical Training
- Interactive modal detail dialog.

---

## 💻 Local Development Instructions

### Quick Start
1. **Clone the repository:**
   ```bash
   git clone https://github.com/sivasurya681/portfolio.git
   cd portfolio
   ```

2. **Start local dev server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## 🌐 Cloudflare Pages + Custom Domain Setup (`www.sivasurya.com`)

### Deployment Architecture
```text
GitHub Repo (main) ──> Cloudflare Pages Build ──> Global CDN ──> www.sivasurya.com (HTTPS)
```

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "feat: SS favicon, executive portrait, and www.sivasurya.com domain config"
git branch -M main
git remote add origin https://github.com/sivasurya681/portfolio.git
git push -u origin main
```

### Step 2: Connect Cloudflare Pages
1. Sign in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**.
3. Select `sivasurya681/portfolio`.
4. Build Configuration:
   - **Framework preset:** `None`
   - **Build command:** *(Leave empty)*
   - **Build output directory:** `/` (or `.`)
5. Click **Save and Deploy**.

### Step 3: Configure Custom Domains (`www.sivasurya.com` & `sivasurya.com`)
1. In Cloudflare Pages project, click **Custom Domains** → **Set up a custom domain**.
2. Add **`www.sivasurya.com`** and **`sivasurya.com`**.
3. Cloudflare DNS Records:
   - `CNAME www` → `<your-project>.pages.dev`
   - `CNAME @` (or Apex redirect) → `www.sivasurya.com`
4. Cloudflare automatically issues and maintains SSL/TLS certificates for `https://www.sivasurya.com/` at **₹0 hosting cost**.

---

## 📊 Final Quality & Deployment Checklist

| Category | Audit Result | Verified Implementation |
| :--- | :---: | :--- |
| **SS Favicon System** | ✅ **Passed** | Vector `favicon.svg`, 16x16, 32x32, 180x180, 512x512 PNGs, and `favicon.ico`. |
| **Executive Portrait** | ✅ **Passed** | Uploaded transparent PNG integrated into Hero glass card without identity distortion. |
| **Hero Text Stability** | ✅ **Locked** | Zero wobble or text shift on mouse moves. |
| **Cursor Behavior** | ✅ **Passed** | Standard browser mouse pointer active everywhere. |
| **SEO & OpenGraph** | ✅ **Passed** | All meta tags, sitemap, robots, and JSON-LD updated to `https://www.sivasurya.com/`. |
| **Cleanliness Audit** | ✅ **Clean** | Zero `localhost`, `file://`, or hardcoded local paths in production code. |
| **Hosting Architecture**| ✅ **₹0 Cost** | Configured for Cloudflare Pages GitHub deployment with free custom domain SSL. |

---

## 📬 Contact Information

- **Name:** Siva Surya
- **Email:** [sivasurya06082001@gmail.com](mailto:sivasurya06082001@gmail.com)
- **Phone:** [+91 8072079799](tel:+918072079799)
- **LinkedIn:** [linkedin.com/in/sivasurya-ai](https://www.linkedin.com/in/sivasurya-ai/)
- **GitHub:** [github.com/sivasurya681](https://github.com/sivasurya681)
