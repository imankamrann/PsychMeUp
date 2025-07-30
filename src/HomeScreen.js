import React, { useState } from 'react';
import { Container, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function HomeScreen({ onStartQuiz }) {
  const [difficulty, setDifficulty] = useState('easy');

  const handleStartClick = () => {
    onStartQuiz(difficulty);
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        PsychMeOut
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        Test your psychology knowledge!
      </Typography>
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120, marginBottom: 3 }}>
        <InputLabel id="difficulty-label">Difficulty</InputLabel>
        <Select
          labelId="difficulty-label"
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          label="Difficulty"
        >
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" size="large" onClick={handleStartClick}>
        Start Quiz
      </Button>
    </Container>
  );
}

export default HomeScreen;