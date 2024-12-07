// src/pages/FormPage.tsx
import React from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import BackButton from "../components/BackButton";
import generateExcelFile from "../utils/generateExcelFile";
import generatePdfFile from "../utils/generatePdfFile";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    firstName: yup
      .string()
      .required("First name is required")
      .min(3, "First name must be at least 3 characters"),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(3, "Last name must be at least 3 characters"),
    age: yup
      .number()
      .min(18, "Age must be greater than 17") // Validation for age > 17
      .max(99, "Age must be less than 100") // Validation for age < 100
      .typeError("Age is required & it must be a number"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^09\d{9}$/, "Phone number must start with 09 and be 11 digits"),
  })
  .required();

const FormPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    register, // Register the input fields
    handleSubmit, // Handle form submission
    formState: { errors }, // Validation errors
  } = useForm({
    resolver: yupResolver(schema), // Use yup validation schema
  });

  const onSubmit = (data: any) => {
    // Handle form data (Excel or PDF generation can go here, but we're skipping it for now)

    // Redirect to /sign page after form submission
    navigate("/sign", { state: data });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <BackButton /> {/* Place the BackButton here */}
      <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
        Signer Information
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TextField
          {...register("firstName")}
          label="First Name"
          variant="outlined"
          margin="normal"
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          sx={{
            width: "100%",
            maxWidth: "300px",
            "& .MuiInputLabel-root": {
              color: "#000", // Default label color
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#66bb6a", // Green color on focus
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#66bb6a", // Green label color when focused
            },
          }}
        />
        <TextField
          {...register("lastName")}
          label="Last Name"
          variant="outlined"
          margin="normal"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          sx={{
            width: "100%",
            maxWidth: "300px",
            "& .MuiInputLabel-root": {
              color: "#000", // Default label color
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#66bb6a", // Green color on focus
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#66bb6a", // Green label color when focused
            },
          }}
        />
        <TextField
          {...register("age")}
          label="Age"
          variant="outlined"
          margin="normal"
          error={!!errors.age}
          helperText={errors.age?.message}
          sx={{
            width: "100%",
            maxWidth: "300px",
            "& .MuiInputLabel-root": {
              color: "#000", // Default label color
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#66bb6a", // Green color on focus
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#66bb6a", // Green label color when focused
            },
          }}
        />
        <TextField
          {...register("phoneNumber")}
          label="Phone Number"
          variant="outlined"
          margin="normal"
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
          sx={{
            width: "100%",
            maxWidth: "300px",
            "& .MuiInputLabel-root": {
              color: "#000", // Default label color
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#66bb6a", // Green color on focus
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#66bb6a", // Green label color when focused
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 2,
            width: "100%", // Make the button span full width of the container
            maxWidth: "300px", // Match the button size with the inputs
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#66bb6a", // Green background
              color: "white",
              fontSize: "1rem", // Smaller font size
              padding: "10px 20px", // Smaller padding
              borderRadius: "16px",
              width: "100%", // Full width
              "&:hover": {
                backgroundColor: "#4caf50", // Darker green on hover
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FormPage;
