import { Box, Popper, Fade, Tooltip } from "@mui/material";
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
    <Box position={"relative"} display={"flex"} alignItems={"center"}>
      <Tooltip
        title={"書き方のヒント"}
        placement={"top"}
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -10],
                },
              },
            ],
          },
        }}
      >
        <Box
          component={"button"}
          type={"button"}
          bgcolor={"transparent"}
          border={"none"}
          mr={1.2}
          display={"flex"}
          alignItems={"center"}
          onClick={onClick}
          sx={{ cursor: "pointer" }}
        >
          <InfoOutlinedIcon
            sx={{
              color: `${theme.palette.grey[600]}`,
            }}
          />
        </Box>
      </Tooltip>
      {open && (
        // MEMO: なぜかこのPopperは外側をクリックしてもスマホで閉じないため、透明なBoxを設置
        <Box
          onClick={onClose}
          position={"fixed"}
          top={0}
          left={0}
          width={"100vw"}
          height={"100vh"}
          zIndex={1}
        />
      )}
      <Popper
        open={open}
        anchorEl={anchorEl}
        transition
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 10], // x軸: 0, y軸: 8px
            },
          },
        ]}
        sx={{
          zIndex: 2,
          // transform: "translateY(-8px) !important",
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={250}>
            <Box
              boxShadow={1}
              borderRadius={2.5}
              bgcolor={"white"}
              zIndex={3}
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
              onClick={(e) => e.stopPropagation()}
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
    </Box>
  );
};

export default MarkdownSupportPopupArea;
