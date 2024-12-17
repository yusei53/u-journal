import { SxProps } from "@mui/material";
import { useState } from "react";
import { KebabMenuButton } from "./KebabMenuButton";
import { useUpdatePinnedReflection } from "@/src/hooks/reflection/useUpdatePinnedReflection";
import { Reflection } from "@/src/api/reflection-api";

type PopupContainerProps = {
  reflectionCUID: string;
  username: string;
  isPinned: boolean;
  reflection: Reflection;
};

export const PopupContainer: React.FC<PopupContainerProps> = ({
  username,
  reflectionCUID,
  isPinned,
  reflection,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCopyLink = () => {
    const link = `${process.env.NEXT_PUBLIC_API_URL}/${username}/${reflectionCUID}`;
    navigator.clipboard.writeText(link);
    handleClose();
  };

  const { handleUpdatePinned } = useUpdatePinnedReflection({ reflection });

  const handlePinToggle = () => {
    handleUpdatePinned();
    handleClose();
  };

  return (
    <KebabMenuButton
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClick={handleClick}
      onClose={handleClose}
      onCopyLink={handleCopyLink}
      onPinToggle={handlePinToggle}
      reflectionCUID={reflectionCUID}
      username={username}
      isPinned={isPinned}
    />
  );
};
