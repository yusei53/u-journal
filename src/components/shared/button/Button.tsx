import { Button as MuiButton, ButtonProps } from "@mui/material";

type CustomButtonProps = {
  text: string;
} & ButtonProps;

export const Button: React.FC<CustomButtonProps> = ({ text, sx, ...props }) => (
  <MuiButton
    sx={{
      color: "black",
      border: "1px solid #DCDFE3",
      borderRadius: 10,
      padding: "8px 16px",
      ...sx,
    }}
    {...props}
  >
    {text}
  </MuiButton>
);
