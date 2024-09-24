"use client";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { Box } from "@mui/material";
import StyledEditorContent from "./StyledEditorContent";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    content: `
    ユーザーはここに文章を書く
    `,
  });

  return (
    <Box mx={10}>
      <StyledEditorContent editor={editor} />
    </Box>
  );
};

export default Editor;
