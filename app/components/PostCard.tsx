import { Box, Typography } from "@mui/material";

const PostCard = () => {
  return (
    <>
      <Box bgcolor={"#f0f7ff"} width={252} height={157} borderRadius={3}></Box>
      <Typography letterSpacing={2}>題名題名題名題名</Typography>
      <Typography color="#8D9298">20xx/x/x</Typography>
    </>
  );
};

export default PostCard;
