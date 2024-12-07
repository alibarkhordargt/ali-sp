// src/components/BackButton.tsx
import React from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <IconButton
      onClick={handleBackClick}
      sx={{
        position: "absolute",
        left: "10px", // Position it on the left
        top: "10px", // Position it near the top
        color: "#333", // Color of the icon, same as the title color
      }}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
