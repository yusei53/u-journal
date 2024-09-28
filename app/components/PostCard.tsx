import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { PostCardDataProps } from "../types/types";

type PostCardProps = {
  postCardData: PostCardDataProps;
};

const PostCard: React.FC<PostCardProps> = ({ postCardData }) => {
  return (
    <Box mb={3}>
      <Link href={postCardData.href}>
        <Box
          bgcolor={"#f0f7ff"}
          width={252}
          height={157}
          borderRadius={3}
        ></Box>
      </Link>
      <Box my={1}>
        <Link href={postCardData.href} style={{ textDecoration: "none" }}>
          <Typography letterSpacing={2} color="black">
            {postCardData.title}
          </Typography>
        </Link>
      </Box>
      <Typography color="#8D9298" my={1}>
        {postCardData.day}
      </Typography>
    </Box>
  );
};

export default PostCard;
