import { Box, Typography } from "@mui/material";
import GoogleLoginButton from "./GoogleLoginButton";
import DiscordLoginButton from "./DiscordLoginButton";

const LoginForm = () => {
  return (
    <Box
      mt={15}
      mx={{ md: 25 }}
      py={5}
      px={1}
      border={"1px solid #c4c4c4"}
      borderRadius={"10px"}
    >
      <Typography textAlign={"center"} fontWeight={"bold"} fontSize={20}>
        ここにアプリ名
      </Typography>
      <Typography textAlign={"center"} my={4} fontSize={14}>
        ログインすると〇〇の機能が使えるようになります
      </Typography>
      <GoogleLoginButton />
      <DiscordLoginButton />
    </Box>
  );
};

export default LoginForm;
