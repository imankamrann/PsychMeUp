import React, { useState, useEffect, useCallback } from 'react';
import { Container, Typography, Button, Paper, RadioGroup, FormControlLabel, Radio, Box, LinearProgress } from '@mui/material';

function QuizScreen({ questions, onQuizComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds per question
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSubmit = useCallback((selectedIndex) => {
    const newUserAnswers = [...userAnswers, selectedIndex];
    setUserAnswers(newUserAnswers);

    // Move to the next question immediately after answer is submitted
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswerIndex(null); // Reset selected answer for the next question
      setTimeLeft(10); // Reset timer for the next question
    } else {
      // Calculate score and complete quiz
      let score = 0;
      for (let i = 0; i < questions.length; i++) {
        if (newUserAnswers[i] === questions[i].correctIndex) {
          score++;
        }
      }
      onQuizComplete(score, newUserAnswers);
    }
  }, [userAnswers, currentQuestionIndex, questions.length, onQuizComplete]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      // Time ran out, submit null for unanswered and move to the next question
      handleAnswerSubmit(null);
    }
  }, [timeLeft, handleAnswerSubmit]);

  const handleAnswerSelect = (index) => {
    setSelectedAnswerIndex(index);
    handleAnswerSubmit(index);
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Typography variant="h6" component="div" gutterBottom>
        Question {currentQuestionIndex + 1} of {questions.length}
      </Typography>
      <Box sx={{ width: '100%', mb: 2 }}>
        <LinearProgress variant="determinate" value={(timeLeft / 10) * 100} />
        <Typography variant="body2" color="text.secondary" align="center">{timeLeft}s left</Typography>
      </Box>
      <Paper elevation={3} sx={{ padding: 3, width: '100%' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {currentQuestion.question}
        </Typography>
        <RadioGroup
          value={selectedAnswerIndex}
          onChange={(e) => handleAnswerSelect(parseInt(e.target.value))}
        >
          {currentQuestion.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio />}
              label={option}
              disabled={selectedAnswerIndex !== null} // Disable radio buttons after selecting an answer
            />
          ))}
        </RadioGroup>
      </Paper>
    </Container>
  );
}

export default QuizScreen;