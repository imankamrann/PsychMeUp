import React from 'react';
import { Container, Typography, Button, Paper, Box } from '@mui/material';

function ResultsScreen({ score, questions, onRestartQuiz }) {
  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Quiz Results
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Your Score: {score} out of {questions.length}
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, width: '100%', mt: 3 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Summary
        </Typography>
        {questions.map((question, index) => (
          <Box key={index} sx={{ marginBottom: 2, paddingBottom: 2, borderBottom: '1px solid #eee' }}>
            <Typography variant="body1" fontWeight="bold">
              Q{index + 1}: {question.question}
            </Typography>
            <Typography variant="body2">
              Correct Answer: {question.options[question.correctIndex]}
            </Typography>
            {/* You would ideally track the user's selected answer here to show if they got it right or wrong */}
            <Typography variant="body2">
              Fun Fact: {question.funFact}
            </Typography>
          </Box>
        ))}
      </Paper>
      <Button
        variant="contained"
        size="large"
        onClick={onRestartQuiz}
        sx={{ mt: 3 }}
      >
        Restart Quiz
      </Button>
    </Container>
  );
}

export default ResultsScreen;