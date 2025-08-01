import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import quizzes from "../quizzes.json";

function Dashboard({ onSelectQuiz }) {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        pt: 4,
      }}
    >
      {/* Top Row: Logo and Create Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mb: 4,
        }}
      >
        <img
          src="/PsychMeUp.png"
          alt="PsychMeUp Logo"
          style={{ width: "100px", height: "auto" }}
        />
        <Button
          variant="contained"
          onClick={() => onSelectQuiz("add-new")}
          color="secondary"
        >
          ➕ Create New Quiz
        </Button>
      </Box>

      {/* Title */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Choose a Quiz
      </Typography>

      {/* Quiz Buttons */}
      {quizzes.map((quiz) => (
        <Box key={quiz.id} sx={{ mb: 2, width: "100%" }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              onSelectQuiz(quiz.file);
              console.log("Selected file:", quiz.file);
            }}
          >
            {quiz.title}
          </Button>
        </Box>
      ))}
    </Container>
  );
}

export default Dashboard;
