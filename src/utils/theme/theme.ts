"use client";
import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    fontSize: 12.5,
  },
  palette: {
    primary: { main: "#f0f7ff" },
    grey: { 500: grey[500] },
  },
});
