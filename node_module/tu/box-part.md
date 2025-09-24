<Box
        sx={{
          minHeight: "100vh",
          //position: 'absolute',
          top: "0px",
          width: "100%",
          Height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
          p: 2,
        }}
      >
        <Paper
          elevation={12}
          sx={{

            maxWidth: 600,
            width: "100%",
            borderRadius: 5,

          }}
        >

          <Box
            sx={{
              minHeight: "60vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#f9f9f9ff",
              p: 5,
              borderRadius: 5,
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
            <Typography variant="body2" sx={{ mb: 3, color: "gray" }}>
              Free register and you can enjoy it
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
              Back to login
            </Button>

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
              SAND
            </Button>

          </Box>

        </Paper>
      </Box>