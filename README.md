# FinQuest 🚀 - Gamified Financial Literacy Platform

**FinQuest** is a modern, gamified financial literacy platform designed to make money management, investing, taxes, and personal finance engaging, intuitive, and accessible for young adults and students.

---

## ✨ Features

- 📚 **120 Interactive Bite-Sized Lessons**: Comprehensive coverage across Budgeting, Saving, Investing, Taxes, Insurance, FIRE Goals, Debt, Banking, Real Estate, Crypto, and Security.
- 🗣️ **English & Hinglish Dual-Language**: Instant toggle between simple English and relatable Hinglish explanations.
- ⚡ **Gamified Learning**: Earn XP points, maintain daily streak flames, level up financial badges, and unlock achievements.
- 🎯 **Daily Challenges & Quizzes**: Test knowledge with 3-question daily quizzes and instant scenario feedback.
- 🤖 **FinBot AI Financial Advisor**: Powered by Google Gemini AI (`@google/genai`) to answer custom financial questions, clarify concepts, and offer budget tips in real-time.
- 📊 **Smart Money Tracker**: Manage income, expenses, set savings goals with interactive progress meters, and calculate compound interest.
- 🏆 **Champions Leaderboard**: Track global rankings and compete with top learners.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Motion (`motion/react`), Lucide React Icons
- **Backend**: Node.js, Express, TypeScript (`tsx` runtime execution)
- **AI Integration**: Google Gemini AI (`@google/genai` SDK)
- **Authentication**: JWT & Bcrypt password hashing
- **Build & Bundling**: Esbuild & Vite

---

## 🚀 Quick Start & Local Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### 2. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/finquest.git
cd finquest
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the project root directory (or copy from `.env.example`):
```env
# Gemini API Key for FinBot AI Advisor
GEMINI_API_KEY="your_gemini_api_key_here"

# Application URL
APP_URL="http://localhost:3000"

# JWT Auth Secret
JWT_SECRET="finquest_secret_jwt_key_2026"

# Server Port
PORT=3000
```

### 5. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

---

## 📦 Project Structure

```
├── src/
│   ├── components/       # Reusable UI components (Navbar, DailyChallengeCard, XPBar, etc.)
│   ├── data/             # Curated lesson modules (lessonsBatch1-5) and initial seeds
│   ├── pages/            # Main application screens (Home, Lessons, Dashboard, Tracker, AI, etc.)
│   ├── utils/            # API clients, language translators, and avatar generators
│   ├── types.ts          # Global TypeScript interfaces and data models
│   ├── App.tsx           # Main app router and layout
│   └── main.tsx          # Application entry point
├── server/
│   ├── db.ts             # Embedded file-based JSON storage engine
│   └── routes.ts         # REST API endpoints (Auth, Lessons, Streaks, Goals, AI)
├── server.ts             # Express server entry point with Vite middleware
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

---

## 📜 Available Scripts

- `npm run dev`: Starts the Node.js Express server with live TypeScript execution (`tsx`)
- `npm run build`: Compiles the client with Vite and bundles the backend with Esbuild to `dist/server.cjs`
- `npm run start`: Runs the compiled production bundle (`node dist/server.cjs`)
- `npm run lint`: Runs TypeScript type checking (`tsc --noEmit`)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more details.
