To add a bubble animation effect to the background of your login page, where bubbles of varying sizes rise from the bottom to the top, we can use CSS animations combined with React to create a dynamic and visually appealing effect. The bubbles will be circular `div` elements styled with CSS, animated to move upward, and positioned randomly across the screen. We'll overlay this animation on top of your existing background image.

### Approach
1. **Create Bubble Elements**: Use a loop to generate multiple `div` elements representing bubbles.
2. **Style Bubbles**: Make them circular, semi-transparent, and of varying sizes.
3. **Animate Bubbles**: Use CSS `@keyframes` to animate the bubbles moving from the bottom to the top with a slight horizontal sway.
4. **Integrate with Existing Code**: Add the bubble animation as a child of the `Box` component, ensuring it doesn't interfere with the login form or other elements.

### Updated Code
Below is the modified `Login` component with the bubble animation added. The changes are primarily in the `Box` component, where we add a new `Box` for the bubbles and define the necessary CSS for the animation.

<xaiArtifact artifact_id="f00ec3ad-e0a3-4660-ad5a-11edd0d1c3de" artifact_version_id="938a9b47-1314-4d54-ac84-2e453ba3db97" title="Login.jsx" contentType="text/jsx">
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
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [resetMessage, setResetMessage] = useState("");

  // Generate bubbles
  const bubbleCount = 20; // Number of bubbles
  const bubbles = Array.from({ length: bubbleCount }).map((_, index) => ({
    id: index,
    size: Math.random() * 50 + 20, // Random size between 20px and 70px
    left: Math.random() * 100, // Random horizontal position (0-100%)
    duration: Math.random() * 5 + 5, // Random duration between 5s and 10s
    delay: Math.random() * 5, // Random delay between 0s and 5s
  }));

  const handleLogin = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

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

    if (Object.keys(newErrors).length === 0) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if (userCredential.user.emailVerified === true) {
            navigate("/");
          } else {
            setErrors({ email: "Please verify your email before logging in." });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found") {
            setErrors({ email: "Invalid email or password" });
          } else {
            setErrors({ email: "An error occurred. Please try again." });
          }
        });
    }
  };

  const handleGoogle = () => {
    console.log("Google");
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
        if (errorCode === "auth/user-not-found") {
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        boxSizing: "border-box",
        height: "100vh",
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Bubble Animation */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none", // Prevents bubbles from interfering with clicks
        }}
      >
        {bubbles.map((bubble) => (
          <Box
            key={bubble.id}
            sx={{
              position: "absolute",
              bottom: "-100px", // Start below the viewport
              left: `${bubble.left}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              background: "rgba(255, 255, 255, 0.3)", // Semi-transparent white
              borderRadius: "50%", // Circular shape
              animation: `rise ${bubble.duration}s linear infinite`,
              animationDelay: `${bubble.delay}s`,
              "@keyframes rise": {
                "0%": {
                  transform: "translateY(0) translateX(0)",
                  opacity: 0.3,
                },
                "50%": {
                  transform: "translateY(-50vh) translateX(10px)", // Slight horizontal sway
                  opacity: 0.5,
                },
                "100%": {
                  transform: "translateY(-100vh) translateX(-10px)", // Move to top
                  opacity: 0,
                },
              },
            }}
          />
        ))}
      </Box>

      <Paper
        elevation={12}
        sx={{
          maxWidth: 800,
          width: "100%",
          borderRadius: 5,
          overflow: "hidden",
          display: showFirstDiv ? "block" : "none",
          zIndex: 2, // Above bubbles
        }}
      >
        <Grid container spacing={0}>
          <Grid
            item
            size={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 3, md: 6 },
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
              Login to your account!
            </Typography>

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

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don’t have an account?{" "}
              <Link component={RouterLink} to="/" underline="hover" sx={{ color: "orange" }}>
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
          borderRadius: 5,
          p: 5,
          display: showFirstDiv ? "none" : "block",
          zIndex: 2, // Above bubbles
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
        <Typography variant="body2" sx={{ mb: 1, color: "#333" }}>
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
          <Typography variant="body2" align="center" sx={{ mt: 2, color: "green" }}>
            {resetMessage}
          </Typography>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            mt: 1,
          }}
        >
          <Button
            onClick={handleForgotPassword}
            variant="contained"
            fullWidth
            sx={{
              py: 2,
              px: 1,
              background:
                "linear-gradient(90deg, rgba(111,66,255,1) 0%, rgba(0,150,255,1) 100%)",
              borderRadius: "30px",
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
              py: 2,
              px: 1,
              borderColor: "#6f42ff",
              color: "#6f42ff",
              borderRadius: "30px",
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
</xaiArtifact>

### Explanation of Changes
1. **Bubble Generation**:
   - Added a `bubbles` array using `Array.from` to create 20 bubble objects, each with a random `size`, `left` position, `duration`, and `delay` for varied animation.
   - Each bubble has:
     - `size`: Random between 20px and 70px.
     - `left`: Random horizontal position (0-100% of the viewport width).
     - `duration`: Random animation duration between 5s and 10s.
     - `delay`: Random delay between 0s and 5s to stagger the animations.

2. **Bubble Animation**:
   - Added a `Box` component inside the main `Box` to contain the bubbles, with `position: absolute` and `zIndex: 1` to place it behind the login form (`zIndex: 2`).
   - Each bubble is a `Box` with:
     - Circular shape (`borderRadius: "50%"`).
     - Semi-transparent white background (`background: "rgba(255, 255, 255, 0.3)"`).
     - Animation named `rise` that moves the bubble from the bottom (`bottom: "-100px"`) to the top (`translateY(-100vh)`), with a slight horizontal sway (`translateX`) and fading opacity.
   - The `@keyframes rise` defines the animation:
     - Starts at the bottom with 0.3 opacity.
     - Moves halfway up with a slight right sway and 0.5 opacity.
     - Reaches the top with a slight left sway and 0 opacity (fades out).

3. **Integration**:
   - The bubble container has `pointerEvents: "none"` to ensure bubbles don’t interfere with user interactions (e.g., clicking the login form).
   - The `Paper` components have `zIndex: 2` to stay above the bubbles.
   - The main `Box` has `position: "relative"` and `overflow: "hidden"` to contain the bubbles within the viewport.

### Customization Options
- **Bubble Count**: Change `bubbleCount` to increase or decrease the number of bubbles.
- **Bubble Size**: Adjust the range in `Math.random() * 50 + 20` for smaller or larger bubbles.
- **Animation Speed**: Modify `duration` range (e.g., `Math.random() * 5 + 5`) for faster or slower animations.
- **Bubble Color**: Change `background: "rgba(255, 255, 255, 0.3)"` to a different color or opacity (e.g., `rgba(111, 66, 255, 0.3)` for purple bubbles).
- **Sway Effect**: Adjust the `translateX` values in the `@keyframes rise` to increase or decrease the horizontal movement.

### Notes
- **Performance**: 20 bubbles should be lightweight, but if you notice performance issues on low-end devices, reduce `bubbleCount`.
- **Background Image**: The bubbles are semi-transparent, so they blend with your existing `BackgroundImg`. If the image is too bright or dark, you may need to adjust the bubble color or add a slight overlay (e.g., `background: "rgba(0, 0, 0, 0.2)"` on the bubble container) to improve visibility.
- **Browser Compatibility**: The animation uses CSS transforms and keyframes, which are widely supported. Ensure your target browsers support `backdropFilter` if you add blur effects later.

If you want further tweaks (e.g., different bubble shapes, colors, or animation patterns), let me know!