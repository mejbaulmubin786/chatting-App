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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  // form states
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // error / status states
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // handle form submit
  const handleSignUp = async (e) => {
    e.preventDefault();
    setFirebaseError("");
    setSuccessMsg("");

    let newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
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

      if (password.length < 8) passwordErrors.push("at least 8 characters");
      if (!/[A-Z]/.test(password)) passwordErrors.push("one uppercase letter");
      if (!/[a-z]/.test(password)) passwordErrors.push("one lowercase letter");
      if (!/[0-9]/.test(password)) passwordErrors.push("one number");
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
        passwordErrors.push("one special character");

      if (passwordErrors.length > 0) {
        newErrors.password = `Password must contain ${passwordErrors.join(", ")}`;
      }
    }

    setErrors(newErrors);

    // stop if validation errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // proceed with firebase signup
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // update profile displayName
      await updateProfile(user, { displayName: name });

      // send verification email using the created user object
      await sendEmailVerification(user);

      // success
      setSuccessMsg(
        "Registration successful! A verification email was sent — please check your inbox (and spam)."
      );

      // clear form
      setEmail("");
      setName("");
      setPassword("");

      // navigate to login after a short delay (optional)
      setTimeout(() => {
        navigate("/login");
      }, 800);
    } catch (err) {
      console.error("Signup error:", err);
      // better message for user
      setFirebaseError(err.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
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
            {/* make this Box the form so Enter key submits */}
            <Box
              component="form"
              onSubmit={handleSignUp}
              sx={{ maxWidth: 400, width: "100%" }}
            >
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
                autoComplete="email"
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
                autoComplete="name"
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
                autoComplete="new-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((s) => !s)}
                        edge="end"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* show firebase error or success */}
              {firebaseError && (
                <Typography color="error" align="center" sx={{ mt: 1 }}>
                  {firebaseError}
                </Typography>
              )}
              {successMsg && (
                <Typography color="success.main" align="center" sx={{ mt: 1 }}>
                  {successMsg}
                </Typography>
              )}

              {/* Sign Up Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
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
                {loading ? <CircularProgress size={20} color="inherit" /> : "Sign up"}
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
