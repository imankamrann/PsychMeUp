import React, { useState } from "react";
import Dashboard from "./Dashboard";
import QuizScreen from "./QuizScreen";
import ResultsScreen from "./ResultsScreen";

function App() {
  const [currentScreen, setCurrentScreen] = useState("dashboard"); // 'dashboard', 'quiz', 'results'
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [finalScore, setFinalScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const loadQuizData = async (quizFile) => {
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
    </div>
  );
}

export default App;
