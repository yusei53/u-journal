import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "@/src/utils/theme";

type ReflectionTemplateInstructProps = {
  title: string;
  description: string;
  fadeOut?: boolean;
};

export const ReflectionTemplateInstruct: React.FC<
  ReflectionTemplateInstructProps
> = ({ title, description, fadeOut = false }) => {
  const [isVisible, setIsVisible] = useState(true);
  if (fadeOut && isVisible) {
    setTimeout(() => setIsVisible(false), 1000);
  }

  const pointerStyles = {
    "&::after": {
      content: '""',
      position: "absolute",
      right: "-10px",
      top: "20px",
      transform: "translateY(-50%)",
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "10px 0 10px 10px",
      borderColor: `transparent transparent transparent ${theme.palette.grey[400]}`,
    },
  };

  return (
    <Box display="flex" py={2}>
      <Box
        position={"relative"}
        bgcolor={theme.palette.grey[400]}
        borderRadius={"8px"}
        padding={"16px"}
        maxWidth={"300px"}
        sx={{
          ...pointerStyles,
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? "visible" : "hidden",
          transition: "opacity 0.5s ease, visibility 0.5s ease",
        }}
      >
        <Typography fontWeight={"bold"}>{title}</Typography>
        <Typography
          whiteSpace={"pre-wrap"}
          sx={{
            wordBreak: "break-word",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ReflectionTemplateInstruct;
