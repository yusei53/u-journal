import React from "react";
import { Box } from "@mui/material";

type HtmlContentProps = {
  title: string;
  content: string;
};

const HtmlContent: React.FC<HtmlContentProps> = ({ title, content }) => {
  return <Box sx={{ mx: 10 }} dangerouslySetInnerHTML={{ __html: content }} />;
};

export default HtmlContent;
