import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  Grid,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

function AddQuizScreen({ onBack }) {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    {
      difficulty: "easy",
      question: "",
      options: ["", "", "", ""],
      correctIndex: 0,
      funFact: "",
    },
  ]);

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    if (field === "question" || field === "difficulty" || field === "funFact") {
      updated[index][field] = value;
    } else {
      // field is option index (0 to 3)
      updated[index].options[field] = value;
    }
    setQuestions(updated);
  };

  const handleCorrectIndexChange = (index, value) => {
    const updated = [...questions];
    updated[index].correctIndex = parseInt(value, 10);
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        difficulty: "easy",
        question: "",
        options: ["", "", "", ""],
        correctIndex: 0,
        funFact: "",
      },
    ]);
  };

  const removeQuestion = (index) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
  };

  const downloadQuiz = () => {
    const filename = title.toLowerCase().replace(/\s+/g, "") + ".json";

    const output = questions.map(
      ({ difficulty, question, options, correctIndex, funFact }) => ({
        difficulty,
        question,
        options,
        correctIndex,
        funFact,
      })
    );

    const blob = new Blob([JSON.stringify(output, null, 2)], {
      type: "application/json",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();

    URL.revokeObjectURL(link.href);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button
        onClick={onBack}
        color="secondary"
        variant="contained"
        sx={{ mb: 3 }}
      >
        Back to Dashboard
      </Button>

      <Typography variant="h4" gutterBottom>
        Create New Quiz
      </Typography>

      <TextField
        label="Quiz Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 3 }}
      />

      {questions.map((q, index) => (
        <Box
          key={index}
          sx={{ mb: 4, p: 2, border: "1px solid #ccc", borderRadius: 2 }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Question {index + 1}</Typography>
            <IconButton onClick={() => removeQuestion(index)}>
              <Delete />
            </IconButton>
          </Box>

          <TextField
            label="Difficulty"
            fullWidth
            value={q.difficulty}
            onChange={(e) =>
              handleQuestionChange(index, "difficulty", e.target.value)
            }
            sx={{ my: 2 }}
            placeholder="e.g. easy, medium, hard"
          />

          <TextField
            label="Question Text"
            fullWidth
            value={q.question}
            onChange={(e) =>
              handleQuestionChange(index, "question", e.target.value)
            }
            sx={{ my: 2 }}
          />

          <Grid container spacing={2}>
            {q.options.map((opt, optIndex) => (
              <Grid item xs={6} key={optIndex}>
                <TextField
                  label={`Option ${optIndex + 1}`}
                  fullWidth
                  value={opt}
                  onChange={(e) =>
                    handleQuestionChange(index, optIndex, e.target.value)
                  }
                />
              </Grid>
            ))}
          </Grid>

          <TextField
            label="Correct Answer Index (0-3)"
            type="number"
            inputProps={{ min: 0, max: 3 }}
            value={q.correctIndex}
            onChange={(e) => handleCorrectIndexChange(index, e.target.value)}
            sx={{ mt: 2 }}
          />

          <TextField
            label="Fun Fact"
            fullWidth
            multiline
            value={q.funFact}
            onChange={(e) =>
              handleQuestionChange(index, "funFact", e.target.value)
            }
            sx={{ mt: 2 }}
            placeholder="Optional fun fact about this question"
          />
        </Box>
      ))}

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button startIcon={<Add />} onClick={addQuestion} variant="contained">
          Add Question
        </Button>
        <Button
          onClick={downloadQuiz}
          variant="contained"
          color="primary"
          disabled={!title || questions.length === 0}
        >
          Download Quiz JSON
        </Button>
      </Box>
    </Container>
  );
}

export default AddQuizScreen;
