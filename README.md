# 🧠 PsychMeOut — Fast-Paced Psychology Quiz App

PsychMeOut is a fast-paced, single-player quiz app built in React, designed to help students review and reinforce core concepts from introductory psychology courses. The app gamifies learning through a timed, interactive quiz experience focused on speed, accuracy, and memory recall.

---

## 🔍 Project Overview

* Single-player quiz focused on psychology facts and core concepts
* Timed, multiple-choice format
* Immediate feedback with fun facts
* Designed for quick study sessions and test prep
* Clean, fast, and mobile-friendly UI

---

## 🎯 MVP Features

* ✅ Static set of psych-related multiple-choice questions
* ✅ Selectable difficulty: Easy, Medium, Hard
* ✅ Countdown timer for each question
* ✅ Scoring system based on correctness (and optionally speed)
* ✅ Final results screen with score and summary
* ✅ Bonus: Fun fact or mini-explanation after each question

---

## 🧩 App Screens

### 1. Home Screen

* App title and brief description
* Difficulty selector (Easy / Medium / Hard)
* Start Quiz button

### 2. Quiz Screen

* One question shown at a time
* 4 answer options (radio buttons)
* Countdown timer (e.g., 10s)
* Score display
* Automatic transition after timer or selection

### 3. Results Screen

* Final score out of total
* Summary of all questions:

  * User’s answer
  * Correct answer
  * Fun fact / explanation (optional)

---

## 🛠 Tech Stack

* Frontend: React (with Hooks)
* Styling: Tailwind CSS or Material UI
* Icons: Open source (Lucide, Heroicons, etc.)
* Hosting: Firebase / Google Cloud (recommended)
* State Logic: useState, useEffect
* Future Data Storage: PostgreSQL or Firebase

---

## 📁 Example Question Schema (JSON)

```json
{
  "difficulty": "easy",
  "question": "What part of the brain handles memory?",
  "options": [
    "Hippocampus",
    "Amygdala",
    "Thalamus",
    "Cortex"
  ],
  "correctIndex": 0,
  "funFact": "The hippocampus is key for forming new memories."
}
```

---

## 🌍 Sample Data

Start with a static dataset:

* 10 questions based on “countries and their capitals”
* Used to build and test quiz logic
* Each question should have 4 options, one correct

---

## 💡 Future Enhancements (Post-MVP)

* 🧾 Performance stats (charts, score trends)
* 👤 User login (Firebase Auth)
* 📚 Topic-based quiz categories (e.g., Brain, Memory, Behavior)
* 🎲 Randomized questions and answer shuffling
* 🏆 Solo leaderboard or daily challenge mode
* 🧩 Difficulty-based level progression
* 📈 History tracking and quiz review

---

## 🚀 Getting Started

1. Clone this repo
2. Run npm install
3. Start the dev server:

```bash
npm run dev
mpm start
```

4. Edit questions.json or fetch data from Firebase
5. Deploy with Firebase Hosting or Vercel

---

## 📜 License

MIT — free to use, modify, and build upon.
