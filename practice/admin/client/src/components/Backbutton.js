// BackButton.js
import React from "react";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";

const BackButton = () => {
  const history = Navigate();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Button variant="outlined" color="primary" onClick={goBack}>
      Back
    </Button>
  );
};

export default BackButton;
