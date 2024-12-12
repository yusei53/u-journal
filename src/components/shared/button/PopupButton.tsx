import { theme } from "@/src/utils/theme";
import { Button, Box, Typography } from "@mui/material";
import Image from "next/image";

type PopupButtonProps = {
  href?: string;
  src: string;
  alt: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  text: string;
  color?: string;
};

const PopupButton: React.FC<PopupButtonProps> = ({
  href,
  src,
  alt,
  onClick,
  text,
  color,
}) => {
  return (
    <Button
      onClick={onClick}
      href={href}
      sx={{
        color: "black",
        border: "none",
        display: "block",
        textAlign: "left",
        borderRadius: "none",
        width: "100%",
        "&:hover": {
          backgroundColor: theme.palette.primary.contrastText,
        },
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        letterSpacing={0.5}
        color={color}
      >
        <Image
          src={src}
          alt={alt}
          width={18}
          height={18}
          style={{ margin: "0 10px" }}
        />
        {text}
      </Box>
    </Button>
  );
};

export default PopupButton;
