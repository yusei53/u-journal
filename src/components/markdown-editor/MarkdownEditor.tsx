"use client";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import Placeholder from "@tiptap/extension-placeholder";
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
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      Placeholder.configure({
        placeholder: "文章を入力",
      }),
    ],
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
