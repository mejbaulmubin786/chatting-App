# 🔹 Box কি?

MUI এর **Box** হলো একটি wrapper component, যেটা মূলত `div` এর মতো কাজ করে।
এটা **utility component**, মানে আপনি সরাসরি এর মধ্যে **CSS properties** (margin, padding, color, background, display ইত্যাদি) লিখে দিতে পারেন।

👉 সহজভাবে:
`<Box>` হলো একটা **স্টাইল করা div**, যেটার মধ্যে inline CSS বা responsive style খুব সহজে লেখা যায়।

---

# 🔹 Box এর মূল বৈশিষ্ট্য

1. **HTML wrapper** → by default `div` হিসাবে render হয়।
   তবে চাইলে `component` prop ব্যবহার করে অন্য HTML ট্যাগ বানাতে পারেন।

   ```jsx
   <Box component="section">This is a section</Box>
   ```

2. **sx prop** → Box এ style দেওয়ার জন্য `sx` prop সবচেয়ে বেশি ব্যবহার হয়।
   এখানে আপনি CSS এর মতো property লিখতে পারবেন।

   ```jsx
   <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2 }}>
     Styled Box
   </Box>
   ```

3. **Responsive design** → `sx` prop এর মধ্যে breakpoint অনুযায়ী style দেওয়া যায়।

   ```jsx
   <Box
     sx={{
       width: {
         xs: '100%',  // mobile এ full
         sm: '50%',   // tablet এ 50%
         md: '25%'    // desktop এ 25%
       },
       bgcolor: 'secondary.light',
       p: 2
     }}
   >
     Responsive Box
   </Box>
   ```

---

# 🔹 Box এর সাধারণ properties (sx prop এ)

| Property                 | কাজ                       |
| ------------------------ | ------------------------- |
| `m`                      | margin                    |
| `p`                      | padding                   |
| `bgcolor`                | background color          |
| `color`                  | text color                |
| `width` / `height`       | আকার                      |
| `display`                | flex, grid, block ইত্যাদি |
| `border`, `borderRadius` | border style              |
| `boxShadow`              | shadow effect             |

👉 উদাহরণ:

```jsx
<Box
  sx={{
    p: 3,
    m: 2,
    bgcolor: 'info.main',
    borderRadius: 2,
    boxShadow: 3,
    color: 'white'
  }}
>
  Stylish Box
</Box>
```

---

# 🔹 Box with Flexbox

Box এর মাধ্যমে আপনি সহজে **flexbox layout** তৈরি করতে পারবেন:

```jsx
<Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    bgcolor: 'grey.200'
  }}
>
  <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
    Centered Box
  </Box>
</Box>
```

---

# 🔹 Box with Grid

Box এর ভেতরে Grid ব্যবহার করা যায়, আবার Box নিজেই CSS Grid তৈরি করতে পারে:

```jsx
<Box
  sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 2
  }}
>
  <Box sx={{ bgcolor: 'error.main', p: 2 }}>Item 1</Box>
  <Box sx={{ bgcolor: 'success.main', p: 2 }}>Item 2</Box>
  <Box sx={{ bgcolor: 'warning.main', p: 2 }}>Item 3</Box>
</Box>
```

---

# 🔹 Custom Component হিসেবে Box

Box কে আপনি **button, form, nav** ইত্যাদির মতো অন্য component বানাতে পারেন:

```jsx
<Box component="button" sx={{ p: 2, bgcolor: 'primary.main', color: '#fff' }}>
  Click Me
</Box>
```

---

# ✅ সারসংক্ষেপ

* Box হলো একটি **div-এর মতো wrapper** যেটার মধ্যে সহজে style দেওয়া যায়।
* `sx` prop দিয়ে **CSS properties** যোগ করা যায়।
* Responsive design এর জন্য breakpoints ব্যবহার করা যায়।
* Flexbox, Grid, Typography, Background, Shadow সবকিছু সহজে করা যায়।

---

আপনি কি চান আমি **Box আর Grid একসাথে ব্যবহার করে একটা Responsive Layout** এর example লিখে দিই, যাতে দুটো component এর ব্যবহার স্পষ্ট বোঝা যায়?
