import { Box, Popper, Fade } from "@mui/material";
import { theme } from "@/src/utils/theme";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { markdownList } from "./markdown-list";
import MarkdownSection from "./MarkDownSection";

type MarkdownSupportPopupAreaProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
};

const MarkdownSupportPopupArea: React.FC<MarkdownSupportPopupAreaProps> = ({
  anchorEl,
  open,
  onClick,
  onClose,
}) => {
  return (
    <>
      <Box
        component={"button"}
        type={"button"}
        bgcolor={"transparent"}
        border={"none"}
        mr={1.2}
        display={"flex"}
        alignItems={"center"}
        onClick={onClick}
        onBlur={onClose}
        sx={{ cursor: "pointer" }}
      >
        <InfoOutlinedIcon
          sx={{
            color: `${theme.palette.grey[600]}`,
          }}
        />
      </Box>
      <Popper open={open} anchorEl={anchorEl} transition sx={{ zIndex: 2 }}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={250}>
            <Box
              boxShadow={1}
              borderRadius={2.5}
              bgcolor={"white"}
              zIndex={2}
              maxWidth={"320px"}
              maxHeight={"400px"}
              overflow={"auto"}
              mb={-1}
              sx={{
                "&::-webkit-scrollbar": {
                  width: "4px",
                  height: "4px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: theme.palette.grey[400],
                  borderRadius: "4px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: theme.palette.grey[600],
                },
              }}
            >
              {markdownList.map((markdown) => (
                <MarkdownSection
                  key={markdown.title}
                  image={markdown.image}
                  title={markdown.title}
                  description={markdown.description}
                />
              ))}
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default MarkdownSupportPopupArea;
