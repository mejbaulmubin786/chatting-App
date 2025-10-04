import React from "react";
import { Box } from "@mui/material";

const BubbleBackground = () => {
  const bubbleCount = 100;
  const bubbles = Array.from({ length: bubbleCount }).map((_, index) => {
    const hue = Math.floor(Math.random() * 360); 
    // Gradient color দুই শেডে
    const pastel1 = `hsla(${hue}, 70%, 80%, 0.6)`;
    const pastel2 = `hsla(${hue}, 80%, 90%, 0.3)`;

    return {
      id: index,
      size: Math.random() * 50 + 20,
      left: Math.random() * 100,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
      color1: pastel1,
      color2: pastel2,
    };
  });

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {bubbles.map((bubble) => (
        <Box
          key={bubble.id}
          sx={{
            position: "absolute",
            bottom: "-100px",
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle at 30% 30%, ${bubble.color1}, ${bubble.color2})`, // 👈 গ্রেডিয়েন্ট বাবল
            borderRadius: "50%",
            boxShadow: `0 0 15px ${bubble.color1}`, // হালকা glow
            animation: `rise ${bubble.duration}s linear infinite`,
            animationDelay: `${bubble.delay}s`,
            "@keyframes rise": {
              "0%": {
                transform: "translateY(0) translateX(0) scale(1)",
                opacity: 0.8,
              },
              "50%": {
                transform: "translateY(-50vh) translateX(15px) scale(1.1)",
                opacity: 0.5,
              },
              "100%": {
                transform: "translateY(-110vh) translateX(-15px) scale(0.9)",
                opacity: 0,
              },
            },
          }}
        />
      ))}
    </Box>
  );
};

export default BubbleBackground;
