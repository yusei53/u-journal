import { theme } from "@/src/utils/theme";
import { Box, Popper, Fade, SxProps } from "@mui/material";
import Image from "next/image";
import { Button } from "../button";

type KebabMenuButtonProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  onPin: () => void;
  sx?: SxProps;
  reflectionCUID: string;
  username: string;
  isPinned: boolean;
};

export const KebabMenuButton: React.FC<KebabMenuButtonProps> = ({
  anchorEl,
  open,
  onClick,
  onClose,
  onPin,
  username,
  reflectionCUID,
  sx,
  isPinned,
}) => {
  return (
    <>
      <Box
        component={"button"}
        type={"button"}
        bgcolor={"transparent"}
        border={"none"}
        borderRadius={50}
        width={30}
        height={30}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={onClick}
        onBlur={onClose}
        sx={{
          cursor: "pointer",
          ...sx,
          "&:hover": {
            bgcolor: `${theme.palette.primary.contrastText}`,
          },
        }}
      >
        <Image
          src={"/kebab-menu.svg"}
          alt={"ケバブボタン"}
          width={22}
          height={22}
        />
      </Box>
      <Popper open={open} anchorEl={anchorEl} transition sx={{ zIndex: 2 }}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={250}>
            <Box boxShadow={1} borderRadius={2.5} bgcolor={"white"} zIndex={3}>
              <Button
                href={`/${username}/${reflectionCUID}/edit`}
                sx={{
                  border: "none",
                  display: "block",
                  textAlign: "left",
                  borderRadius: "none",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.contrastText,
                  },
                }}
              >
                <Box display={"flex"} alignItems={"center"} letterSpacing={0.8}>
                  <Image
                    src={"/edit.svg"}
                    alt={`Icon`}
                    width={18}
                    height={18}
                    style={{ marginRight: 10 }}
                  />
                  編集する
                </Box>
              </Button>
              {/* ピン止めするボタン */}
              <Button
                onClick={onPin} // ピン止め処理用のイベント
                sx={{
                  border: "none",
                  display: "block",
                  textAlign: "left",
                  borderRadius: "none",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.contrastText,
                  },
                }}
              >
                <Box display={"flex"} alignItems={"center"} letterSpacing={0.8}>
                  <Image
                    src={"/pin.svg"} // ピンアイコンの画像パス
                    alt={`Pin Icon`}
                    width={18}
                    height={18}
                    style={{ marginRight: 10 }}
                  />
                  {isPinned ? "ピン止めを解除" : "ピン止めする"}
                </Box>
              </Button>
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  );
};
