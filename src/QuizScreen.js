import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Paper, RadioGroup, FormControlLabel, Radio, Box, LinearProgress } from '@mui/material';

function QuizScreen({ questions, onQuizComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds per question
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showFunFact, setShowFunFact] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (timeLeft > 0 && !showFunFact) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && !showFunFact) {
      // Time ran out, move to the next question or show results
      handleAnswerSubmit(null); // Pass null for unanswered
    }
  }, [timeLeft, showFunFact]);

  const handleAnswerSelect = (index) => {
    setSelectedAnswerIndex(index);
  };

  const handleAnswerSubmit = (selectedIndex) => {
    if (selectedIndex === currentQuestion.correctIndex) {
      setScore(score + 1);
    }
    setShowFunFact(true);
  };

  const handleNextQuestion = () => {
    setShowFunFact(false);
    setSelectedAnswerIndex(null);
    setTimeLeft(10); // Reset timer
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onQuizComplete(score);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Typography variant="h6" component="div" gutterBottom>
        Question {currentQuestionIndex + 1} of {questions.length}
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        Score: {score}
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
              disabled={showFunFact}
            />
          ))}
        </RadioGroup>
        {!showFunFact && (
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleAnswerSubmit(selectedAnswerIndex)}
            disabled={selectedAnswerIndex === null}
            sx={{ mt: 3 }}
          >
            Submit Answer
          </Button>
        )}
        {showFunFact && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Fun Fact:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {currentQuestion.funFact}
            </Typography>
            <Button
              variant="contained"
              fullWidth
              onClick={handleNextQuestion}
              color="success"
              sx={{ mt: 2 }}
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default QuizScreen;