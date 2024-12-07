import { theme } from "@/src/utils/theme";
import { Box, Popper, Fade, SxProps } from "@mui/material";
import Image from "next/image";
import { Button } from "../button";
import { useState } from "react";
import { DeleteConfirmationModal } from "../../reflection-list/modal/DeleteConfirmationModal";

type KebabMenuButtonProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  sx?: SxProps;
  reflectionCUID: string;
  username: string;
};

export const KebabMenuButton: React.FC<KebabMenuButtonProps> = ({
  anchorEl,
  open,
  onClick,
  onClose,
  username,
  reflectionCUID,
  sx,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteModalOpen = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

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
              <Button
                onClick={handleDeleteModalOpen}
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
                    src={"/delete.svg"}
                    alt={`Icon`}
                    width={18}
                    height={18}
                    style={{ marginRight: 10 }}
                  />
                  削除する
                </Box>
              </Button>
            </Box>
          </Fade>
        )}
      </Popper>
      <DeleteConfirmationModal
        open={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
        reflectionCUID={reflectionCUID}
      />
    </>
  );
};
