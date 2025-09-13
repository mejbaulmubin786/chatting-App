
এই টিউটোরিয়ালটা এমনভাবে সাজাব যাতে একেবারে **শুরু থেকে** শিখতে পারেন এবং পরে আপনি নিজে Login / Registration এর মতো **পুরো ডিজাইন বানাতে পারবেন**।

---

# 📘 MUI (Material UI) – Beginner Friendly Tutorial

---

## 🔹 1. Install & Setup

প্রথমে আপনার React প্রোজেক্টে MUI ইনস্টল করুন:

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

---

## 🔹 2. Basic Concept: Box (div এর মতো)

👉 MUI-তে সব ডিজাইনের মূল জিনিস হলো `Box`।
এটা একদম **HTML এর `<div>`** এর মতো কাজ করে, শুধু এখানে `sx={{}}` ব্যবহার করে **CSS লেখা যায় JavaScript object আকারে**।

```jsx
import Box from "@mui/material/Box";

export default function DemoBox() {
  return (
    <Box
      sx={{
        bgcolor: "lightblue",   // background-color
        p: 2,                   // padding: 16px
        borderRadius: 2,        // border-radius: 16px
        textAlign: "center",    // text-align: center
      }}
    >
      Hello MUI Box!
    </Box>
  );
}
```

✅ এখানে `sx` মানে হলো **style object**।

---

## 🔹 3. Typography (h1, p ইত্যাদি)

```jsx
import Typography from "@mui/material/Typography";

export default function DemoText() {
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "purple" }}>
        This is a Heading
      </Typography>
      <Typography variant="body1" sx={{ color: "gray" }}>
        This is a simple paragraph using MUI Typography.
      </Typography>
    </>
  );
}
```

👉 `variant="h4"` মানে predefined স্টাইল (যেমন h1, h2, p)।

---

## 🔹 4. Button

```jsx
import Button from "@mui/material/Button";

export default function DemoButton() {
  return (
    <>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined" sx={{ ml: 2 }}>
        Outlined
      </Button>
    </>
  );
}
```

* `contained` = filled button
* `outlined` = bordered button
* `sx={{ ml: 2 }}` = margin-left: 16px

---

## 🔹 5. TextField (Input Field)

```jsx
import TextField from "@mui/material/TextField";

export default function DemoInput() {
  return (
    <div>
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
    </div>
  );
}
```

---

## 🔹 6. Grid (Layout System)

👉 Flexbox/Grid layout সহজ করার জন্য ব্যবহার হয়।

```jsx
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function DemoGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper sx={{ p: 2, textAlign: "center" }}>Left Side</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper sx={{ p: 2, textAlign: "center" }}>Right Side</Paper>
      </Grid>
    </Grid>
  );
}
```

* `container` = main wrapper
* `item` = child grid
* `xs={6}` = 12 column এর মধ্যে 6 টা নেবে (অর্ধেক স্ক্রিন)

---

## 🔹 7. Combine Everything (Login Box Example)

```jsx
import React from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function SimpleLogin() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9f9f9",
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, width: 350, borderRadius: 2, textAlign: "center" }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          Login
        </Typography>
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            background:
              "linear-gradient(90deg, rgba(111,66,255,1) 0%, rgba(0,150,255,1) 100%)",
          }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}
```

---

# 🎯 Summary

MUI শেখার জন্য আপনার যা দরকার:

1. `Box` দিয়ে layout control (div এর মতো)
2. `Typography` দিয়ে টেক্সট ডিজাইন
3. `Button` ও `TextField` দিয়ে ফর্ম
4. `Grid` দিয়ে layout split
5. সবগুলো `sx={{}}` দিয়ে স্টাইল করা

---

