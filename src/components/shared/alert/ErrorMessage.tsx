import { Typography } from "@mui/material";

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <Typography color={"red"} fontSize={"0.9rem"} marginTop={"0.5rem"}>
    {message}
  </Typography>
);
