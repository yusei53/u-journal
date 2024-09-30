import { Box, Button as MuiButton, SxProps } from "@mui/material";
import { IconType } from "react-icons";

type TProps = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: IconType;
  sx?: SxProps;
};

export const AuthButton: React.FC<TProps> = ({
  label,
  onClick,
  icon: Icon,
  sx,
}) => {
  return (
    <MuiButton
      onClick={onClick}
      sx={{ position: "relative", textTransform: "none", fontSize: 15, ...sx }}
    >
      {Icon && (
        <Box
          display={"flex"}
          alignItems={"center"}
          position={"absolute"}
          left={{ xs: 25 }}
        >
          <Icon size={25} />
        </Box>
      )}
      {label}
    </MuiButton>
  );
};
