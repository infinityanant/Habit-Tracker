# 🎯 Habit Tracker

A beautiful, modern habit tracking web app built with **React** and **Vite**. Track your daily habits, build streaks, earn badges, and visualize your weekly progress — all with a stunning glassmorphism UI.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

| Feature | Description |
|---|---|
| ➕ **Add / Delete Habits** | Create and remove habits with a single click |
| ✅ **Mark Complete** | Toggle daily completion with an animated checkbox |
| 🔥 **Streak Counter** | Tracks consecutive days of completion |
| 📊 **Weekly Completion %** | Shows your completion rate for the last 7 days |
| 📈 **Analytics Chart** | Pure-CSS bar chart showing daily completions over the past week |
| 🎖️ **Badge System** | Earn badges based on your streak milestones |
| 🌙 **Dark / Light Mode** | Animated theme toggle with localStorage persistence |
| 💾 **LocalStorage** | All data persists across browser sessions |

---

## 🎖️ Badge System

Build streaks to unlock badges that appear on your habit cards and in a dedicated showcase section:

| Badge | Requirement | Look |
|---|---|---|
| 🛡️ **Knight** | 7-day streak | Silver |
| 🏆 **Champion** | 30-day streak | Gold |
| ⚔️ **Warrior** | 60-day streak | Crimson |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/infinityanant/Habit-Tracker.git
cd Habit-Tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
Habit-Tracker/
├── index.html
├── src/
│   ├── main.jsx                  # Entry point
│   ├── App.jsx                   # Root component
│   ├── index.css                 # Complete design system
│   ├── hooks/
│   │   ├── useHabits.js          # Habit state, CRUD, streaks, badges
│   │   └── useTheme.js           # Dark/light mode toggle
│   └── components/
│       ├── HabitForm.jsx         # Add habit input
│       ├── HabitCard.jsx         # Habit card with stats & badge
│       ├── BadgeShowcase.jsx     # Badge grid & earned list
│       ├── WeeklyChart.jsx       # 7-day bar chart
│       └── ThemeToggle.jsx       # Sun/moon toggle
├── package.json
└── vite.config.js
```

---

## 🛠️ Tech Stack

- **React 19** — UI library
- **Vite 6** — Build tool & dev server
- **Vanilla CSS** — Custom design system with CSS custom properties
- **LocalStorage** — Client-side persistence
- **No external UI/chart libraries** — Everything is hand-crafted

---

## 🎨 Design Highlights

- **Glassmorphism** cards with backdrop blur
- **CSS custom properties** for seamless dark/light theming
- **Inter** font from Google Fonts
- **Micro-animations** — card entrance, badge shimmer, checkbox pop
- **Responsive** layout for mobile & desktop
- **Ambient gradient glow** background effect

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with ❤️ by <a href="https://github.com/infinityanant">infinityanant</a></p>
