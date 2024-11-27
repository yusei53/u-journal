import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "@/src/utils/theme";

type TProps = {
  title: string;
  description: string;
  position: "top" | "bottom" | "left" | "right";
  fadeOut?: boolean;
};

const ReflectionTemplateInstruct: React.FC<TProps> = ({
  title,
  description,
  position,
  fadeOut = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (fadeOut) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [fadeOut]);

  const pointerStyles = {
    top: {
      "&::after": {
        content: '""',
        position: "absolute",
        top: "-10px",
        left: "20px",
        transform: "translateX(-50%)",
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "0 10px 10px 10px",
        borderColor: `transparent transparent ${theme.palette.grey[400]} transparent`,
      },
    },
    bottom: {
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-10px",
        left: "20px",
        transform: "translateX(-50%)",
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "10px 10px 0 10px",
        borderColor: `${theme.palette.grey[400]} transparent transparent transparent`,
      },
    },
    left: {
      "&::after": {
        content: '""',
        position: "absolute",
        left: "-10px",
        top: "20px",
        transform: "translateY(-50%)",
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "10px 10px 10px 0",
        borderColor: `transparent ${theme.palette.grey[400]} transparent transparent`,
      },
    },
    right: {
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
    },
  };

  const renderDescription = (text: string) => {
    return text.split(/<br\s*\/?>|\n/g).map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index !== text.split(/<br\s*\/?>|\n/g).length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <Box display="flex" paddingInline={2}>
      <Box
        position={"relative"}
        bgcolor={theme.palette.grey[400]}
        borderRadius={"8px"}
        padding={"16px"}
        maxWidth={"300px"}
        sx={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease",
          ...pointerStyles[position],
        }}
      >
        <Typography fontWeight={"bold"}>{title}</Typography>
        <Typography
          component="div"
          sx={{
            wordBreak: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          {renderDescription(description)}
        </Typography>
      </Box>
    </Box>
  );
};

export default ReflectionTemplateInstruct;
