"use client";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Box } from "@mui/material";
import StyledEditorContent from "./StyledEditorContent";

type EditorProps = {
  value: string;
  onChange: (content: string) => void;
};

const MarkdownEditor: React.FC<EditorProps> = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  return (
    <Box mx={10}>
      <StyledEditorContent editor={editor} />
    </Box>
  );
};

export default MarkdownEditor;
