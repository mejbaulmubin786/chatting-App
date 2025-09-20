
              
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

                {/* Sign Up Link */}
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                  Don’t have an account?{" "}
                  <Link
                    component={RouterLink}
                    to="/" // Registration route
                    underline="hover"
                    sx={{ color: "orange" }}
                  >
                    Sign up
                  </Link>
                </Typography>
                <Typography onClick={forGetPassword} variant="p" align="center" component="p" sx={{ color: " #6f42ffff" }}>
                  Forgotten password
                </Typography>
              
            