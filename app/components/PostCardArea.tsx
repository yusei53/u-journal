import { Box, Grid, Typography } from "@mui/material";
import PostCard from "./PostCard";
import { PostCardDataProps } from "../const/PostCardData";
import UserNameBar from "./UserNameBar";

type PostCardAreaProps = {
  postcardData: PostCardDataProps[];
};

const PostCardArea: React.FC<PostCardAreaProps> = ({ postcardData }) => {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginY={5}
        flexDirection={"column"}
      >
        <Typography fontSize={20} textAlign={"center"}>
          振り返り一覧
        </Typography>
        <UserNameBar />
      </Box>
      <Box px={{ xs: 10, md: 35 }}>
        <Grid container>
          {postcardData.map((data, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <PostCard postCardData={data} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PostCardArea;
