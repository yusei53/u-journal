import { styled } from "@mui/material/styles";
import { EditorContent } from "@tiptap/react";

const StyledEditorContent = styled(EditorContent)(({ theme }) => ({
  "& .ProseMirror": {
    outline: "none",
  },
  "&": {
    "&:first-of-type": {
      marginTop: 2,
    },

    /* List styles */
    "ul, ol": {
      padding: "0 1rem",
      margin: "1.25rem 1rem 1.25rem 0.4rem",

      "& li p": {
        marginTop: "0.25em",
        marginBottom: "0.25em",
      },
    },

    /* Heading styles */
    "h1, h2, h3, h4, h5, h6": {
      lineHeight: 1.1,
      marginTop: "2.5rem",
      textWrap: "pretty",
    },

    "h1, h2": {
      marginTop: "4rem",
      marginBottom: "1.5rem",
      borderBottom: "1px solid #e0e0e0",
    },

    h1: {
      fontSize: "1.4rem",
    },

    h2: {
      fontSize: "1.2rem",
    },

    h3: {
      fontSize: "1.1rem",
    },

    "h4, h5, h6": {
      fontSize: "1rem",
    },

    /* Code and preformatted text styles */
    code: {
      backgroundColor: "#f0f0f0",
      borderRadius: "0.4rem",
      color: "var(--black)",
      fontSize: "0.85rem",
      padding: "0.25em 0.3em",
    },

    pre: {
      background: "#1e1e1e",
      color: "white",
      fontFamily: "'JetBrainsMono', monospace",
      borderRadius: "0.4rem",
      margin: "1.5rem 0",
      padding: "0.75rem 1rem",

      "& code": {
        backgroundColor: "transparent",
        fontSize: "0.8rem",
      },
    },

    mark: {
      backgroundColor: "#fffbc4",
      borderRadius: "0.4rem",
      boxDecorationBreak: "clone",
      padding: "0.1rem 0.3rem",
    },

    blockquote: {
      borderLeft: "3px solid grey",
      margin: "1.5rem 0",
      paddingLeft: "1rem",
    },

    hr: {
      border: "#7d8186",
      borderTop: "1px solid grey",
      margin: "2rem 0",
    },
  },
}));

export default StyledEditorContent;
