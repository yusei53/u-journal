import { theme } from "@/src/utils/theme";
import { Box, Popper, Fade, SxProps } from "@mui/material";
import Image from "next/image";
import { Button } from "../button";
import { useState } from "react";
import { DeleteConfirmationModal } from "../../reflection-list/modal/DeleteConfirmationModal";
import { red } from "@mui/material/colors";
import PopupButton from "../button/PopupButton";

type KebabMenuButtonProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  onUpdatePinned: () => void;
  sx?: SxProps;
  reflectionCUID: string;
  username: string;
  isPinned: boolean;
};

// MEMO: 今Card側にロジック書いてしまっているけど、Popup側にロジックを書くべきかも(Container層とかに分けるべき)
export const KebabMenuButton: React.FC<KebabMenuButtonProps> = ({
  anchorEl,
  open,
  onClick,
  onClose,
  onUpdatePinned,
  username,
  reflectionCUID,
  sx,
  isPinned,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteModalToggle = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const handleCopyLink = () => {
    const link = `${process.env.NEXT_PUBLIC_API_URL}/${username}/${reflectionCUID}`;
    navigator.clipboard.writeText(link);
    onClose();
  };

  const handlePinToggle = () => {
    onUpdatePinned();
    onClose();
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
      <Popper
        open={open}
        anchorEl={anchorEl}
        transition
        placement={"bottom-end"}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={250}>
            <Box boxShadow={1} borderRadius={2.5} bgcolor={"white"}>
              {/* // TODO: ボタンを共通コンポーネント化する */}
              <PopupButton
                src={"/share.svg"}
                alt={`リンクをコピーするボタン`}
                onClick={handleCopyLink}
                text={"リンクをコピーする"}
              />
              <PopupButton
                href={`/${username}/${reflectionCUID}/edit`}
                src={"/edit.svg"}
                alt={`編集するボタン`}
                text={"編集する"}
              />
              <PopupButton
                src={"/pin.svg"}
                alt={`プロフィールに固定するボタン`}
                onClick={handlePinToggle}
                text={isPinned ? "固定解除する" : "固定する"}
              />
              <PopupButton
                src={"/delete.svg"}
                alt={`投稿削除ボタン`}
                onClick={handleDeleteModalToggle}
                text={"削除する"}
                color={red[400]}
              />
            </Box>
          </Fade>
        )}
      </Popper>
      <DeleteConfirmationModal
        open={isDeleteModalOpen}
        onClose={handleDeleteModalToggle}
        reflectionCUID={reflectionCUID}
      />
    </>
  );
};
