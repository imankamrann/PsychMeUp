import React, { useState } from "react";
import Dashboard from "./data/pages/Dashboard";
import QuizScreen from "./data/pages/QuizScreen";
import ResultsScreen from "./data/pages/ResultsScreen";
import AddQuizScreen from "./data/pages/AddQuizScreen"; // <- Import the AddQuizScreen

function App() {
  const [currentScreen, setCurrentScreen] = useState("dashboard"); // 'dashboard', 'quiz', 'results', 'add-quiz'
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [finalScore, setFinalScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizFile, setQuizFile] = useState(null);

  const loadQuizData = async (quizFile) => {
    if (quizFile === "add-new") {
      setCurrentScreen("add-quiz");
      return;
    }

    try {
      const module = await import(`./data/quizzes/${quizFile}`);
      setQuizQuestions(module.default);
      setCurrentScreen("quiz");
    } catch (error) {
      console.error("Failed to load quiz data:", error);
    }
  };

  const handleQuizComplete = (score, answers) => {
    setFinalScore(score);
    setUserAnswers(answers);
    setCurrentScreen("results");
  };

  const restartQuiz = () => {
    setCurrentScreen("dashboard");
    setQuizQuestions([]);
    setFinalScore(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      {currentScreen === "dashboard" && (
        <Dashboard onSelectQuiz={loadQuizData} />
      )}
      {currentScreen === "quiz" && (
        <QuizScreen
          questions={quizQuestions}
          onQuizComplete={handleQuizComplete}
          onBack={() => setCurrentScreen("dashboard")}
        />
      )}
      {currentScreen === "results" && (
        <ResultsScreen
          questions={quizQuestions}
          score={finalScore}
          userAnswers={userAnswers}
          onRestartQuiz={restartQuiz}
        />
      )}
      {currentScreen === "add-quiz" && (
        <AddQuizScreen onBack={() => setCurrentScreen("dashboard")} />
      )}
    </div>
  );
}

export default App;
