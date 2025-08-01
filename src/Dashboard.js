import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import quizzes from "./data/quizzes.json"; // if Dashboard.js is in src/

function Dashboard({ onSelectQuiz }) {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <img
        src="/PsychMeUp.png"
        alt="PsychMeUp Logo"
        style={{ width: "100px", marginBottom: "30px" }}
      />
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Choose a Quiz
      </Typography>

      {quizzes.map((quiz) => (
        <Box key={quiz.id} sx={{ marginBottom: 2 }}>
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
