import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LoginImg from "../assets/login.png";
import GoogleLogo from "../assets/google-logo.png";
import BackgroundImg from "../assets/background2.jpg";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  // 👀 state for password show/hide
  const [showPassword, setShowPassword] = useState(false);

  // form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error states
  const [errors, setErrors] = useState({});
  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [resetMessage, setResetMessage] = useState("");

  // handle form submit
  const handleLogin = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

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
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (userCredential.user.emailVerified === true) {
            navigate('/');
          } else {
            setErrors({ email: "Please verify your email before logging in." });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
            setErrors({ email: "Invalid email or password" });
          } else {
            setErrors({ email: "An error occurred. Please try again." });
          }
        });
    }
  };

  const handleGoogle = () => {
    console.log('Google');
  };

  const handleForgotPassword = () => {
    if (!email.trim()) {
      setErrors({ email: "Please enter your email address" });
      return;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetMessage("Password reset email sent! Please check your inbox.");
        setErrors({});
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/user-not-found') {
          setErrors({ email: "No user found with this email address" });
        } else {
          setErrors({ email: "An error occurred. Please try again." });
        }
        setResetMessage("");
      });
  };

  const handleBackToLogin = () => {
    setShowFirstDiv(true);
    setErrors({});
    setResetMessage("");
  };

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: '100vw',
      boxSizing: "border-box",
      height: '100vh',
      backgroundImage: `url(${BackgroundImg})`,
      backgroundSize: "cover", // Ensures the image covers the entire Box
      backgroundPosition: "center", // Centers the image
      backgroundRepeat: "no-repeat", // Prevents the image from repeating
    }}>
      <Paper
        elevation={12}
        sx={{
          maxWidth: 800,
          width: "100%",
          borderRadius: 5,
          overflow: "hidden",
          display: showFirstDiv ? 'block' : 'none',
        }}
      >
        <Grid container spacing={0}>
          <Grid item size={6} sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 3, md: 6 },
          }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 1,
                color: "#1a1a1a",
                whiteSpace: "nowrap",
                lineHeight: 1.3,
              }}
            >
              Login to your account!
            </Typography>

            {/* Google Login */}
            <Box
              onClick={handleGoogle}
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
                pl: 1.5,
                py: 2,
                mb: 1.3,
                width: "100%",
                cursor: "pointer",
                boxSizing: "border-box",
                "&:hover": {
                  border: "1px solid black",
                },
              }}
            >
              <Box
                component="img"
                src={GoogleLogo}
                alt="Google logo"
                sx={{ pr: 2, width: 24, height: 24 }}
              />
              <Typography sx={{ fontWeight: 500, color: "#333" }}>
                Login with Google
              </Typography>
            </Box>

            {/* Email Field */}
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email}
            />

            {/* Password Field with Eye Icon */}
            <TextField
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

            {/* Login Button */}
            <Button
              onClick={handleLogin}
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
              Login to Continue
            </Button>

            {/* Sign Up and Forgot Password Links */}
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don’t have an account?{" "}
              <Link
                component={RouterLink}
                to="/"
                underline="hover"
                sx={{ color: "orange" }}
              >
                Sign up
              </Link>
            </Typography>
            <Typography
              onClick={() => setShowFirstDiv(false)}
              variant="body2"
              align="center"
              component="p"
              sx={{ mt: 1, color: "#6f42ff", cursor: "pointer" }}
            >
              Forgotten password?
            </Typography>
          </Grid>
          <Grid item size={6}>
            <Box
              component="img"
              src={LoginImg}
              alt="Login"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={12}
        sx={{
          maxWidth: 500,
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 5,
          p: 5,
          display: showFirstDiv ? 'none' : 'block',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 1,
            color: "#1a1a1a",
            whiteSpace: "nowrap",
            lineHeight: 1.3,
          }}
        >
          Reset Your Password
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 1, color: "#333" }}
        >
          Enter your email address to receive a password reset link.
        </Typography>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
        />
        {resetMessage && (
          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 2, color: "green" }}
          >
            {resetMessage}
          </Typography>
        )}

        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Button
            onClick={handleForgotPassword}
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              background:
                "linear-gradient(90deg, rgba(111,66,255,1) 0%, rgba(0,150,255,1) 100%)",
              borderRadius: "12px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Send Reset Email
          </Button>
          <Button
            onClick={handleBackToLogin}
            variant="outlined"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              borderColor: "#6f42ff",
              color: "#6f42ff",
              borderRadius: "12px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Back to Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;