"use client";
import { theme } from "@/src/utils/theme";
import { useMediaQuery } from "@mui/material";
import { MobileFooter } from "./mobile";
import { PCFooter } from "./pc";

export const Footer = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return isSmallScreen ? <MobileFooter /> : <PCFooter />;
};
