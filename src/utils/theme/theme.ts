"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontSize: 12.5,
  },
  palette: {
    // mainが背景色で、contrastTextがhover
    primary: { main: "#f0f7ff", contrastText: "#F7FAFC" },
    // 400がborder, 500が文字
    grey: { 400: "#ededed", 500: "#adb5bd" },
  },
});
