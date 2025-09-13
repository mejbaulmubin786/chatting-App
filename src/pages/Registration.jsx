import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import RegistrationImg from "../assets/registration.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

const Registration = () => {
  // 👀 state for password show/hide
  const [showPassword, setShowPassword] = useState(false);

  // form states
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // error states
  const [errors, setErrors] = useState({});

  // handle form submit
  const handleSignUp = () => {
    let newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Full Name is required";
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else {
      let passwordErrors = [];

      if (password.length < 8) {
        passwordErrors.push("at least 8 characters");
      }
      if (!/[A-Z]/.test(password)) {
        passwordErrors.push("one uppercase letter");
      }
      if (!/[a-z]/.test(password)) {
        passwordErrors.push("one lowercase letter");
      }
      if (!/[0-9]/.test(password)) {
        passwordErrors.push("one number");
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        passwordErrors.push("one special character");
      }

      if (passwordErrors.length > 0) {
        newErrors.password = `Password must contain ${passwordErrors.join(", ")}`;
      }
    }

    setErrors(newErrors);

    // ✅ যদি error না থাকে
    if (Object.keys(newErrors).length === 0) {
      console.log("Email:", email);
      console.log("Name:", name);
      console.log("Password:", password);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f9f9",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 800,
          width: "100%",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Grid container sx={{ flexWrap: "nowrap" }}>
          {/* Left side (Form ~55%) */}
          <Grid
            item
            xs={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 3, md: 6 },
            }}
          >
            <Box sx={{ maxWidth: 400, width: "100%" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  color: "#1a1a1a",
                  whiteSpace: "nowrap",
                  lineHeight: 1.3,
                }}
              >
                Get started with easily register
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: "gray" }}>
                Free register and you can enjoy it
              </Typography>

              {/* Email Field */}
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email}
              />

              {/* Name Field */}
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Full Name"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name}
              />

              {/* Password Field with Eye Icon */}
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Sign Up Button */}
              <Button
                onClick={handleSignUp}
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.5,
                  background:
                    "linear-gradient(90deg, rgba(111,66,255,1) 0%, rgba(0,150,255,1) 100%)",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Sign up
              </Button>

              {/* Sign In Link */}
              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <Link
                  component={RouterLink}
                  to="/login"
                  underline="hover"
                  sx={{ color: "orange" }}
                >
                  Sign In
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Right side (Image ~45%) */}
          <Grid item xs={5}>
            <Box
              component="img"
              src={RegistrationImg}
              alt="Registration"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Registration;
