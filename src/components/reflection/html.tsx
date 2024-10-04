import React from "react";
import { Box } from "@mui/material";

type HtmlContentProps = {
  title: string;
  content: string;
  createdAt: string;
};

const HtmlContent: React.FC<HtmlContentProps> = ({
  title,
  content,
  createdAt,
}) => {
  return (
    <Box sx={{ mx: 10 }}>
      <p>{createdAt}</p>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Box>
  );
};

export default HtmlContent;
