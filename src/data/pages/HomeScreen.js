// import React, { useState } from "react";

// import {
//   Container,
//   Typography,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   colors,
// } from "@mui/material";

// function HomeScreen({ onStartQuiz }) {
//   const [difficulty, setDifficulty] = useState("easy");

//   const handleStartClick = () => {
//     onStartQuiz(difficulty);
//   };

//   return (
//     <Container
//       maxWidth="sm"
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <img
//         src="/PsychMeUp.png"
//         alt="PsychMeUp Logo"
//         style={{ width: "350px", marginBottom: "50px" }}
//       />
//       {/* 
//       <Typography variant="h3" className="pixelify">
//         PsychMeUp
//       </Typography> */}

//       <Typography
//         variant="h6"
//         component="p"
//         gutterBottom
//         style={{ marginBottom: "50px", fontStyle: "italic" }}
//       >
//         Test your psychology knowledge!
//       </Typography>
//       <FormControl
//         variant="outlined"
//         sx={{ m: 1, minWidth: 120, marginBottom: "50px" }}
//       >
//         <InputLabel
//           id="difficulty-label"
//           sx={{
//             color: "white", // Default label color
//             "&.Mui-focused": {
//               color: "white", // Label color when Select is focused (prevent blue)
//             },
//           }}
//         >
//           Difficulty
//         </InputLabel>
//         <Select
//           labelId="difficulty-label"
//           id="difficulty"
//           value={difficulty}
//           onChange={(e) => setDifficulty(e.target.value)}
//           label="Difficulty"
//           sx={{
//             color: "white", // Set selected value text to white
//             "& .MuiOutlinedInput-notchedOutline": {
//               borderColor: "white", // Optional: White border for visibility
//             },
//             "&:hover .MuiOutlinedInput-notchedOutline": {
//               borderColor: "white", // Optional: White border on hover
//             },
//             "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//               borderColor: "white", // Optional: White border when focused
//             },
//           }}
//         >
//           <MenuItem value="easy">Easy</MenuItem>
//           <MenuItem value="medium">Medium</MenuItem>
//           <MenuItem value="hard">Hard</MenuItem>
//         </Select>
//       </FormControl>
//       <Button variant="contained" size="large" onClick={handleStartClick}>
//         Start Quiz
//       </Button>
//     </Container>
//   );
// }

// export default HomeScreen;
