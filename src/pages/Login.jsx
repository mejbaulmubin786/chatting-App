import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LoginImg from "../assets/login.png";
import GoogleLogo from "../assets/google-logo.png";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
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
          maxWidth: 1100,
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
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  color: "#1a1a1a",
                  whiteSpace: "nowrap", // ✅ এক লাইনে থাকবে
                  lineHeight: 1.3,
                }}
              >
                Login to your account!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: "5px",
                  pl: 1.5,
                  py: 2,
                  mb: 1.3,
                  cursor: "pointer",
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


              {/* Form Fields */}
              <TextField
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
              />

              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
              />

              {/* Sign Up Button */}
              <Button
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

              {/* Sign In Link */}
              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <Link
                  component={RouterLink}  // React Router Link হিসেবে ব্যবহার হচ্ছে
                  to="/"       // Registration পেজের রাউট
                  underline="hover"
                  sx={{ color: "orange" }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Right side (Image ~45%) */}
          <Grid item xs={5}>
            <Box
              component="img"
              src={LoginImg}
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

export default Login;
