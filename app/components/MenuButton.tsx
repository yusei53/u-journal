import { Button } from "@mui/material";

type MenuButtonProps = {
  title: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ title }) => {
  return (
    <Button
      sx={{
        backgroundColor: "white",
        color: "#030A12",
        borderRadius: "20px",
        paddingX: "20px",
        marginLeft: "8px",
        border: 1,
        borderColor: "#D8DADF",
        minWidth: "120px",
      }}
    >
      {title}
    </Button>
  );
};

export default MenuButton;
