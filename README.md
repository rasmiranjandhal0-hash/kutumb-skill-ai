# 🏛️ KutumbSkill AI (कुटुंब Skill)
### National AI Vocational Counselling & Parental Perception Platform

> **Empowering Indian Families & Youth to Make Informed Career Decisions in Vocational Education and Modern Technical Trades Aligned with NCVET / NSQF / NCrF.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node.js-18%2B-brightgreen)](https://nodejs.org/)
[![Google Gemini AI](https://img.shields.io/badge/Google%20Gemini-1.5%20%2F%203.1%20Flash-orange)](https://aistudio.google.com/)
[![NCVET Aligned](https://img.shields.io/badge/NCVET-Aligned-success)](https://www.ncvet.gov.in/)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/rasmiranjandhal0-hash/kutumb-skill-ai)

---

## 🌟 The Problem
In India, millions of students finish 10th/12th grade and enroll in 3-year generic BA/B.Com degrees with high dropout rates and limited job opportunities. Vocational and technical training institutes (ITIs, NSTIs, Polytechnic, PMKVY) offer high-demand career pathways with verified placement rates over 90%, but parents often resist due to:
1. **Social Stigma / Izzat (सम्मान)**: Fear that technical trades mean manual garage labor and low matrimonial dignity.
2. **Earning Doubts**: Lack of transparent data comparing initial earnings against degree holders.
3. **Safety & Security**: Concerns about female safety, transportation, and industrial working conditions.
4. **Degree Equivalence**: Misconception that vocational education closes the door to higher education.

---

## 🚀 Key Features

### 1. 🤖 Dual-Persona Multilingual AI Career Counsellor
* **Parent Mode (`Kutumb Mitr`)**: Reassuring, respectful elder career mentor focusing on social dignity, government NCVET certification, high starting salaries (₹18k–₹24k/mo at age 19), corporate labs (Tata Motors, Mahindra, L&T), and lateral progression to B.Voc degrees.
* **Learner Mode (`Skill Saathi`)**: Inspiring youth mentor focusing on high-tech hands-on skills (EV, Solar, CNC Mechatronics, Healthcare, IT Cloud), career ladders, and personal independence.
* **Joint Mode (`Kutumb Setu`)**: Neutral mediator reconciling parent worries with youth aspirations.
* **Multi-Turn Context Retention**: Powered by Google Gemini AI with multi-turn memory per session.
* **Supported Languages**: Hindi (हिंदी), Marathi (मराठी), Tamil (தமிழ்), Telugu (తెలుగు), Bengali (বাংলা), and English.
* **Speech Engine**: Built-in Regional Speech-to-Text (Microphone) and Voice Synthesis (Text-to-Speech).

### 2. ⚖️ Bhavishya ROI Visualizer (Degree vs. Trade Calculator)
* Interactive calculator comparing 3-year regular BA degrees vs. 1-2 year government technical trades.
* Real-time calculation of net family savings, starting age (19 vs. 24+), and cumulative 5-year earnings difference (+₹8.40 Lakhs net advantage).

### 3. 👥 Joint Family Mediation Chatroom (`/room`)
* Interactive 3-way conversation simulator where Parents and Youth dialogue in real-time with AI acting as an objective mediator to resolve disputes.

### 4. 📋 Verified Trades Catalog (`/trades`)
* Database of top NSQF-aligned trades:
  - **Electric Vehicle (EV) Specialist Technician** (91.2% placement)
  - **Solar PV Rooftop Grid Specialist (Suryamitra)** (89.5% placement)
  - **CNC Precision Machinist & Smart Mechatronics** (94.8% placement)
  - **General Duty Allied Healthcare Specialist** (92.0% placement)
  - **IT Infrastructure & Cloud Network Technician** (88.0% placement)

### 5. 📊 Policy Desk & Resistance Heatmap (`/admin`)
* Scheme administrator dashboard showing regional parental hesitation hotspots across states (UP, Maharashtra, Bihar, Tamil Nadu).
* Real-time objection breakdown (Social Stigma, Salary, Female Safety, Higher Education continuity).
* Human counsellor callback escalation queue.

---

## 🛠️ Technology Stack

* **Backend**: Node.js, Express.js
* **AI Engine**: Google Gemini Generative AI SDK (`@google/generative-ai`) with dynamic model cascade (`gemini-3.1-flash`, `gemini-flash-latest`)
* **Frontend**: HTML5, Vanilla JavaScript (Single Page Architecture with History API), Tailwind CSS
* **Icons & Voice**: Lucide Icons, Web Speech API (STT & TTS)
* **Datasets**: Grounded NCVET / NSQF / NCrF placement records and regional alumni social proof

---

## 📦 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* A Google Gemini API key (Free key available at [Google AI Studio](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rasmiranjandhal0-hash/kutumb-skill-ai.git
   cd kutumb-skill-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment:**
   Create a `.env` file in the root directory (or copy from `.env.example`):
   ```env
   PORT=5000
   HOST=0.0.0.0
   NODE_ENV=development
   GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
   ```
   *(Note: If no API key is provided, the platform automatically runs on its built-in verified regional knowledge engine).*

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Open in Browser:**
   * Main AI Counselling: `http://localhost:5000/`
   * Family Mediation Room: `http://localhost:5000/room`
   * Degree vs. Trade Calculator: `http://localhost:5000/degree-vs-trade`
   * Verified Trades Directory: `http://localhost:5000/trades`
   * Policy Desk Dashboard: `http://localhost:5000/admin`

---

## 🌐 Deploy to Render (Cloud Hosting)

### 1-Click Deployment
Click the button below to deploy this repository directly to Render:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/rasmiranjandhal0-hash/kutumb-skill-ai)

### Manual Setup on Render
1. Go to [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository (`rasmiranjandhal0-hash/kutumb-skill-ai`).
4. Enter the configuration:
   - **Name**: `kutumb-skill-ai`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`
5. Under **Environment Variables**, add:
   - `NODE_ENV`: `production`
   - `GEMINI_API_KEY`: *(paste your Google Gemini API key)*
6. Click **Deploy Web Service**. Render will build and launch your live application with a free `https://<app-name>.onrender.com` URL.

---

## 🔒 Security & Privacy
* The `.env` file is excluded in `.gitignore` to keep API credentials secure.
* Zero data tracking of personal family phone numbers beyond local counseling queues.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).

