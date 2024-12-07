// src/pages/WelcomePage.tsx
import React from "react";
import { Container, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/form");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
        Welcome to Emzagar
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={handleStartClick}
          sx={{
            backgroundColor: "#66bb6a",
            color: "white",
            fontSize: "1.2rem",
            padding: "12px 24px",
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#4caf50",
            },
          }}
        >
          Start
        </Button>
      </Box>
    </Container>
  );
};

export default WelcomePage;
