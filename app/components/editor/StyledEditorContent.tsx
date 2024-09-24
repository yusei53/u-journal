import { styled } from "@mui/material/styles";
import { EditorContent } from "@tiptap/react";

const StyledEditorContent = styled(EditorContent)(({ theme }) => ({
  // https://github.com/ueberdosis/tiptap/blob/main/demos/src/Examples/MarkdownShortcuts/React/styles.scss
  "&": {
    "&:first-child": {
      marginTop: 0,
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
      marginTop: "3.5rem",
      marginBottom: "1.5rem",
      borderBottom: "1px solid black",
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
      backgroundColor: "var(--purple-light)",
      borderRadius: "0.4rem",
      color: "var(--black)",
      fontSize: "0.85rem",
      padding: "0.25em 0.3em",
    },

    pre: {
      background: "var(--black)",
      borderRadius: "0.5rem",
      color: "var(--white)",
      fontFamily: "'JetBrainsMono', monospace",
      margin: "1.5rem 0",
      padding: "0.75rem 1rem",

      "& code": {
        background: "none",
        color: "inherit",
        fontSize: "0.8rem",
        padding: 0,
      },
    },

    mark: {
      backgroundColor: "#FAF594",
      borderRadius: "0.4rem",
      boxDecorationBreak: "clone",
      padding: "0.1rem 0.3rem",
    },

    blockquote: {
      borderLeft: "3px solid var(--gray-3)",
      margin: "1.5rem 0",
      paddingLeft: "1rem",
    },

    hr: {
      border: "none",
      borderTop: "1px solid var(--gray-2)",
      margin: "2rem 0",
    },
  },
}));

export default StyledEditorContent;
