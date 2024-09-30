import { Button } from "@mui/material";

type MenuButtonProps = {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ title, onClick }) => {
  return (
    <Button
      sx={{
        backgroundColor: "white",
        color: "#030A12",
        borderRadius: 20,
        px: 3,
        ml: 1,
        border: 1,
        borderColor: "#D8DADF",
        minWidth: 120,
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default MenuButton;
