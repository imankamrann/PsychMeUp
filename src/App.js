import React, { useState, useEffect } from 'react';
import HomeScreen from './HomeScreen';
import QuizScreen from './QuizScreen';
import ResultsScreen from './ResultsScreen';
import questionsData from './data/questions.json'; // Load the questions data

function App() {
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home', 'quiz', 'results'
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [finalScore, setFinalScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const startQuiz = (difficulty) => {
    // Filter questions based on difficulty (not implemented in data yet, so use all)
    const filteredQuestions = questionsData; // Replace with filtering logic later
    setQuizQuestions(filteredQuestions);
    setUserAnswers([]); // Reset user answers for a new quiz
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (score, userAnswers) => {
    setFinalScore(score);
    setUserAnswers(userAnswers); // Store user answers
    setCurrentScreen('results');
  };

  const restartQuiz = () => {
    setCurrentScreen('home');
    setFinalScore(0);
    setQuizQuestions([]);
    setUserAnswers([]); // Clear user answers on restart
  };

  return (
    <div className="App">
      {currentScreen === 'home' && <HomeScreen onStartQuiz={startQuiz} />}
      {currentScreen === 'quiz' && (
        <QuizScreen questions={quizQuestions} onQuizComplete={handleQuizComplete} />
      )}
      {currentScreen === 'results' && (
        <ResultsScreen questions={quizQuestions} score={finalScore} userAnswers={userAnswers} onRestartQuiz={restartQuiz} />
      )}
    </div>
  );
}

export default App;